import React from 'react';
import CallMadeIcon from '@mui/icons-material/CallMade';


function UserDeliveries(props) {

    return <div style={{width: "90%", margin: "auto"}}>
        <h1 style={{paddingTop: "20px", paddingLeft: "20px"}}><CallMadeIcon sx={{height: 40, width: 40}}/>Sent Deliveries</h1>
        <div className="white_card_body">
            <div className="QA_section">
                <div className="table-responsive">
                    <table className="table table-striped table-user">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Sender</th>
                                <th scope="col">Last</th>
                                <th scope="col">Status</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td className='completed'>completed</td>
                                <td><span className='view-button'>View</span></td>
                                
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td><span className='current'>ACTIVE</span></td>
                                <td><span className='view-button'>View</span></td>

                                
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td className='unprocessed'>Unprocessed</td>
                                <td><span className='view-button'>View</span></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    </div>
}


export default UserDeliveries