import React from 'react'
import Header from '../UI/Header'
import styles from './AdminLayout.module.css'
import { NavLink, Outlet } from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai'
import {FaBed, FaUser} from 'react-icons/fa'



function AdminLayout() {



    return (
        <div style={{minHeight: "100vh", backgroundColor: "#F3F4F7", paddingBottom: "30px"}}>
            <Header />
            <div className={`container ${styles.adminLayoutContainer}`}>
                <div className={styles.adminMenuWrapper}>
                    <NavLink to="" className={styles.adminMenuItem}>
                        <AiFillHome className={styles.adminMenuIcon} />
                        <p className={styles.adminMenuText}>Dashboard</p>
                    </NavLink>
                    <NavLink to="rooms" className={styles.adminMenuItem}>
                        <FaBed className={styles.adminMenuIcon}/>
                        <p className={styles.adminMenuText}>Rooms</p>
                    </NavLink>
                    <NavLink to="guests" className={styles.adminMenuItem}>
                        <FaUser className={styles.adminMenuIcon}/>
                        <p className={styles.adminMenuText}>Guests</p>
                    </NavLink>
                    
                </div>
            </div>
            <Outlet />
        </div>
        
    )

}

export default AdminLayout