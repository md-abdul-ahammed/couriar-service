import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import logo from "../Images/footer_lolo.png";
import footerBackground from "../Images/wocmcre.org.jpg";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import paymentGateway from "../Images/payment_gateway.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
    return (
        <>
            <Box style={{ backgroundImage: `url(${footerBackground})`, backgroundSize: "cover" }}>
                <Container sx={{ py: 8 }} >
                    <Grid style={{ display: "flex", justifyContent: "center", alignItems: "center" }} container spacing={2}>
                        <Grid item md={3}>
                            <img style={{ width: "100%" }} src={logo} alt="" />
                        </Grid>
                        <Grid item md={9}>
                            <Grid container style={{ color: "#fff" }} spacing={2}>
                                <Grid item md={4}>
                                    <Typography style={{ fontWeight: "bold" }} gutterBottom variant='h6'>
                                        QUICK LINKS
                                    </Typography>
                                    <Typography sx={{ pt: 3 }} style={{ fontWeight: "lighter", fontSize: "0.9rem", cursor: "pointer" }} gutterBottom variant='h6'>
                                        SITE MAP <br /> PRICING <br /> PAYMENT METHOD <br /> SUPPORT
                                    </Typography>
                                </Grid>
                                <Grid item md={4}>
                                    <Typography style={{ fontWeight: "bold" }} gutterBottom variant='h6'>
                                        IMPORTANT LINKS
                                    </Typography>
                                    <Typography sx={{ pt: 3 }} style={{ fontWeight: "lighter", fontSize: "0.9rem", cursor: "pointer" }} gutterBottom variant='h6'>
                                        SITE MAP <br /> PRICING <br /> PAYMENT METHOD <br /> SUPPORT
                                    </Typography>
                                </Grid>
                                <Grid item md={4}>
                                    <Typography style={{ fontWeight: "bold" }} gutterBottom variant='h6'>
                                        QUICK LINKS
                                    </Typography>
                                    <Typography sx={{ pt: 3 }} style={{ fontWeight: "lighter", fontSize: "0.9rem", cursor: "pointer" }} gutterBottom variant='h6'>
                                        <FacebookRoundedIcon style={{ border: "2px solid #fff", marginRight: "0.4rem", height: "35px", width: "35px", padding: "5px", borderRadius: "50%" }} />
                                        <TwitterIcon style={{ border: "2px solid #fff", marginRight: "0.4rem", height: "35px", width: "35px", padding: "5px", borderRadius: "50%" }} />
                                        <GoogleIcon style={{ border: "2px solid #fff", marginRight: "0.4rem", height: "35px", width: "35px", padding: "5px", borderRadius: "50%" }} />
                                        <LinkedInIcon style={{ border: "2px solid #fff", marginRight: "0.4rem", height: "35px", width: "35px", padding: "5px", borderRadius: "50%" }} />
                                    </Typography>
                                    <Box>
                                        <img src={paymentGateway} alt="" />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box style={{ backgroundColor: "#121212", color: "#fff" }}>
                <Container style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography sx={{ py: 3 }} style={{ fontWeight: "lighter" }} variant="body1">
                        © Copyright 2021, All rights reserved.
                    </Typography>
                    <Typography sx={{ py: 3 }} style={{ fontWeight: "lighter", display: "flex", alignItems: "center" }} variant="body1">
                        Design and <FavoriteIcon sx={{ mx: 1 }} /> by MD ABDUL AHAMMED
                    </Typography>
                </Container>
            </Box>
        </>
    );
};

export default Footer;