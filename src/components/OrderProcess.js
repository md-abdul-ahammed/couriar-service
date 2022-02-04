import { Container, Box, Typography } from '@mui/material';
import React from 'react';
import town from "../Images/town.jpg"

const OrderProcess = () => {
    return (
        <Box sx={{ py: 12 }} style={{ backgroundImage: `url(${town})`, backgroundSize: "cover" }}>
            <Container style={{ display: "flex", justifyContent: "space-between" }}>
                <Box style={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h2" style={{ fontWeight: "bold", paddingRight: "1rem" }}>
                        1.
                    </Typography>
                    <Box>
                        <Typography variant="h5" style={{ fontWeight: "bold" }}>
                            ORDER
                        </Typography>
                        <Typography variant="body1" >
                            Duis aute irure dolor in reprehenderit in.
                        </Typography>
                    </Box>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h2" style={{ fontWeight: "bold", paddingRight: "1rem" }}>
                        2.
                    </Typography>
                    <Box>
                        <Typography variant="h5" style={{ fontWeight: "bold" }}>
                            WAIT
                        </Typography>
                        <Typography variant="body1" >
                            Duis aute irure dolor in reprehenderit in.
                        </Typography>
                    </Box>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h2" style={{ fontWeight: "bold", paddingRight: "1rem" }}>
                        3.
                    </Typography>
                    <Box>
                        <Typography variant="h5" style={{ fontWeight: "bold" }}>
                            DELIVER
                        </Typography>
                        <Typography variant="body1" >
                            Duis aute irure dolor in reprehenderit in.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default OrderProcess;