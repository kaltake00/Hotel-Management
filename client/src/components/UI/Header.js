import React from 'react'
import styles from './Header.module.css'
import AuthApi from '../../utils/AuthApi'
import { NavLink } from 'react-router-dom';

function Header() {

  const authApi = React.useContext(AuthApi);

  return (
    <div className={styles.headerWrapper}>
        <div className={`container ${styles.headerContainer}`}>
            <div className='logo-wrapper'>
                <h1 className={styles.logoText}>Luxe Hotel</h1>
            </div>
            <div className={styles.headerMenu}>
                {/* Here add anchor tags at menu elements */}
                
                <NavLink className={styles.menuItem} to="/">Home</NavLink>
                <NavLink className={styles.menuItem} to="/rooms">Rooms</NavLink>
                <NavLink className={styles.menuItem} to="/contact">Contact</NavLink>

                {!authApi.auth 
                  ? <NavLink to="/signin" className={styles.menuItem + ' ' + styles.loginBtn}>Login</NavLink>
                  : <NavLink to="/profile" className={styles.menuItem}>Hello {authApi.userData.first_name}</NavLink>
                }
                {authApi.userData.role === "admin" && <NavLink to="/admin/" className={styles.menuItem}>Admin</NavLink>}
            </div>
        </div>
    </div>
  )
}

export default Header