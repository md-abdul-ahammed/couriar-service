import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import useAuth from "../hooks/useAuth";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "16px",
        marginLeft: theme.spacing(10),
        "&:hover": {
            color: "yellow",
        },
    },
}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { user, logout } = useAuth()

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    Igneous Courier

                </Typography>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className={classes.navlinks}>
                        <Link to="/" className={classes.link}>
                            Home
                        </Link>
                        <Link to="/about" className={classes.link}>
                            About
                        </Link>
                        {user.email && <Link to="/myOrder" className={classes.link}>
                            My Order
                        </Link>}
                        <Link to="/AddService" className={classes.link}>
                            Add Service
                        </Link>
                        <Link to="/manageAllServices" className={classes.link}>
                            Manage All Services
                        </Link>
                        {user.email && <Link onClick={logout} to="/login" className={classes.link}>
                            Logout
                        </Link>}
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;