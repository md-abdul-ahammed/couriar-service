import { Box } from '@material-ui/core';
import React from 'react';
import './Header.css';
import car from '../../../Images/1410501b-63ed-47b3-b7f1-ea95f8c5367a.png'
import { Typography } from '@mui/material';

const Header = () => {
    return (
        <Box className='header-container'>
            <Box sx={{ py: 20 }} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <img src={car} alt="" />
                <div>
                    <span>Fast</span>
                    <span>Secured</span>
                    <span>Worldwide</span>
                </div>
                <Typography style={{ fontWeight: "900", color: '#fff' }} variant="h2" component="div">
                    AWESOME TEMPLATE FOR
                </Typography>
                <Typography style={{ fontWeight: "900", color: '#fff' }} variant="h2" gutterBottom component="div">
                    COURIER & DELIVERY SERVICES
                </Typography>
            </Box>
        </Box>
    );
};

export default Header;