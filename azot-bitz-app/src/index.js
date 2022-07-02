import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SomeNestedChild from './components/App'
import {ThemeProvider, createTheme} from '@material-ui/core';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/configureStore"



const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        type: 'light',
        primary: {
            main: '#3a7006',
            dark: '#20340d',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#282626',
        },
        background: {
            default: '#ffffff',
            paper: '#b5b5b5',
        },
    }});

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <BrowserRouter>
        <Provider store={store}>
        <ThemeProvider theme={theme}>
        <SomeNestedChild />
        </ThemeProvider>
        </Provider>
    </BrowserRouter>
);

