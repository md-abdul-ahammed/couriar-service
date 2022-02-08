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
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Link } from 'react-router-dom';

const ManageAllServices = () => {

    const [services, serServices] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null)
    const { user } = useAuth();
    const email = user.email;



    useEffect(() => {
        fetch(`https://mysterious-badlands-52613.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => serServices(data))
    }, [isDeleted, email])

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you Sure For Delete?")
        if (confirm) {
            fetch(`http://localhost:8000/deleteService/${id}`, {
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
                        <TableCell >Service Type</TableCell>
                        <TableCell align="right">Product Type</TableCell>
                        <TableCell align="right">Service Price</TableCell>
                        <TableCell align="right">Max Product Weight</TableCell>
                        <TableCell align="right">Min Duration</TableCell>
                        <TableCell align="right">Max Duration</TableCell>
                        <TableCell >
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                Country
                            </div>
                        </TableCell>
                        <TableCell align="right">Support</TableCell>
                        <TableCell >
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                Action
                            </div>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {services.map((service, index) => (
                        <TableRow
                            key={service._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <span style={{ fontWeight: "bold", fontSize: "1rem", paddingRight: "0.5rem" }}>{index + 1}.</span>  {service.service_type}
                            </TableCell>
                            <TableCell align="right">{service.product_type}</TableCell>
                            <TableCell >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    {service.service_price}
                                </div>
                            </TableCell>
                            <TableCell >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    {service.max_product_weight}
                                </div>
                            </TableCell>
                            <TableCell >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    {service.min_duration}
                                </div>
                            </TableCell>
                            <TableCell >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    {service.max_duration}
                                </div>
                            </TableCell>
                            <TableCell >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    {service.country}
                                </div>
                            </TableCell>
                            <TableCell >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    {service.support}
                                </div>
                            </TableCell>
                            <TableCell align="right">
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Link style={{ color: "green", textDecoration: "none", paddingTop: "6px" }} to={`/update/${service._id}`}>
                                        <ModeEditOutlineOutlinedIcon />
                                    </Link>
                                    <Button onClick={() => handleDelete(service._id)} sx={{ color: "red" }} variant="text">
                                        <DeleteForeverIcon />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageAllServices;