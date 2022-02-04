import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import deliveryMan from "../Images/deliveryMan.png"

const ProductDelivery = () => {
    return (
        <Container>
            <Grid container style={{ justifyContent: "space-between", alignItems: "center" }} sx={{ py: 16 }} spacing={2}>
                <Grid md={6}>
                    <Typography style={{ fontWeight: "bold" }} variant="h4" gutterBottom component="div">
                        GET THE FASTEST PRODUCT DELEVERY
                    </Typography>
                    <Typography style={{ fontWeight: "500" }} variant="body2" gutterBottom component="div">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </Typography>
                </Grid>
                <Grid md={6}>
                    <img style={{ width: "100%" }} src={deliveryMan} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductDelivery;