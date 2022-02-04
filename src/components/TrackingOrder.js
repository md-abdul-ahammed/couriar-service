import { Box, Typography, TextField, Button } from '@mui/material';
import React from 'react';

const TrackingOrder = () => {
    return (
        <Box>
            <Box sx={{ boxShadow: 3, width: "80%", mx: "auto", p: 4 }} style={{ backgroundColor: "#fff", marginTop: "-8%" }}>
                <Box sx={{ py: 2, px: 3 }}>
                    <Typography variant="h6" display='inline-block' gutterBottom>
                        TRACK YOUR PRODUCT
                    </Typography>
                    <Typography sx={{ color: 'text.disabled' }} variant="body2" display='inline-block' style={{ marginLeft: "1rem" }} >
                        now you can track your product easily
                    </Typography>
                </Box>
                <Box>
                    <TextField
                        style={{ width: '30%', marginRight: "3%", marginLeft: "2%" }}
                        label="Size"
                        id="outlined-size-small"
                        defaultValue="Small"
                        size="small"
                    />
                    <TextField
                        style={{ width: '30%', marginRight: "3%" }}
                        label="Size"
                        id="outlined-size-small"
                        defaultValue="Small"
                        size="small"
                    />
                    <Button style={{ width: '30%', padding: "8px" }} variant="contained">Contained</Button>
                </Box>
            </Box >
        </Box >
    );
};

export default TrackingOrder;