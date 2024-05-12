import React from 'react';
import itemPic from "../../assets/img/products/img-5.png"


function SelectDrones(props) {
    const sizes = {
        small: 15,
        medium: 25,
        large: 40
    } 
    const availability = {
        small: true,
        medium: false,
        large: true
    } 

    function pickDrone(drone) {
        if(!availability[drone]) return
        props.setDeliveryDetails(prev => {
            return {
                ...prev,
                droneType: drone
            }
        })

        props.completeProcess(props.index)

    }

    const dronesHTML = ["small", "medium", "large"].map(drone => {
        const classForNew = props.deliveryDetails.droneType === drone ? "selected" : (availability[drone] ? "select-drone" : "select-drone-unavailable-div")
        const classForOld = "7"

        return (
            <div key={drone} onClick={()=>pickDrone(drone)} className={`${props.type === "new" ? classForNew: classForOld} col-md-4`}>
                <div className={`white_card position-relative ${props.type === "new" ? classForNew: classForOld}`}>
                    <div className="card-body">
                        <img src={itemPic} alt="" className={`d-block mx-auto ${props.type==="new" && !availability[drone] && "select-drone-unavailable-img"}`} height="150" />
                        <div className="row">
                            <div className="col">
                                {props.type === "new"&&<span style={{ background: availability[drone]?"green":'red', color: "white" }} className="badge_btn_3  mb-1">{availability[drone]?"Available": "Unavailable"}</span> }
                                <a style={{color: "black"}} href className="f_w_400 f_s_14 d-block">{drone.toLocaleUpperCase()}</a>
                            </div>
                            <div>
                                <p className="text-dark mt-0">Max Capacity: {sizes[drone]}KG</p>
                                <p className="text-dark mt-0">Price: #{(sizes[drone]*1000).toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            <div className="container-fluid p-0 ">
                <div className="row">
                    <div className="col-12">
                        <div className="page_title_box d-flex align-items-center">
                            <div style={{width: "100%"}} className="page_title_left">
                                <h3 style={{textAlign: "center", width: "100%", padding: "0"}} className="f_s_30 f_w_700 dark_text">Select a Drone</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">{dronesHTML}</div>
            </div>
            {props.isCompleted && <button style={{marginTop: "10px"}} onClick={() => props.goToElement(props.index+1)} type="button" className="btn btn-outline-success mb-3">Proceed</button>}
        </>
    )
}


export default SelectDrones