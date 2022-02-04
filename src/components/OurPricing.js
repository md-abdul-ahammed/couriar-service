import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const OurPricing = () => {
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
                    <Grid item md={4}>
                        <Box sx={{ border: 1, py: 3 }}>
                            <Typography style={{ textAlign: "center" }} sx={{ py: 1 }} variant="h4">
                                $150
                            </Typography>
                            <Typography style={{ textAlign: "center" }} sx={{ py: 1 }} variant="body1">
                                for multiple product
                            </Typography>
                            <Typography sx={{ py: 2 }} style={{ fontWeight: "bolder", textAlign: "center" }} variant="h6">
                                STANDARD
                            </Typography>
                            <Box sx={{ pl: 8 }}>
                                <Box sx={{ py: 1 }}>
                                    <Box style={{ display: "flex", alignItems: "center" }}>
                                        <Typography style={{ fontWeight: "bold", paddingRight: "1rem" }} variant="body1">
                                            PRODUCT WEIGHT:
                                        </Typography>
                                        <Typography style={{ fontWeight: "500", display: "flex", justifyContent: "center" }} variant="body1">
                                            <KeyboardArrowLeftIcon /> 3kg
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box style={{ display: "flex", alignItems: "center" }} sx={{ py: 1 }}>
                                    <Typography style={{ fontWeight: "bold", paddingRight: "2rem" }} variant="body1">
                                        COUNTRY:
                                    </Typography>
                                    <Typography style={{ fontWeight: "500" }} variant="body1">
                                        ALL
                                    </Typography>
                                </Box>
                                <Box style={{ display: "flex", alignItems: "center" }} sx={{ py: 1 }}>
                                    <Typography style={{ fontWeight: "bold", paddingRight: "2rem" }} variant="body1">
                                        DURATION:
                                    </Typography>
                                    <Typography style={{ fontWeight: "500" }} variant="body1">
                                        7-14 DAYS
                                    </Typography>
                                </Box>
                                <Box style={{ display: "flex", alignItems: "center" }} sx={{ py: 1 }}>
                                    <Typography style={{ fontWeight: "bold", paddingRight: "2rem" }} variant="body1">
                                        SUPPORT:
                                    </Typography>
                                    <Typography style={{ fontWeight: "500" }} variant="body1">
                                        YES
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ py: 2 }} style={{ textAlign: "center" }}>
                                <Button sx={{ px: 4 }} variant="text" endIcon={<DoubleArrowIcon />}>
                                    Order Now
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box sx={{ border: 1, py: 3 }}>
                            <Typography style={{ textAlign: "center" }} sx={{ py: 1 }} variant="h4">
                                $150
                            </Typography>
                            <Typography style={{ textAlign: "center" }} sx={{ py: 1 }} variant="body1">
                                for multiple product
                            </Typography>
                            <Typography sx={{ py: 2 }} style={{ fontWeight: "bolder", textAlign: "center" }} variant="h6">
                                STANDARD
                            </Typography>
                            <Box sx={{ pl: 8 }}>
                                <Box sx={{ py: 1 }}>
                                    <Box style={{ display: "flex", alignItems: "center" }}>
                                        <Typography style={{ fontWeight: "bold", paddingRight: "1rem" }} variant="body1">
                                            PRODUCT WEIGHT:
                                        </Typography>
                                        <Typography style={{ fontWeight: "500", display: "flex", justifyContent: "center" }} variant="body1">
                                            <KeyboardArrowLeftIcon /> 3kg
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box style={{ display: "flex", alignItems: "center" }} sx={{ py: 1 }}>
                                    <Typography style={{ fontWeight: "bold", paddingRight: "2rem" }} variant="body1">
                                        COUNTRY:
                                    </Typography>
                                    <Typography style={{ fontWeight: "500" }} variant="body1">
                                        ALL
                                    </Typography>
                                </Box>
                                <Box style={{ display: "flex", alignItems: "center" }} sx={{ py: 1 }}>
                                    <Typography style={{ fontWeight: "bold", paddingRight: "2rem" }} variant="body1">
                                        DURATION:
                                    </Typography>
                                    <Typography style={{ fontWeight: "500" }} variant="body1">
                                        7-14 DAYS
                                    </Typography>
                                </Box>
                                <Box style={{ display: "flex", alignItems: "center" }} sx={{ py: 1 }}>
                                    <Typography style={{ fontWeight: "bold", paddingRight: "2rem" }} variant="body1">
                                        SUPPORT:
                                    </Typography>
                                    <Typography style={{ fontWeight: "500" }} variant="body1">
                                        YES
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ py: 2 }} style={{ textAlign: "center" }}>
                                <Button sx={{ px: 4 }} variant="text" endIcon={<DoubleArrowIcon />}>
                                    Order Now
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box sx={{ border: 1, py: 3 }}>
                            <Typography style={{ textAlign: "center" }} sx={{ py: 1 }} variant="h4">
                                $150
                            </Typography>
                            <Typography style={{ textAlign: "center" }} sx={{ py: 1 }} variant="body1">
                                for multiple product
                            </Typography>
                            <Typography sx={{ py: 2 }} style={{ fontWeight: "bolder", textAlign: "center" }} variant="h6">
                                STANDARD
                            </Typography>
                            <Box sx={{ pl: 8 }}>
                                <Box sx={{ py: 1 }}>
                                    <Box style={{ display: "flex", alignItems: "center" }}>
                                        <Typography style={{ fontWeight: "bold", paddingRight: "1rem" }} variant="body1">
                                            PRODUCT WEIGHT:
                                        </Typography>
                                        <Typography style={{ fontWeight: "500", display: "flex", justifyContent: "center" }} variant="body1">
                                            <KeyboardArrowLeftIcon /> 3kg
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box style={{ display: "flex", alignItems: "center" }} sx={{ py: 1 }}>
                                    <Typography style={{ fontWeight: "bold", paddingRight: "2rem" }} variant="body1">
                                        COUNTRY:
                                    </Typography>
                                    <Typography style={{ fontWeight: "500" }} variant="body1">
                                        ALL
                                    </Typography>
                                </Box>
                                <Box style={{ display: "flex", alignItems: "center" }} sx={{ py: 1 }}>
                                    <Typography style={{ fontWeight: "bold", paddingRight: "2rem" }} variant="body1">
                                        DURATION:
                                    </Typography>
                                    <Typography style={{ fontWeight: "500" }} variant="body1">
                                        7-14 DAYS
                                    </Typography>
                                </Box>
                                <Box style={{ display: "flex", alignItems: "center" }} sx={{ py: 1 }}>
                                    <Typography style={{ fontWeight: "bold", paddingRight: "2rem" }} variant="body1">
                                        SUPPORT:
                                    </Typography>
                                    <Typography style={{ fontWeight: "500" }} variant="body1">
                                        YES
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ py: 2 }} style={{ textAlign: "center" }}>
                                <Button sx={{ px: 4 }} variant="text" endIcon={<DoubleArrowIcon />}>
                                    Order Now
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default OurPricing;