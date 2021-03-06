import React, { useMemo, useState } from 'react';
import man from "../Images/man.png";
import { Container, Grid, Typography, Box, TextField, Button, MenuItem } from '@mui/material';
import countryList from 'react-select-country-list'
import { useForm } from "react-hook-form";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const Calculate = () => {
    const options = useMemo(() => countryList().getData(), []);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [totalCost, setTotalCost] = useState(null);

    const onSubmit = data => {
        let widthPrice = 20;
        let heightPrice = 15;
        let depthPrice = 12;
        let weightPrice = 30;
        if (parseInt(data.width) > 100) {
            const perFiveCmWidthPrice = 2;
            const width = parseInt(data.width);
            const additionalWidth = width - 100;
            if (additionalWidth % 5 === 0) {
                const find = additionalWidth / 5;
                widthPrice = (widthPrice + (find * perFiveCmWidthPrice))
            } else {
                const find = Math.floor(additionalWidth / 5);
                widthPrice = (widthPrice + (find * perFiveCmWidthPrice))
            }
        }
        if (parseInt(data.height) > 100) {
            const perFiveCmHeightPrice = 3;
            const height = parseInt(data.height);
            const additionalHeight = height - 100;
            if (additionalHeight % 5 === 0) {
                const find = additionalHeight / 5;
                heightPrice = (heightPrice + (find * perFiveCmHeightPrice))
            } else {
                const find = Math.floor(additionalHeight / 5);
                heightPrice = (heightPrice + (find * perFiveCmHeightPrice))
            }
        }
        if (parseInt(data.depth) > 100) {
            const perFiveCmDepthPrice = 1;
            const depth = parseInt(data.depth);
            const additionalDepth = depth - 100;
            if (additionalDepth % 5 === 0) {
                let find = additionalDepth / 5;
                depthPrice = (depthPrice + (find * perFiveCmDepthPrice))
            } else {
                let find = Math.floor(additionalDepth / 5);
                depthPrice = (depthPrice + (find * perFiveCmDepthPrice))
            }
        }
        if (parseInt(data.weight) > 50) {
            const perFiveGmWeightPrice = 3;
            const weight = parseInt(data.weight);
            const additionalWeight = weight - 100;
            if (additionalWeight % 5 === 0) {
                const find = additionalWeight / 5;
                weightPrice = (weightPrice + (find * perFiveGmWeightPrice))
            } else {
                const find = Math.floor(additionalWeight / 5);
                weightPrice = (weightPrice + (find * perFiveGmWeightPrice))
            }
        }
        const total = widthPrice + heightPrice + depthPrice + weightPrice + 100;
        setTotalCost(total)
    };


    return (
        <Container>
            <Grid container style={{ justifyContent: "space-between", alignItems: "center" }} sx={{ pt: 4 }} spacing={2}>
                <Grid item md={6}>
                    <img style={{ marginBottom: "-1%" }} sx={{ w: 1 }} src={man} alt="" />
                </Grid>
                <Grid item md={6}>
                    <Typography style={{ fontWeight: "bold" }} variant="h4" gutterBottom component="div">
                        CALCULATE YOUR COST
                    </Typography>
                    <Typography style={{ fontWeight: "500" }} variant="body2" gutterBottom component="div">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </Typography>
                    <Box sx={{ pt: 5 }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box sx={{ py: 1 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography style={{ fontWeight: "bold", fontSize: "1rem" }} variant="h6" component="span">
                                    HEIGHT (CM): <abbr title="1-100 cm= $15 ;; height(cm) >100 = every 5cm price will increase respectively $3 "><ContactSupportIcon style={{ fontSize: "1rem", color: "red" }} /></abbr>
                                </Typography>
                                <TextField size='small' type="number" {...register("height", { required: true })} style={{ width: "70%" }} id="outlined-basic" variant="outlined" />
                            </Box>
                            {errors.height && <p style={{ marginTop: "-10px", marginBottom: 0, color: "red" }}>This field is required</p>}
                            <Box sx={{ py: 1 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography style={{ fontWeight: "bold", fontSize: "1rem" }} variant="h6" component="span">
                                    WIDTH (CM): <abbr title="1-100 cm = $20 ;; width(cm) >100 = every 5cm price will increase respectively $2 "><ContactSupportIcon style={{ fontSize: "1rem", color: "red" }} /></abbr>
                                </Typography>
                                <TextField size='small' type="number" style={{ width: "70%" }} {...register("width", { required: true })} id="outlined-basic" variant="outlined" />
                            </Box>
                            {errors.width && <p style={{ marginTop: "-10px", marginBottom: 0, color: "red" }}>This field is required</p>}
                            <Box sx={{ py: 1 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography style={{ fontWeight: "bold", fontSize: "1rem" }} variant="h6" component="span">
                                    DEPTH (CM): <abbr title="1-100 cm = $12 ;; depth(cm) >100 = every 5cm price will increase respectively $1 "><ContactSupportIcon style={{ fontSize: "1rem", color: "red" }} /></abbr>
                                </Typography>
                                <TextField size='small' type="number" {...register("depth", { required: true })} style={{ width: "70%" }} id="outlined-basic" variant="outlined" />
                            </Box>
                            {errors.depth && <p style={{ marginTop: "-10px", marginBottom: 0, color: "red" }}>This field is required</p>}
                            <Box sx={{ py: 1 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography style={{ fontWeight: "bold", fontSize: "1rem" }} variant="h6" component="span">
                                    WEIGHT (KG): <abbr title="1-50 kg = $30 ;; weight(kg) >50 = every 5cm price will increase respectively $3 "><ContactSupportIcon style={{ fontSize: "1rem", color: "red" }} /></abbr>
                                </Typography>
                                <TextField size='small' {...register("weight", { required: true })} type="number" style={{ width: "70%" }} id="outlined-basic" variant="outlined" />
                            </Box>
                            {errors.weight && <p style={{ marginTop: "-10px", marginBottom: 0, color: "red" }}>This field is required</p>}
                            <Box sx={{ py: 1 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography style={{ fontWeight: "bold", fontSize: "1rem" }} variant="h6" component="span">
                                    LOCATION: <abbr title="every country cost $100"><ContactSupportIcon style={{ fontSize: "1rem", color: "red" }} /></abbr>
                                </Typography>
                                <TextField size='small'
                                    style={{ width: "70%" }}
                                    id="outlined-select-currency"
                                    select
                                    label="Select Country"
                                    {...register("location", { required: true })}
                                >
                                    {
                                        options.map(option => (
                                            <MenuItem style={{ fontSize: "14px" }} key={option.value} value={option.label}>
                                                {option.label}
                                            </MenuItem>
                                        ))
                                    }
                                </TextField>
                            </Box>
                            {errors.location && <p style={{ marginTop: "-10px", marginBottom: 0, color: "red" }}>This field is required</p>}
                            <Box sx={{ py: 1 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography style={{ fontWeight: "bold", fontSize: "1rem" }} variant="h6" component="span">

                                </Typography>
                                <Button type="submit" style={{ width: "70%" }} variant="contained">Calculate Your Cost</Button>
                            </Box>
                            {totalCost && <Box sx={{ py: 1 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography style={{ fontWeight: "bold", fontSize: "1rem" }} variant="h6" component="span">

                                </Typography>
                                <Button type="submit" style={{ width: "70%" }} variant="contained"><span style={{ color: "yellow", fontSize: "20px" }}>Order Now</span> <span style={{ fontSize: "20px", fontWeight: "bolder", paddingLeft: "0.8rem" }}> ${totalCost}</span></Button>
                            </Box>}
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Calculate;