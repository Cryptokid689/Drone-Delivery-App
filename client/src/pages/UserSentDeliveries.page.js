import React from 'react';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { deliveryGetRequest } from '../hooks/users.hooks';
import ErrorBoundary from '../components/ErrorBoundary.components';
import { CircularProgress } from '@mui/material';
import { formatDate, formatTime, getDeliveryStatus } from '../utils/utils';
import { useNavigate } from 'react-router-dom';


function UserSentDeliveries() {
    const navigate = useNavigate()
    const userInfo = useSelector(state => state.user)
    const getUserSentDeliveriesQuery = useQuery("get users sent deliveries", () => deliveryGetRequest({ route: `sender/${userInfo._id}` }))
    const tableRowsHTML = getUserSentDeliveriesQuery.data?.body.map((delivery, i) => {
        const statusObj = getDeliveryStatus(delivery, "sender")
        return <tr key={delivery._id}>
                    <th scope="row">{i+1}</th>
                    <td>{delivery.receiver.firstName + " " + delivery.receiver.lastName}</td>
                    <td>{delivery.receiver.email}</td>
                    <td>{formatDate(delivery.deliveryScheduledDate)} by {formatTime(delivery.deliveryScheduledDate)}</td>
                    {statusObj.status === "ACTIVE" ? <td><span className='current'>ACTIVE</span></td> : <td sx={{color: statusObj.color}}>{statusObj.status}</td>}
                    <td><span onClick={() => navigate(`/user/sent/view/${delivery._id}`)} className='view-button'>View</span></td>
                </tr>
    })
    return ( 
            <ErrorBoundary message="Error fetching your sent deliveries. Check your internet and try again" isError={getUserSentDeliveriesQuery.isError}>
                {getUserSentDeliveriesQuery.isLoading ? <CircularProgress sx={{margin: "200px 500px", color: "#ffb11f"}} size={100}/> :
                <div style={{width: "90%", margin: "auto"}}>
                    <h1 style={{paddingTop: "20px", paddingLeft: "20px"}}><CallMadeIcon sx={{height: 40, width: 40}}/>Sent Deliveries</h1>
                    <div className="white_card_body">
                        <div className="QA_section">
                        {Boolean(getUserSentDeliveriesQuery.data.body.length) ? <div className="table-responsive">
                                <table className="table table-striped table-user">
                                    <thead>
                                        <tr style={{color: "#ffb11f"}}>
                                            <th scope="col">#</th>
                                            <th scope="col">Reciever Name</th>
                                            <th scope="col">Reciever Email</th>
                                            <th scope="col">Date Made</th>
                                            <th scope="col">Status</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>{tableRowsHTML}</tbody>
                                </table>
                            </div> : <h4>You haven't sent any deliveries</h4>}
                            
                        </div>
                    </div>
                </div>}
            </ErrorBoundary>
        
    )
}


export default UserSentDeliveries