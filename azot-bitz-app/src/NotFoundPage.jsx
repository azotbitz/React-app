import React from 'react';
import Button from "@mui/material/Button";
import CustomLink from "./CustomLink";

const NotFoundPage = () => {
    return (
        <div>
            Page Not Found. Try Again Later.
            <hr/>
            <CustomLink to={'/chats'}><Button variant="contained">Chats</Button></CustomLink>
            <hr/>
            <CustomLink to={'/'}><Button variant="contained">Home</Button></CustomLink>
            <hr/>
            <CustomLink to={'/profile'}><Button variant="contained">Profile</Button></CustomLink>
        </div>
    );
};

export default NotFoundPage;