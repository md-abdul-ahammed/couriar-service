import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Link } from 'react-router-dom';

const OurPricing = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://mysterious-badlands-52613.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <Box>
            <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Typography variant="h4">
                    PRICING & PLAN
                </Typography>
                <Typography variant="body1">
                    see our pricing & plan to get best services
                </Typography>
            </Box>
            <Container sx={{ py: 8 }} >
                <Grid container spacing={4}>
                    {services.map(service =>
                        <Grid key={service._id} item md={4}>
                            <Box sx={{ border: 1, py: 3 }}>
                                <Typography style={{ textAlign: "center" }} sx={{ py: 1 }} variant="h4">
                                    $ {service.service_price}
                                </Typography>
                                <Typography style={{ textAlign: "center" }} sx={{ py: 1 }} variant="body1">
                                    {service.product_type}
                                </Typography>
                                <Typography sx={{ py: 2 }} style={{ fontWeight: "bolder", textTransform: "uppercase", textAlign: "center" }} variant="h6">
                                    {service.service_type}
                                </Typography>
                                <Box sx={{ pl: 8 }}>
                                    <Box sx={{ py: 1 }}>
                                        <Box style={{ display: "flex", alignItems: "center" }}>
                                            <Typography style={{ fontWeight: "bold", paddingRight: "1rem" }} variant="body1">
                                                PRODUCT WEIGHT:
                                            </Typography>
                                            <Typography style={{ fontWeight: "500", display: "flex", justifyContent: "center" }} variant="body1">
                                                <KeyboardArrowLeftIcon /> {service.max_product_weight}kg
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box style={{ display: "flex", alignItems: "center" }} sx={{ py: 1 }}>
                                        <Typography style={{ fontWeight: "bold", paddingRight: "2rem" }} variant="body1">
                                            COUNTRY:
                                        </Typography>
                                        <Typography style={{ fontWeight: "500" }} variant="body1">
                                            {service.country}
                                        </Typography>
                                    </Box>
                                    <Box style={{ display: "flex", alignItems: "center" }} sx={{ py: 1 }}>
                                        <Typography style={{ fontWeight: "bold", paddingRight: "2rem" }} variant="body1">
                                            DURATION:
                                        </Typography>
                                        <Typography style={{ fontWeight: "500" }} variant="body1">
                                            {service.min_duration}-{service.max_duration} DAYS
                                        </Typography>
                                    </Box>
                                    <Box style={{ display: "flex", alignItems: "center" }} sx={{ py: 1 }}>
                                        <Typography style={{ fontWeight: "bold", paddingRight: "2rem" }} variant="body1">
                                            SUPPORT:
                                        </Typography>
                                        <Typography style={{ fontWeight: "500", textTransform: "uppercase" }} variant="body1">
                                            {service.support}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ py: 2 }} style={{ textAlign: "center" }}>
                                    <Button sx={{ px: 4 }} variant="text" endIcon={<DoubleArrowIcon />}>
                                        <Link to={`/order/${service._id}`} style={{ textDecoration: "none" }}>
                                            Order Now
                                        </Link>
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    )


                    }

                </Grid>
            </Container>
        </Box>
    );
};

export default OurPricing;