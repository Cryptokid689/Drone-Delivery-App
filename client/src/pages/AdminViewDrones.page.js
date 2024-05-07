import React from 'react';
import itemPic from "../assets/img/products/img-5.png"

function AdminViewDrones() {


    return (
        <div class="container-fluid p-0 ">
            <div class="row">
                <div class="col-12">
                    <div class="page_title_box d-flex align-items-center justify-content-between">
                        <div class="page_title_left">
                            <h3 class="f_s_30 f_w_700 dark_text">All Drones</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="white_card position-relative mb_20 ">
                        <div class="card-body">
                            <img src={itemPic} alt="" class="d-block mx-auto my-4" height="150" />
                            <div class="row my-4">
                                <div class="col">
                                    <span style={{ background: "green", color: "white" }} class="badge_btn_3  mb-1">Available</span> 
                                    <a href class="f_w_400 color_text_3 f_s_14 d-block">LARGE</a>
                                </div>
                                <div class="col-auto">
                                    <h4 class="text-dark mt-0">#40,000</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div style={{cursor: "pointer"}} class="col-md-4">
                    <div class="white_card position-relative mb_20 grey-div">
                        <div class="card-body">
                            <img src={itemPic} alt="" class="d-block mx-auto my-4 grey-img" height="150" />
                            <div class="row my-4">
                                <div class="col">
                                    <span style={{ background: "red", color: "white" }} class="badge_btn_3  mb-1">In Use</span> 
                                    <a style={{ color: "white" }} href class="f_w_400 f_s_14 d-block">LARGE</a>
                                </div>
                                <div class="col-auto">
                                    <h4 class="text-dark mt-0">#40,000</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-md-4">
                    <div class="white_card position-relative mb_20 ">
                        <div class="card-body">
                            <div class="ribbon1 rib1-primary"><span class="text-white text-center rib1-primary">50% off</span>
                            </div>
                            <img src="img/products/02.png" alt="" class="d-block mx-auto my-4" height="150" />
                            <div class="row my-4">
                                <div class="col"><span class="badge_btn_3  mb-1">Life Style</span> <a href
                                        class="f_w_400 color_text_3 f_s_14 d-block">Unique Blue Bag</a></div>
                                <div class="col-auto">
                                    <h4 class="text-dark mt-0">$49.00 <small
                                            class="text-muted font-14"><del>$99.00</del></small></h4>
                                    <ul class="list-inline mb-0 product-review align-self-center">
                                        <li class="list-inline-item"><i class="fas fa-star text-warning font-16"></i></li>
                                        <li class="list-inline-item"><i class="fas fa-star text-warning font-16 ms-n2"></i></li>
                                        <li class="list-inline-item"><i class="fas fa-star text-warning font-16 ms-n2"></i></li>
                                        <li class="list-inline-item"><i class="fas fa-star text-warning font-16 ms-n2"></i></li>
                                        <li class="list-inline-item"><i class="fas fa-star-half text-warning font-16 ms-n2"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="d-grid">
                                <button class="btn_2 ">Add To Cart</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default AdminViewDrones