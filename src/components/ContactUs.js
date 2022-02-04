import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import map from "../Images/map.png"

const ContactUs = () => {
    return (
        <Box>
            <Container sx={{ py: 8 }} >
                <Grid style={{ display: "flex", justifyContent: "center", alignItems: "center" }} container spacing={4}>
                    <Grid item md={5}>
                        <Typography style={{ fontWeight: "bold" }} variant="h4" gutterBottom component="div">
                            CONTACT US
                        </Typography>
                        <Typography style={{ fontWeight: "500" }} variant="body1" gutterBottom component="div">
                            Get in touch with us easily
                        </Typography>
                        <Box sx={{ pt: 5 }} style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold", paddingRight: "6rem" }} variant="body1">
                                UK NUMBERS:
                            </Typography>
                            <Typography style={{ fontWeight: "500" }} variant="body1">
                                +0989-6787-987 <br />+0098-6754=0098
                            </Typography>
                        </Box>
                        <Box sx={{ pt: 2 }} style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold", paddingRight: "6rem" }} variant="body1">
                                UK NUMBERS:
                            </Typography>
                            <Typography style={{ fontWeight: "500" }} variant="body1">
                                +0989-6787-987 <br />+0098-6754=0098
                            </Typography>
                        </Box>
                        <Box sx={{ pt: 2 }} style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold", paddingRight: "4rem" }} variant="body1">
                                EMAILS NUMBERS:
                            </Typography>
                            <Typography style={{ fontWeight: "500" }} variant="body1">
                                support@go.com <br />info@go.com
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={7}>
                        <img style={{ width: "100%" }} src={map} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactUs;