import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';


function HorizontalNav(props) {


    return (
        <div class="container-fluid g-0">
            <div class="row">
                <div class="col-lg-12 p-0 ">
                    <div class="header_iner d-flex justify-content-between align-items-center">
                        <div style={{cursor: "pointer"}} onClick={props.openNav} class="sidebar_icon d-lg-none">
                            <MenuIcon />
                        </div>
                        <div style={{marginLeft: "50px"}} class="header_right d-flex justify-content-between align-items-center">
                            <div class="profile_info d-flex align-items-center">
                                <div class="profile_thumb mr_20">
                                    <AccountCircleIcon sx={{ height: 40, width: 40 }}/>
                                </div>
                                <div class="author_name">
                                    <h4 class="f_s_15 f_w_500 mb-0">Jiue Anderson</h4>
                                    <p class="f_s_12 f_w_400">Manager</p>
                                </div>
                            </div>
                        </div>
                        <div class="line_icon open_miniSide d-none d-lg-block">
                            <button type="button" class="btn mb-3 btn-primary"><LogoutIcon />&nbsp;Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HorizontalNav