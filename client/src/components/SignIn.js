import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthApi from '../utils/AuthApi';
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';

import styles from './SingIn.module.css'

function SignIn() {
    const authApi = React.useContext(AuthApi);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSignIn(e){
        e.preventDefault();

        const result =  await axios.post('/login', {username, password})
        console.log(result)
        if (result.data.auth){
          authApi.setAuth(true)
          authApi.setUserData(result.data.userData)
        }
        else{
          NotificationManager.error(result.data.message, 'Error');
        }
    }

  return (
    <div className={styles.signInComponent}>
      <div className={styles.loginCard}>
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
            <input placeholder='Username' name='username' onChange={(e) => setUsername(e.target.value)} />
            <input placeholder='Password' name='password' type="password" onChange={(e)=>setPassword(e.target.value)} />
            <button className='mainButton' type='submit'>Sign In</button>
        </form>
      </div>
        <Link className={styles.redirectLink} to="/signup">You have not account? Sign Up</Link>
        <NotificationContainer/>
    </div>
  )
}

export default SignIn