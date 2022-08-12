import React from 'react';
import "./newUser.css";
import { createRoot } from 'react-dom/client'

export default function NewUser() {
  return (
    <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form method="POST" action="/newUser" className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" id="username" placeholder="john"/>
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" id="fullName" placeholder="john Smith"/>
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="text" id="email" placeholder="johnsmith@gmail.com"/>
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="password" id="password" placeholder="password"/>
            </div>
            <div className="newUserItem">
                <label>Phone</label>
                <input type="text" id="phone" placeholder="+1 123 456 56"/>
            </div>
            <button type="submit" id="newUserButton" className="newUserButton">Create</button>
        </form>
    </div>
  )
}

if(document.getElementById('newUser')) {
    createRoot(document.getElementById('newUser')).render(<NewUser />)
  }