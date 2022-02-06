import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null)
    const { user } = useAuth();
    const email = user.email;



    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted, email])

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you Sure For Delete?")
        if (confirm) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        setIsDeleted(true)
                    } else {
                        setIsDeleted(false)
                    }
                })
        }

    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>User Name and Email</TableCell>
                        <TableCell align="right">Service Price</TableCell>
                        <TableCell align="right">Service Type</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Remove Order</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow
                            key={orders._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {order.customer_name} ({order.user_email})
                            </TableCell>
                            <TableCell align="right">{order.service_price}</TableCell>
                            <TableCell align="right">{order.service_type}</TableCell>
                            <TableCell align="right">{order.address}</TableCell>
                            <TableCell align="right">
                                <Button onClick={() => handleDelete(order._id)} sx={{ px: 4, color: "red" }} variant="text">
                                    <DeleteForeverIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MyOrder;