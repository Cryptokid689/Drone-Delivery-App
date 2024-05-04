import express from "express"
import { 
    createDelivery, 
    editDelivery, 
    getDelivery, 
    getReceiverDeliveries, 
    getAllDeliveries, 
    getSenderDeliveries,
    getPendingDeliveries,
    getAdminUnApprovedDeliveries,
    getCompletedDeliveries
} from "../controllers/delivery.controller.js"

const deliveryRouter = express.Router()

deliveryRouter.post("/create", createDelivery)
deliveryRouter.post("/edit", editDelivery)
deliveryRouter.get("/id/:id", getDelivery)

deliveryRouter.get("/all", getAllDeliveries)
deliveryRouter.get("/pending", getPendingDeliveries)
deliveryRouter.get("/unapproved", getAdminUnApprovedDeliveries)
deliveryRouter.get("/completed", getCompletedDeliveries)

deliveryRouter.get("/sender/:senderId", getSenderDeliveries)
deliveryRouter.get("/receiver/:receiverId", getReceiverDeliveries)

export default deliveryRouter