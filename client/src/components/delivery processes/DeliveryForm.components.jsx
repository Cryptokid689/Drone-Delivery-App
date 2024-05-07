import React from 'react';
import FreeSolo from '../mui/FreeSolo.components.mui';


function DeliveryForm(props) {

    function submitForm() {
        props.goToElement(props.index+1)
    }

    return (
        <div class="col-lg-9">
            <div class="row justify-content-center">
                <div>
                    <div class="modal-content cs_modal">
                        <div style={{ backgroundColor: "#373063", padding: "10px" }} class="modal-header justify-content-center">
                            <h5 class="modal-title text_white">Enter Delivery Details</h5>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div>
                                    <input type="number" min={1} max={"drone.maxCapacity"} class="form-control" placeholder="Enter The Weight of the package in KG"/>
                                </div>
                                <div>
                                    <input type="email" class="form-control" placeholder="Enter Recipient's email"/>
                                </div>
                                <div>
                                    <FreeSolo label="Enter Pickup Location"/>
                                    <FreeSolo label="Enter Delivery Location"/>
                                </div>
                                <div>
                                    <input type="date" min={new Date().toISOString().split('T')[0]} class="form-control" placeholder="Enter delivery date"/>
                                </div>
                                <a onClick={submitForm} style={{cursor: "pointer", userSelect: "none"}} href class="btn_1 full_width text-center">Confirm with Recipient and Proceed</a>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DeliveryForm