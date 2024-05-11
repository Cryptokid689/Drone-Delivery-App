import React from 'react';
import itemPic from "../../assets/img/products/img-5.png"


function SelectDrones(props) {


    return (
        <>
            <div className="container-fluid p-0 ">
                <div className="row">
                    <div className="col-12">
                        <div className="page_title_box d-flex align-items-center">
                            <div style={{width: "100%"}} className="page_title_left">
                                <h3 style={{textAlign: "center", width: "100%", padding: "10px 0"}} className="f_s_30 f_w_700 dark_text">Select a Drone</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="select-drone col-md-4">
                        <div className="white_card position-relative mb_20 ">
                            <div className="card-body">
                                <img src={itemPic} alt="" className="d-block mx-auto my-4" height="150" />
                                <div className="row my-4">
                                    <div className="col">
                                        <span style={{ background: "green", color: "white" }} className="badge_btn_3  mb-1">Available</span> 
                                        <a href className="f_w_400 color_text_3 f_s_14 d-block">LARGE</a>
                                    </div>
                                    <div>
                                        <p className="text-dark mt-0">Max Capacity: 40KG</p>
                                        <p className="text-dark mt-0">Price: #40,000</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div style={{cursor: "pointer"}} className="col-md-4">
                        <div className="white_card position-relative mb_20 select-drone-unavailable-div">
                            <div className="card-body">
                                <img src={itemPic} alt="" className="d-block mx-auto my-4 select-drone-unavailable-img" height="150" />
                                <div className="row my-4">
                                    <div className="col">
                                        <span style={{ background: "red", color: "white" }} className="badge_btn_3  mb-1">Unavailable</span> 
                                        <a style={{ color: "white" }} href className="f_w_400 f_s_14 d-block">LARGE</a>
                                    </div>
                                    <div>
                                        <p className="text-dark mt-0">Max Capacity: 40KG</p>
                                        <p className="text-dark mt-0">Price: #40,000</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="select-drone col-md-4">
                        <div className="white_card position-relative mb_20 ">
                            <div className="card-body">
                                <img src={itemPic} alt="" className="d-block mx-auto my-4" height="150" />
                                <div className="row my-4">
                                    <div className="col">
                                        <span style={{ background: "green", color: "white" }} className="badge_btn_3  mb-1">Available</span> 
                                        <a href className="f_w_400 color_text_3 f_s_14 d-block">LARGE</a>
                                    </div>
                                    <div>
                                        <p className="text-dark mt-0">Max Capacity: 40KG</p>
                                        <p className="text-dark mt-0">Price: #40,000</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => props.goToElement(props.index+1)} type="button" className="btn btn-outline-success mb-3">Proceed</button>
        </>
    )
}


export default SelectDrones