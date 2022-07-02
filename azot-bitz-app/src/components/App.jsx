import {Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ChatsPage from "../pages/ChatsPage";
import NotFoundPage from "../pages/NotFoundPage";


function SomeNestedChild(){
    return (
        <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path={'/profile'} element={<ProfilePage/>}/>
            <Route path={'/chats'} element={<ChatsPage/>}/>
            <Route path={'/chats/:id'} element={<ChatsPage/>}/>
        </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default SomeNestedChild;
