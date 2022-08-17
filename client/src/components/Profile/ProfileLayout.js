import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from '../UI/Header'
import styles from './ProfileLayout.module.css'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {FaBed, FaCommentDots} from 'react-icons/fa'


function ProfileLayout() {
    return (
        <div style={{minHeight: "100vh", backgroundColor: "#F3F4F7"}}>
            <Header />
            <div className={`container ${styles.profileLayoutContainer}`}>
                <div className={styles.profileMenuWrapper}>
                    <NavLink to="" className={styles.profileMenuItem}>
                        <AiOutlineInfoCircle className={styles.profileMenuIcon} />
                        <p className={styles.profileMenuText}>Informations</p>
                    </NavLink>
                    <NavLink to="reservations" className={styles.profileMenuItem}>
                        <FaBed className={styles.profileMenuIcon}/>
                        <p className={styles.profileMenuText}>Reservations</p>
                    </NavLink>
                    <NavLink to="reviews" className={styles.profileMenuItem}>
                        <FaCommentDots className={styles.profileMenuIcon}/>
                        <p className={styles.profileMenuText}>Reviews</p>
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default ProfileLayout