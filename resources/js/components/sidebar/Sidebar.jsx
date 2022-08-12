import React from 'react';
import "./sidebar.css";
import { Person, Timeline, CheckCircle, PersonAdd} from "@material-ui/icons";
import { createRoot } from 'react-dom/client'
import { getSheet } from "../../directData";

export default function Sidebar() {

   /* const menuLink = location.pathname;
    console.log(menuLink);

    console.log("#homeLink");
    if(menuLink === "/"){
        document.querySelector("#homeLink").style.color = "darkred";
    }else if(menuLink === "/users"){
        document.getElementById("usersLink").style.color = "darkred";
    }else if(menuLink === "/newUser"){
        document.getElementById("addUserLink").style.color = "darkred";
    }else{
        document.getElementById("campaignLink").style.color = "darkred";
    } */


  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    
                    <a id="homeLink" href="/home" className="link">
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Home
                    </li>
                    </a>

                    <a id="usersLink" href="/users" className="link">
                    <li className="sidebarListItem">
                        <Person className="sidebarIcon"/>
                        Users
                    </li>
                    </a>

                    <a id="addUserLink" href="/newUser" className="link">
                    <li className="sidebarListItem">
                        <PersonAdd className="sidebarIcon"/>
                        Add User
                    </li>
                    </a>
                   
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Campaigns</h3>
                <ul className="sidebarList">
                    
                    <a id="campaignLink" href="/campaign" className="link">
                    <li className="sidebarListItem">
                        <CheckCircle className="sidebarIcon"/>
                        {getSheet(0, 0)} Dashboard
                    </li>
                    </a>
                   
                </ul>
            </div>

        </div>
    </div>
  )
}

if(document.getElementById('Sidebar')) {
    createRoot(document.getElementById('Sidebar')).render(<Sidebar />)
}
