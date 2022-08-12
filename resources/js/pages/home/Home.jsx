import React, { useState } from 'react';
import "./home.css";
import { DataGrid } from '@material-ui/data-grid';
import { campaigns } from "../../directData";
import { createRoot } from 'react-dom/client'

export default function Home() {

  const [data, setData] = useState(campaigns);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Campaign Name', width: 550 },
    {
      field: 'client',
      headerName: 'Client Name',
      width: 330,
    },
    {
      field: 'date_begun',
      headerName: 'Date Begun',
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <a href="/campaign" /*+ params.row.id*/>
              <button className="homeListView">View</button>
            </a>
            <button className="homeListDelete" onClick={() => handleDelete(params.row.id)}>Delete</button>
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

if (document.getElementById('home')) {
  createRoot(document.getElementById('home')).render(<Home />)
}
