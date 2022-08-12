import React from 'react';
import "./topbar.css";
import { NotificationsNone } from '@material-ui/icons';
import { createRoot } from 'react-dom/client'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <a href="/home" class="logoLink">
                        <span className="logo">Red Edge</span>
                    </a>
                </div>
                <div className="topRight">
                    {/* <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
    </div> */}

                    <a href="/">
                        <img src="images/Red-Edge-Logo-Mark.jpg" alt="" className="topAvatar" />
                    </a>
                </div>
            </div>
        </div>
    )
}

if (document.getElementById('topbar')) {
    createRoot(document.getElementById('topbar')).render(<Topbar />)
}

