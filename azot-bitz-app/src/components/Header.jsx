import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CustomLink from "./CustomLink";
import {LogOut} from "../pages/HomePage";


export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        App
                    </Typography>
                    <CustomLink to={'/'}><Button variant="contained">Home</Button></CustomLink>
                    <CustomLink to={'/chats'}><Button variant="contained">Chats</Button></CustomLink>
                    <CustomLink to={'/profile'}><Button variant="contained">Profile</Button></CustomLink>
                    <CustomLink to={'/todos'}><Button variant="contained">Todos</Button></CustomLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
