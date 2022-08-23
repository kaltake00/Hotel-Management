import React, { useEffect, useState } from "react";
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import MyRoutes from "./Routes/Routes"
import AuthApi from "./utils/AuthApi";
import axios from "axios";
import 'react-notifications/lib/notifications.css';

function App() {

    const [auth, setAuth] = useState(false)
    const [userData, setUserData] = useState({})
///////////////////////////////////////////////////////////////
////// READ SESSION API
    const readSession = async() => {
        axios.defaults.withCredentials = true
        const result = await axios.get('http://localhost:3001/auth/hasloggedin')
        if(result.data.auth){
            setAuth(true);
            setUserData(result.data.userData)
        }
    }

//////////////////////////////////////////////////////////////////
    useEffect(()=>{
        readSession()
    }, [])

/////////////////////////////////////////////////////////////////
    return (
        <div className="App">
            <AuthApi.Provider value={{ auth, setAuth, userData, setUserData }}>
                <Router>
                    <MyRoutes />
                </Router>
            </AuthApi.Provider>
        </div>
    );
}

export default App;
