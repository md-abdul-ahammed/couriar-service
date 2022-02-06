import { Typography, TextField, Select, MenuItem, Button, TextareaAutosize } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import town from "../../Images/lol.jpg";
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Order = () => {
    const [service, setService] = useState({})
    const { serviceId } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId]);

    const { service_type, service_price, product_type } = service;

    const onSubmit = data => {

        data.service_type = service_type;
        data.service_price = service_price;
        data.product_type = product_type;
        data.user_email = user.email

        fetch('http://localhost:5000/order', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

        console.log(data);

        alert("SuccessFully Ordered")
        reset()
    }


    return (
        <div>
            <Box style={{ backgroundImage: `url(${town})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <Typography style={{ textAlign: "center", fontWeight: "bolder", color: "#fff" }} sx={{ py: 8 }} variant="h3">
                    Add Order
                </Typography>
            </Box>
            <Box>
                <Box sx={{ mx: "auto", my: 12, p: 8 }} style={{ width: "60%", boxShadow: "0px 0px 5px gray", borderRadius: "10px" }}>
                    <Typography style={{ textAlign: "center", fontWeight: "bolder" }} sx={{ pt: 3, pb: 5 }} variant="h4">
                        Add Your Order Information
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Box sx={{ display: "flex", justifyContent: "space-around", my: 2 }}>
                            <TextField style={{ width: "30%" }} size="small" id="outlined-basic" disabled label={service_type} variant="outlined" />
                            <TextField style={{ width: "30%" }} size="small" id="outlined-basic" disabled type="number" label={`$ ${service_price}`} variant="outlined" />
                            <TextField style={{ width: "30%" }} size="small" id="outlined-basic" disabled label={product_type} variant="outlined" />
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "space-around", my: 3 }}>
                            <TextField {...register("customer_name", { required: true })} style={{ width: "30%" }} size="small" id="outlined-basic" label="Enter Your Name" variant="outlined" />
                            <TextField {...register("customer_email", { required: true })} style={{ width: "30%" }} size="small" id="outlined-basic" label="Enter Your Email" variant="outlined" />
                            <TextField {...register("customer_number", { required: true })} style={{ width: "30%" }} size="small" type="number" id="outlined-basic" label="Enter Your Phone" variant="outlined" />
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "space-around", my: 3 }}>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={8}
                                placeholder="Enter Your Address"
                                style={{ width: "80%", fontSize: "1rem", padding: "12px", borderRadius: "5px", borderColor: "silver", backgroundColor: "#fafafa", fontFamily: "Roboto" }}
                                {...register("address", { required: true })}
                            />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-around", py: 2 }}>
                            <Button type="submit" style={{ width: '40%' }} variant="contained">Submit</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </div>
    );
};

export default Order;