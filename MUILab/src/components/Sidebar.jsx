import React from 'react'
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Sidebar() {
    return (
        <Box sx={{display: "flex", justifyContent: "flex-end"}}>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <HomeIcon></HomeIcon>
                    </ListItemIcon>
                    <ListItemText primary="Homepage"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <ArticleIcon></ArticleIcon>
                    </ListItemIcon>
                    <ListItemText primary="Pages"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <GroupIcon></GroupIcon>
                    </ListItemIcon>
                    <ListItemText primary="Groups"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StorefrontIcon></StorefrontIcon>
                    </ListItemIcon>
                    <ListItemText primary="Marketplace"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PersonIcon></PersonIcon>
                    </ListItemIcon>
                    <ListItemText primary="Friends"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <SettingsIcon></SettingsIcon>
                    </ListItemIcon>
                    <ListItemText primary="Settings"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AccountBoxIcon></AccountBoxIcon>
                    </ListItemIcon>
                    <ListItemText primary="Profile"/>
                </ListItem>
            </List>
        </Box>
    )
}

export default Sidebar