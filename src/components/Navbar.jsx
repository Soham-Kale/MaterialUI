import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import image from '../assets/img.png'

const Navbar = () => {
    const [open, setOpen] = useState("");

    const StyledToolBar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between'
    })

    const Search = styled('div')(({ theme }) => ({
        backgroundColor: ' white',
        padding: '0 10px',
        width: '40%',
        borderRadius: theme.shape.borderRadius
    }));

    const Icons = styled(Box)(({ theme }) => ({
        display: 'none',
        gap: '20px',
        alignItems: 'center',
        [theme.breakpoints.up("sm")]: {
            display: 'flex'
        }
    }));

    const UserBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        [theme.breakpoints.up("sm")]: {
            display: 'none'
        }
    }));

    return (
        <AppBar position='sticky'>
            <StyledToolBar >
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}> SOHAM</Typography>
                <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search><InputBase placeholder="search..."></InputBase></Search>

                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>

                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} src={image}
                        onClick={(e) => setOpen(true)}/>
                </Icons>

                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} src={image} />
                    <Typography variant='span'>John</Typography>
                </UserBox>
            </StyledToolBar>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar