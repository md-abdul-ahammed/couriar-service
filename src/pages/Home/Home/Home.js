import { Box } from '@mui/system';
import React from 'react';
import Calculate from '../../../components/Calculate';
import ContactUs from '../../../components/ContactUs';
import Footer from '../../../components/Footer';
import OrderProcess from '../../../components/OrderProcess';
import OurPricing from '../../../components/OurPricing';
import ProductDelivery from '../../../components/ProductDelivery';
import TrackingOrder from '../../../components/TrackingOrder';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';

const Home = () => {
    return (
        <Box style={{ backgroundColor: "#FFF" }}>
            <Header></Header>
            <TrackingOrder></TrackingOrder>
            <AboutUs></AboutUs>
            <Calculate></Calculate>
            <OrderProcess></OrderProcess>
            <ProductDelivery></ProductDelivery>
            <OurPricing></OurPricing>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </Box>
    );
};

export default Home;