import DeliveryDatabase from "../models/delivery.models.js"
import DroneDatabase from "../models/drone.models.js"

const prices = {
    small: 15000,
    medium: 25000,
    large: 40000
}

export const createDelivery = async(req, res) => {
    try {
        const {
            sender,
            receiver,
            droneType,
            pickupLocation,
            deliveryLocation,
            deliveryScheduledDate,
            payloadWeight
        } = req.body

        const drone = await DroneDatabase.findOne({ type: droneType, isAvailable: true })

        const newDelivery = new DeliveryDatabase({
            sender,
            receiver,
            drone: drone._id,
            pickupLocation,
            deliveryLocation,
            deliveryScheduledDate,
            deliveryCompletionDate: null,
            dateCreated: new Date(),
            adminApproval: "none",
            receiverApproval: "none",
            senderApproval: "approved",
            completed: false,
            price: prices[droneType],
            payloadWeight,
            hasPaid: false
        })

        drone.isAvailable = false
        await newDelivery.save()
        await drone.save()
        return res.status(201).json({ ok: true, body: newDelivery })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false, error: "Couldn't create delivery" })
    }
}

export const editDelivery = async(req, res) => {
    try {
        const { deliveryId, updates } = req.body
        const delivery = await DeliveryDatabase.findById(deliveryId)

        if(!delivery) {
            console.log("delivery not found")
            return res.status(404).json({ ok: false, error: "delivery does not exist" })
        }

        const droneUpdate = updates.find(update => update.field === "droneType")
        if(droneUpdate) {
            const oldDrone = await DroneDatabase.findById(delivery.drone)
            oldDrone.isAvailable = true
            await oldDrone.save()

            const newDrone = await DroneDatabase.findOne({ type: droneUpdate.value })
            newDrone.isAvailable = false
            await newDrone.save()
            delivery.drone = newDrone._id
            delivery.price = prices[droneUpdate.value]
        }
        
        updates.forEach(({ field, value }) => {
            if(field !== "droneType") {
                delivery[field] = value;
            }
        })

        await delivery.save()
        const updatedDelivery = await DeliveryDatabase.findById(deliveryId)
        return res.status(201).json({ ok: true, body: updatedDelivery })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false, error: "couldn't make updates. try again" })
    }
}

export const getDelivery = async(req, res) => {
    try {
        const { id } = req.params

        const delivery = await DeliveryDatabase.findById(id)
        if(!delivery) return res.status(404).json({ ok: false, error: "delivery doesn't exist" })

        return res.status(200).json({ ok: true, body: delivery })
    } catch (error) {
        return res.status(500).json({ ok: false, error: "couldn't get delivery. try again" })
    }
}

export const getAllDeliveries = async(req, res) => {
    try {
        const allDeliveries = await DeliveryDatabase.find(
        { 
            senderApproval: "approved",
            receiverApproval: "approved",

        }, { '__v': 0 }).sort({ createdAt: -1 })
        return res.status(200).json({ ok: true, body: allDeliveries })
    } catch (error) {
        return res.status(500).json({ ok: false, error: "couldn't get deliveries. try again" })
    }
}

export const getPendingDeliveries = async(req, res) => {
    try {
        const pendingDeliveries = await DeliveryDatabase.find(
        {
            senderApproval: "approved",
            adminApproval: "approved",
            receiverApproval: "approved",
            // hasPaid: false,
            completed: false,
        }, 
        { '__v': 0 }).sort({ createdAt: -1 })


        return res.status(200).json({ ok: true, body: pendingDeliveries })
    } catch (error) {
        return res.status(500).json({ ok: false, error: "couldn't get deliveries. try again" })
    }
}

export const getAdminUnApprovedDeliveries = async(req, res) => {
    try {
        const unApprovedDeliveries = await DeliveryDatabase.find(
        {
            senderApproval: "approved",
            receiverApproval: "approved",
            adminApproval: "none",
        }, 
        { '__v': 0 }).sort({ createdAt: -1 })


        return res.status(200).json({ ok: true, body: unApprovedDeliveries })
    } catch (error) {
        return res.status(500).json({ ok: false, error: "couldn't get deliveries. try again" })
    }
}

export const getCompletedDeliveries = async(req, res) => {
    try {
        const completedDeliveries = await DeliveryDatabase.find(
        {
            senderApproval: "approved",
            receiverApproval: "approved",
            adminApproval: "approved",
            hasPaid: true,
            completed: true
        }, 
        { '__v': 0 }).sort({ createdAt: -1 })


        return res.status(200).json({ ok: true, body: completedDeliveries })
    } catch (error) {
        return res.status(500).json({ ok: false, error: "couldn't get deliveries. try again" })
    }
}

export const getReceiverDeliveries = async(req, res) => {
    try {
        const receiverId = req.params
        const receiverDeliveries = await DeliveryDatabase.find(
        { 
            receiver: receiverId,
            senderApproval: "approved",
            receiverApproval: "approved",

        }, { '__v': 0 }).sort({ createdAt: -1 })
        return res.status(200).json({ ok: true, body: receiverDeliveries })
    } catch (error) {
        return res.status(500).json({ ok: false, error: "couldn't get deliveries. try again" })
    }
}

export const getSenderDeliveries = async(req, res) => {
    try {
        const senderId = req.params
        const senderDeliveries = await DeliveryDatabase.find(
        { 
            sender: senderId,
            senderApproval: "approved"

        }, { '__v': 0 }).sort({ createdAt: -1 })
        return res.status(200).json({ ok: true, body: senderDeliveries })
    } catch (error) {
        return res.status(500).json({ ok: false, error: "couldn't get deliveries. try again" })
    }
}