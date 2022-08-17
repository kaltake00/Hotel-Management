import { Axios } from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import styles from './SignUp.module.css'
import {NotificationContainer, NotificationManager} from 'react-notifications';

import AuthApi from '../utils/AuthApi';


function SignUp(props) {

    const authApi = React.useContext(AuthApi);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await axios.post('/register', {username, password, email, firstName, lastName})
        console.log(result)
        if (result.data.auth){
            authApi.setAuth(true)
            authApi.setUserData(result.data.userData)
        }
        else{
            NotificationManager.error(result.data.message, 'Error');
        }
        console.log(result)
    }
    return (
        <div className={styles.signUpComponent}>
            <div className={styles.registerCard}>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input placeholder='First Name' name='firstName' onChange={(e)=>setFirstName(e.target.value)}/>
                    <input placeholder='Last Name' name='lastName' onChange={(e)=>setLastName(e.target.value)}/>
                    <input placeholder='Email' name='email' type='email' onChange={(e)=>setEmail(e.target.value)}/>
                    <input placeholder='Username' name='Username' onChange={(e)=>setUsername(e.target.value)}/>
                    <input placeholder='Password' name='password' type="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <button className='mainButton' type='submit'>Sign Up</button>
                </form>
            </div>
            <Link className={styles.redirectLink} to="/signin">Already have an account? Sign In</Link>
            <NotificationContainer/>
        </div>
    )
}

export default SignUp