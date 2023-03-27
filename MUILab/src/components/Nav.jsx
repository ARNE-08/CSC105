import React from 'react'
import { AppBar, Toolbar, Typography, Stack, IconButton } from '@mui/material'
import { display, fontSize } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';

const HeaderTextStyle = {
    color: "white",
    fontSize: "20px",
}

const Header = {
    backgroundColor: "#20232a",
    // position: "fixed"
}

const HeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

function Nav() {
    return (
        <AppBar sx={Header}>
            <Toolbar sx={HeaderStyle}>
                <Typography variant='h3' sx={HeaderTextStyle}>My Website</Typography>
                <Stack direction='row' spacing={3} sx={{display: {xs: "none", md: "block"}}}>
                    <Typography variant="p">
                        HOME
                    </Typography>
                    <Typography variant="p">
                        ABOUT
                    </Typography>
                    <Typography variant="p">
                        CONTACT
                    </Typography>
                </Stack>
                <IconButton color='inherit' sx={{display: {xs: "blobk", md: "none"}}}>
                    <MenuIcon></MenuIcon>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Nav