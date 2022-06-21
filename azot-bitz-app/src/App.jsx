import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import ChatsPage from "./ChatsPage";
import NotFoundPage from "./NotFoundPage";


function SomeNestedChild(){
    return (
        <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path={'/profile'} element={<ProfilePage/>}/>
            <Route path={'/chats'} element={<ChatsPage/>}/>
        </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default SomeNestedChild;
