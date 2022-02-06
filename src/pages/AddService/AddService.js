import { Typography, TextField, Select, MenuItem, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useMemo } from 'react';
import town from "../../Images/lol.jpg";
import countryList from 'react-select-country-list'
import { useForm } from "react-hook-form";

const AddService = () => {
    const options = useMemo(() => countryList().getData(), []);

    const { register, reset, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch("http://localhost:5000/services", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        reset();

    };

    return (
        <>
            <Box style={{ backgroundImage: `url(${town})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <Typography style={{ textAlign: "center", fontWeight: "bolder", color: "#fff" }} sx={{ py: 8 }} variant="h3">
                    Add A New Service
                </Typography>
            </Box>
            <Box>
                <Box sx={{ mx: "auto", my: 12, p: 8 }} style={{ width: "60%", boxShadow: "0px 0px 5px gray", borderRadius: "10px" }}>
                    <Typography style={{ textAlign: "center", fontWeight: "bolder" }} sx={{ pt: 3, pb: 5 }} variant="h4">
                        Add A New Service
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{ display: "flex", justifyContent: "space-around", my: 1 }}>
                            <TextField
                                style={{ width: "40%" }}
                                id="outlined-select-currency"
                                select
                                label="Select Your Service Type"
                                size="small"
                                {...register("service_type")}
                            >
                                <MenuItem value="Standard Courier">
                                    Standard Courier
                                </MenuItem>
                                <MenuItem value="Door to Door">
                                    Door to Door
                                </MenuItem>
                                <MenuItem value="Express Courier">
                                    Express Courier
                                </MenuItem>
                                <MenuItem value="Ware House">
                                    Ware House
                                </MenuItem>
                                <MenuItem value="Pallet">
                                    Pallet
                                </MenuItem>
                                <MenuItem value="International Courier">
                                    International Courier
                                </MenuItem>
                            </TextField>
                            <TextField
                                style={{ width: "40%" }}
                                select
                                label="Select Your Product Type"
                                size="small"
                                {...register("product_type")}
                            >
                                <MenuItem value="for multiple product">
                                    for multiple product
                                </MenuItem>
                                <MenuItem value="for package product">
                                    for package product
                                </MenuItem>
                                <MenuItem value="for single product">
                                    for single product
                                </MenuItem>
                            </TextField>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-around", my: 2 }}>
                            <TextField {...register("service_price")} style={{ width: "40%" }} size="small" id="outlined-basic" type="number" label="Service Price" variant="outlined" />
                            <TextField {...register("max_product_weight")} style={{ width: "40%" }} size="small" id="outlined-basic" type="number" label="Max Product Weight (kg)" variant="outlined" />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-around", my: 2 }}>
                            <TextField {...register("min_duration")} style={{ width: "40%" }} size="small" id="outlined-basic" type="number" label="Min Duration" variant="outlined" />
                            <TextField {...register("max_duration")} style={{ width: "40%" }} size="small" id="outlined-basic" type="number" label="Max Duration" variant="outlined" />
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "space-around", my: 1 }}>
                            <TextField
                                style={{ width: "40%" }}
                                id="outlined-select-currency"
                                select
                                label="Select Country"
                                size="small"
                                {...register("country")}
                            >
                                <MenuItem style={{ fontWeight: "bolder" }} value="ALL">
                                    ALL
                                </MenuItem>
                                {
                                    options.map(option => (
                                        <MenuItem key={option.value} value={option.label}>
                                            {option.label}
                                        </MenuItem>
                                    ))
                                }
                            </TextField>
                            <TextField
                                style={{ width: "40%" }}
                                select
                                label="Support"
                                size="small"
                                {...register("support")}
                            >
                                <MenuItem value="Yes">
                                    Yes
                                </MenuItem>
                                <MenuItem value="No">
                                    No
                                </MenuItem>
                            </TextField>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-around", py: 3 }}>
                            <Button type="submit" style={{ width: '40%' }} variant="contained">Submit</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </ >
    );
};

export default AddService;