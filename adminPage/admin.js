import * as React from 'react';
import './admin.css';
//router
import { BrowserRouter, Route,Routes,Link } from 'react-router-dom';
//pages
import Home from './pages/Home'
import Post from './pages/Post'
import Profile from './pages/Profile'
import Messages from './pages/Messages'
import Settings from './pages/Settings'



export default function Admin() {
    return(
        <BrowserRouter>
        <main>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/post' element={<Post />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/messages' element={<Messages />}/>
                <Route path='/settings' element={<Settings />}/>
            </Routes>
        </main>   
        </BrowserRouter>
    
    )
}