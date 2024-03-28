import "./orders.scss";
import { useState } from "react";

import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { orders } from "../../data";
import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'No.', width: 90 },
    {
      field: "img",
      headerName: "Item",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/1.jpg"} alt="1.jpg" />;
      },
    },
    {
        field: 'customerName',
        headerName: 'Customer Name',
        width: 150,
        editable: true,
    },
    {
      field: 'customerNumber',
      headerName: 'Customer No.',
      width: 150,
      editable: true, 
    },
    {
      field: 'customerAddress',
      headerName: 'Customer Address',
      width: 150,
      editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 110,
        editable: true,
    },
    {
        field: 'date',
        headerName: 'Date',
        type: 'string',
        width: 150,
        editable: true,
    },
    {
      field: 'time',
      headerName: 'Time',
      type: 'string',
      width: 150,
      editable: true,
    },
];

const Orders = () => {
  const [open, setOpen] = useState(false);
    return (
      <div className='orders'>
        <div className="info">
          <h1>Orders</h1>
          <button onClick={() => setOpen(true)}>Add New Items</button>
        </div>
          <DataTable slug="orders" columns={columns} rows={orders}/>
          {open && <Add slug="items" columns={columns} setOpen={setOpen} />}
      </div>
    )
}
export default Orders;
