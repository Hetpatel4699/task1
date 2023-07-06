import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Logout from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Divider, MenuItem, Box } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        window.alert("You have been logged out")
    }
    const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
    return (
        <>
            <nav
                className=" navbar navbar-inverse navbar-fixed-left"
                style={{
                    // backgroundImage: `url(${background})`,
                    backgroundColor: "green",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100vw",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "0px",
                    padding: "0px",
                    height: "60px"
                }}
            >
                <div
                    style={{
                        backgroundColor: "green",
                        width: "100px",
                        height: "60px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                     {/* <img style={{ width: "80px" }} src="https://cdn.kekastatic.net/shared/branding/logo/keka-logo-light.svg" /> */} 
                </div>
                <div className="user">
                    <Box sx={{ textAlign: 'center' }}>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <span className="me-2" style={{ color: "white", }}><img style={{ width: "28px" }} src={user && user.picture} alt={user && user.name} className="mt-1"/></span>
                                <Avatar sx={{
                                    width: 32,
                                    height: 32,
                                    backgroundColor: "gray"
                                }}>
                                    <FaUserCircle /> </Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={handleClose}>
                            <Avatar />
                            Profile
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={() => { handleClose(); handleLogout() }}>
                            <ListItemIcon>
                                <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            Switch another account
                        </MenuItem>
                        <MenuItem onClick={() => { logout({ logoutParams: { returnTo: window.location.origin } }); loginWithRedirect() }}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </div>
            </nav>


            {/* <div
                className="text-center w-100 bg-dark text-white"
                style={{
                    height: "100vh",
                }}
            >
                {!isAuthenticated ? (
                    <div>
                        <img src={user.picture} alt={user.name} className="mt-4" />
                        <h2 className="mt-4">{user.name}</h2>
                        <p className="mt-4">{user.email}</p>
                        <button
                            className="btn btn-outline-danger mt-2"
                            onClick={() => { logout({ logoutParams: { returnTo: window.location.origin } }); loginWithRedirect() }}
                        >
                            Log Out
                        </button>
                    </div>
                ) : (
                    <div> */}
            {/* <img src={user.picture} alt={user.name} className="mt-4" />
                        <h2 className="mt-4">{user.name}</h2>
                        <p className="mt-4">{user.email}</p>
                        <button
                            className="btn btn-outline-danger mt-2"
                            onClick={() => { loginWithRedirect() }}
                        >
                            Log Out
                        </button> */}
            {/* </div>
                )}
            </div> */}
        </>
    )
}
export default Header
