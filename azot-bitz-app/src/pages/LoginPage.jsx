import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loginInitiate} from "../redux/reducers/userReducer/userReducer";
import {userSelector} from "../redux/reducers/userReducer/userSelector";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if(user){
            navigate('/')
        }
    },[user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email || ! password) {
            return;
        }
        dispatch(loginInitiate(email, password))
    }

    const signUp = () => {
        navigate('/registration')
    }

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type={'submit'}>LOG IN</button>
            </form>
            <h2>You Have Not Login?</h2>
            <button onClick={signUp}>SIGN UP</button>
        </div>
    );
};

export default LoginPage;