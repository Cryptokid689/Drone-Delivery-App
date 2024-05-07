import React from 'react';
import "../styles/usernavbar.css"

function UserNavbar() {
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <div class="navbar">
                <div class="nav-logo">
                    <a href>Logo</a>
                </div>
                <div class="nav-items">
                    <ul>
                        <li><a href> Profile </a></li>
                        <li><a href> Drones </a></li>
                        <li><a href> Sent Deliveries </a></li>
                        <li><a href> Received Deliveries </a></li>
                        <li><a href> Friends </a></li>
                    </ul>
                </div>
                <div className='extra-buttons'>
                    <div class="nav-button">
                        <div class="anim-layer"></div>
                        <a href>Log In</a>
                    </div>
                    <div class="nav-button">
                        <div class="anim-layer"></div>
                        <a href>Register</a>
                    </div>
                </div>
                <div onClick={() => setOpen(true)} id="hamburger-menu">&#9776;</div>
            </div>

{/* // MOBILE MENU */}
            <div style={{display: open ? "flex": "none", transform: open ? "translateX(0%)": "translateX(-100%)"}} id="mobile-menu">
                <div class="mobile-nav-items">
                    <ul>
                        <li><a href> Profile </a></li>
                        <li><a href> Drones </a></li>
                        <li><a href> Sent Deliveries </a></li>
                        <li><a href> Received Deliveries </a></li>
                        <li><a href> Friends </a></li>
                    </ul>
                </div>
                <div class="mobile-nav-button">
                    <div class="anim-layer"></div>
                    <a href>Log In</a>
                </div>
                <div class="mobile-nav-button">
                    <div class="anim-layer"></div>
                    <a href>Register</a>
                </div>
                <div onClick={() => setOpen(false)} id="hamburger-cross">&#10006;</div>
            </div>
        </>
    )
}


export default UserNavbar