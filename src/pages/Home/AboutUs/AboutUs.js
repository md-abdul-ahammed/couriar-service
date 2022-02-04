import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import carImg from "../../../Images/car.png";
import rocket from "../../../Images/rocket.png"
import shield from "../../../Images/sheild.png"
import shipping from "../../../Images/shipping.png"

const AboutUs = () => {
    return (
        <Container>
            <Grid container style={{ justifyContent: "space-between", alignItems: "center" }} sx={{ py: 16 }} spacing={2}>
                <Grid md={5}>
                    <Typography style={{ fontWeight: "bold" }} variant="h4" gutterBottom component="div">
                        ABOUT US
                    </Typography>
                    <Typography style={{ fontWeight: "500" }} variant="body2" gutterBottom component="div">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                    </Typography>
                    <Box style={{ display: "flex", alignItems: "center", paddingTop: "2rem" }}>
                        <Box>
                            <img style={{ marginRight: "2rem", width: "60%", marginTop: "10px" }} src={rocket} alt="" />
                        </Box>
                        <Box>
                            <Typography variant="h6">
                                FAST DELIVERY
                            </Typography>
                            <Typography variant="body2">
                                unde omnis iste natus error
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ py: 4 }} style={{ display: "flex", alignItems: "center" }}>
                        <Box>
                            <img style={{ marginRight: "2rem", width: "60%", marginTop: "10px" }} src={shield} alt="" />
                        </Box>
                        <Box>
                            <Typography variant="h6">
                                SECURED SERVICE
                            </Typography>
                            <Typography variant="body2">
                                unde omnis iste natus error sit voluptatem
                            </Typography>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", alignItems: "center" }}>
                        <Box>
                            <img style={{ marginRight: "2rem", width: "60%", marginTop: "10px" }} src={shipping} alt="" />
                        </Box>
                        <Box>
                            <Typography variant="h6">
                                WORLD WIDE SHIPPING
                            </Typography>
                            <Typography variant="body2">
                                unde omnis iste natus error sit
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid md={7}>
                    <img style={{ paddingLeft: "5rem" }} sx={{ w: 1 }} src={carImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUs;