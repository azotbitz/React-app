import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {Button, Divider, Fab, FormGroup, Input} from "@material-ui/core";
import CustomLink from "./CustomLink";
import {useEffect, useRef, useState} from "react";
import Box from "@mui/material/Box";


export default function NestedList(props) {
    const [open, setOpen] = React.useState(true);
    const [chatUser, setChatUser] = useState(['Andrey', 'Evgeniy', 'Anna']);
    const [user, setUser] = useState('');
    const inputRef = useRef('');
    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() =>
    setUser('')
    , [chatUser])

    const deleteProduct = (product) => {
        setChatUser(chatUser.filter(p => p !== product));
    }

    function handleClick2(e) {
        e.preventDefault()
        setChatUser(prevState => [...prevState, user])
    }

        return(
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    ChatList
                </ListSubheader>
            }
        >
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Chats" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Divider/>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <FormGroup action=''>
                <input placeholder='Add Chat' type="text" className='input'
                       ref={inputRef} value={user} onChange={(e) => setUser(e.target.value)}/>
                    <Button variant="contained" onClick={handleClick2}>+</Button>
                </FormGroup>
            </Box>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {chatUser.map((cUser) => {
                    return(
                        <List component="div" disablePadding key={cUser}>
                            <Divider/>
                            <CustomLink to={`/chats/${cUser}`}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SendIcon/>
                                    </ListItemIcon>
                                    <ListItemText style={{color:'darkgrey'}} primary={<p>{cUser}</p>}/>
                                </ListItemButton>
                            </CustomLink>
                            <Button variant="contained" onClick={() => deleteProduct(cUser) }>-</Button>
                            <Divider/>
                        </List>
                    )
                })}
            </Collapse>
        </List>
        )}
