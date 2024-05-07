import React from 'react';
import bigLogo from "../assets/img/logo_white.png"
import miniLogo from "../assets/img/mini_logo.png"
import HorizontalNav from './HorizontalNav.components';
import CloseIcon from '@mui/icons-material/Close';
import { capitalizeWords } from '../utils/utils';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InventoryIcon from '@mui/icons-material/Inventory';
import CheckIcon from '@mui/icons-material/Check';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';


const navElements = [
    { name: "home", icon: HomeIcon },
    { name: "drones", icon: ConnectingAirportsIcon },
    { name: "unprocessed deliveries", icon: VisibilityOffIcon },
    { name: "all deliveries", icon: InventoryIcon },
    { name: "completed deliveries", icon: CheckIcon },
    { name: "pending deliveries", icon: HourglassBottomIcon },
]

function NavWrapper({ children }) {
    const [open, setOpen] = React.useState(false)
    // const navigate = useNavigate()
    // const location = useLocation()

    const navElementsHTML = navElements.map(el => {
        return <li style={{ cursor: "pointer" }}>
                    {/* <a onClick={() => navigate(`admin/${el.name.split(" ").join("")}`)} href aria-expanded="false"> */}
                    <a href aria-expanded="false">
                        <div class="nav_icon_small">
                            <el.icon />
                        </div>
                        <div class="nav_title">
                            <span>{capitalizeWords(el.name)}</span>
                        </div>
                    </a>
                </li>
    })

    return (
        <>
            <nav class={`sidebar dark_sidebar ${open && "active_sidebar"}`}>
                <div class="logo d-flex justify-content-between">
                    <a class="large_logo" href="index-2.html"><img src={bigLogo} alt="pic" /></a>
                    <a class="small_logo" href="index-2.html"><img src={miniLogo} alt="pic" /></a>
                    <div onClick={() => setOpen(false)} class="sidebar_close_icon d-lg-none">
                        <CloseIcon size='50' sx={{ color: "white", cursor: "pointer" }}/>
                    </div>
                </div>
                <ul id="sidebar_menu" class="metismenu">{navElementsHTML}</ul>
            </nav>
            <section className='main_content dashboard_part large_header_bg'>
                <HorizontalNav openNav={() => setOpen(true)}/>
                <div className='main_content_iner overly_inner '>{children}</div>
            </section>
        </>
    )
}


export default NavWrapper