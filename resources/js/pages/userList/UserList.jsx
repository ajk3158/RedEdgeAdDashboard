import React, { useState } from 'react';
import "./userList.css";
import { DataGrid } from '@material-ui/data-grid';
import {userRows} from "../../directData";
import { createRoot } from 'react-dom/client'

export default function UserList() {

    const [data, setData] = useState(userRows);

    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id !== id));
    }

    const columns =[
        { field: 'id', headerName: 'ID', width: 300 },
        { field: 'user', headerName: 'User', width: 500, renderCell: (params)=>{
            return (
                <div className="userListUser">
                    <img className="userListImg" src="{params.row.avatar}" alt=""/>
                    {params.row.username}
                </div>
            )
        }
    },
        { field: 'email', headerName: 'Email', width: 330 },
        {
            field:"action",
            headerName:"Action",
            width:350,
            renderCell: (params)=>{
                return(
                    <>
                    <a href="/users/{user}">
                    <button className="userListEdit">Edit</button>
                    </a>
                    <button className="userListDelete" onClick={()=>handleDelete(params.row.id)}>Delete</button>
                    </>
                )
                
            }
        }
      ];
      
    
  return (
    <>
         <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        disableSelectionOnClick
        checkboxSelection
      />

    </>
  )
}

if(document.getElementById('users')) {
    createRoot(document.getElementById('users')).render(<UserList />)
  }
  