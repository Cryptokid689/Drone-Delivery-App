import React from 'react';
import { centerStyle } from '../utils/utils';
import BasicTimeline from '../components/mui/BasicTimeline.components.mui';
import SelectDrones from '../components/delivery processes/SelectDrones.components';
import DeliveryForm from '../components/delivery processes/DeliveryForm.components';
import ProcessPayment from '../components/delivery processes/ProcessPayment.components';
import Completed from '../components/delivery processes/Completed.components';
import WaitingForRecipientApproval from '../components/delivery processes/WaitingForRecipientApproval.components';
import WaitingForAdminApproval from '../components/delivery processes/WaitingForAdminApproval.components';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { deliveryGetRequest } from '../hooks/users.hooks';
import ErrorBoundary from '../components/ErrorBoundary.components';
import { CircularProgress } from '@mui/material';


function UserViewSentDelivery() {
    const userInfo = useSelector(state => state.user)
    const deliveryId = useParams().id

    const getDeliveryQuery = useQuery("get delivery info", ()=>deliveryGetRequest({route: `id/${deliveryId}`}))

    const [deliveryDetails, setDeliveryDetails] = React.useState({
        sender: getDeliveryQuery.data.body.sender,
        receiver: getDeliveryQuery.data.body.receiver._id,
        droneType: getDeliveryQuery.data.body.drone.type,
        pickupLocation: getDeliveryQuery.data.body.pickupLocation,
        deliveryLocation: getDeliveryQuery.data.body.deliveryLocation,
        deliveryScheduledDate: getDeliveryQuery.data.body.deliveryScheduledDate,
        payloadWeight: getDeliveryQuery.data.body.payloadWeight
    })
    console.log(deliveryDetails)

    let elements = [
        { index: 0, description: "Select Drone", completed: true, component: props => SelectDrones({setDeliveryDetails: setDeliveryDetails, ...props}) },
        { index: 1, description: "Enter Delivery Info", completed: true, component: props => DeliveryForm({setDeliveryDetails: setDeliveryDetails, ...props}) },
        { index: 2, description: "Wait for recipient's approval", completed: getDeliveryQuery.data.body.receiverApproval === "approved", component: WaitingForRecipientApproval },
        { index: 3, description: "Process payment", completed: getDeliveryQuery.data.body.hasPaid, component: ProcessPayment },
        { index: 4, description: "Wait for admin approval", completed: getDeliveryQuery.data.body.adminApproval === "approved", component: WaitingForAdminApproval },
        { index: 5, description: "Completed", completed: getDeliveryQuery.data.body.completed, component: Completed },
    ]
    const [processes, setProcesses] = React.useState(elements)
    console.log(processes)
    const [currentProcess, setCurrentProcess] = React.useState(processes.find(process => process.completed))

    function goToElement(index) {
        if(index > 0) {
            if(processes[index-1].completed) {
                setCurrentProcess(processes.find(process => process.index === index))
            }
        } else {
            setCurrentProcess(processes.find(process => process.index === index))
        }
        // setCurrentProcess(processes.find(process => process.index === index))
    }

    function completeProcess(index) {
        const updatedProcesses = [...processes]
        updatedProcesses.find(process => process.index === index).completed = true
        setProcesses(updatedProcesses)
    }

    return (
        <ErrorBoundary message="There was an error fetching the delivery details. Check your internet and try again" isError={getDeliveryQuery.isError}>
            {getDeliveryQuery.isLoading ? <CircularProgress sx={{color: "#ffb11f"}} size={100}/>: 
            <section className="profile-section">
                <div className="main_content_iner overly_inner ">
                    <div className="container-fluid p-0 ">

                        <div className="row">
                            <div style={{height: "85vh"}} className="col-lg-3 ">
                                <div style={{...centerStyle, flexDirection: "column"}} className="white_card card_height_100">
                                    <h4>Delivery Steps</h4>
                                    <div><BasicTimeline current={currentProcess.index} goToElement={goToElement} elements={processes}/></div>
                                    
                                </div>
                            </div>
                            <div style={{height: "85vh"}} className="col-lg-9">
                                <div style={{...centerStyle, flexDirection: "column"}} className="white_card card_height_100 mb_30">
                                    <currentProcess.component
                                        setProcesses={setProcesses}
                                        deliveryDetails={deliveryDetails} 
                                        type="old"
                                        index={currentProcess.index} 
                                        isCompleted={currentProcess.completed} 
                                        completeProcess={completeProcess}
                                        goToElement={goToElement}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>}
        </ErrorBoundary>
    )
}


export default UserViewSentDelivery