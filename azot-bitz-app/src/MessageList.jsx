import React from 'react';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

const MessageList = (props) => {
    return (
        <div>
            <Box sx={{ marginTop: '30px', width: '100%', maxWidth: 250, minWidth: 250, backgroundColor: 'lightgrey', height: '100vh'}}>
                <List>
                    {props.messageList2.map((msg) => {
                        return (
                        <div key={msg.id}>
                            <ListItemText sx={{border: '3px solid grey'}} primary={`TEXT: ${msg.text}, AUTHOR: ${msg.author}`} />
                        </div>
                        )
                    })}
                </List>
            </Box>
        </div>
    );
};

export default MessageList;