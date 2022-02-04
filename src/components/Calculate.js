import React from 'react';
import man from "../Images/man.png";
import { Container, Grid, Typography, Box, TextField, Button } from '@mui/material';

const Calculate = () => {
    return (
        <Container>
            <Grid container style={{ justifyContent: "space-between", alignItems: "center" }} sx={{ pt: 4 }} spacing={2}>
                <Grid md={6}>
                    <img style={{ marginBottom: "-1%" }} sx={{ w: 1 }} src={man} alt="" />
                </Grid>
                <Grid md={6}>
                    <Typography style={{ fontWeight: "bold" }} variant="h4" gutterBottom component="div">
                        CALCULATE YOUR COST
                    </Typography>
                    <Typography style={{ fontWeight: "500" }} variant="body2" gutterBottom component="div">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </Typography>
                    <Box sx={{ pt: 5 }}>
                        <form>
                            <Box sx={{ py: 1 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography style={{ fontWeight: "bold" }} variant="h6" component="span">
                                    HEIGHT (CM):
                                </Typography>
                                <TextField type="number" style={{ width: "70%" }} id="outlined-basic" label="Outlined" variant="outlined" />
                            </Box>
                            <Box sx={{ py: 1 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography style={{ fontWeight: "bold" }} variant="h6" component="span">
                                    HEIGHT (CM):
                                </Typography>
                                <TextField type="number" style={{ width: "70%" }} id="outlined-basic" label="Outlined" variant="outlined" />
                            </Box>
                            <Box sx={{ py: 1 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography style={{ fontWeight: "bold" }} variant="h6" component="span">
                                    HEIGHT (CM):
                                </Typography>
                                <TextField type="number" style={{ width: "70%" }} id="outlined-basic" label="Outlined" variant="outlined" />
                            </Box>
                            <Box sx={{ py: 1 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography style={{ fontWeight: "bold" }} variant="h6" component="span">
                                    HEIGHT (CM):
                                </Typography>
                                <TextField type="number" style={{ width: "70%" }} id="outlined-basic" label="Outlined" variant="outlined" />
                            </Box>
                            <Box sx={{ py: 1 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography style={{ fontWeight: "bold" }} variant="h6" component="span">
                                    HEIGHT (CM):
                                </Typography>
                                <TextField type="number" style={{ width: "70%" }} id="outlined-basic" label="Outlined" variant="outlined" />
                            </Box>
                            <Box sx={{ py: 1 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography style={{ fontWeight: "bold" }} variant="h6" component="span">

                                </Typography>
                                <Button style={{ width: "70%" }} variant="contained">Contained</Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Calculate;