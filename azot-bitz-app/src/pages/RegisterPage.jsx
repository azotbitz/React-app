import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../redux/reducers/userReducer/userSelector";
import {registerInitiate} from "../redux/reducers/userReducer/userReducer";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();

    useEffect(() => {
            if(!user) {
                return;
            }
            navigate('/login')
            }
    , [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== passwordRepeat){
            return;
        }
        dispatch(registerInitiate(email, password, nickname))
        navigate('/login')
    }

    const logIn = () => {
        navigate('/login')
    }

    return (
        <div>
            <h2>Registration Page</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nickname' value={nickname} onChange={(e) => setNickname(e.target.value)}/>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" placeholder='Password Again' value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)}/>
                <button type='submit'>SIGN UP</button>
            </form>
            <h2>You Already Have An Account?</h2>
            <button onClick={logIn}>LOG IN</button>
        </div>
    );
};

export default RegisterPage;