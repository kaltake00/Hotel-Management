import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthApi from '../../../utils/AuthApi'
import styles from './AdminDashboard.module.css'

import {MdMail, MdBorderColor , MdBarChart, MdTrendingDown, MdTrendingUp} from 'react-icons/md'
import {BsCheck2Circle} from 'react-icons/bs'
import LatestReservations from './LatestReservations'

function AdminDashboard() {
    const authApi = React.useContext(AuthApi)

  return (
    <div className='container' style={{textAlign: "left", height:"100%"}}>
        <h3>Hi {authApi.userData.first_name}</h3>
        <p>Welcome to dashboard</p>
        <div className={styles.mainInformationsWrapper}>

            <div className={`${styles.card} ${styles.profileInfoWrapper}`}>
                <div className='main-profile-info' style={{display: "flex", alignItems: "center"}}>
                    <img src={authApi.userData.image_src} style={{borderRadius: "7px", maxWidth: "48px"}} />
                    <div style={{marginLeft: "15px"}}>
                        <p style={{fontWeight: "600"}}>{authApi.userData.first_name + " " + authApi.userData.last_name}</p>
                        <p>{authApi.userData.role}</p>
                    </div>
                </div>
                <div className={styles.deviderLine} />
                <div className={styles.profileActionsWrapper}>
                    <div className={styles.profileAction}>
                        <MdMail />
                        <p style={{marginLeft: "10px"}}>{authApi.userData.email}</p>
                    </div>
                    <div className={styles.profileAction}>
                        <MdBorderColor />
                        <p style={{marginLeft: "10px"}}>Edit Account</p>
                    </div>
                </div>

            </div>

            <div className={styles.roomsInfoWrapper}>
                <div className={`${styles.card}`}>
                    <div className={styles.roomsInfoIconWrapper}>
                        <BsCheck2Circle />
                    </div>
                    <div>
                        <h3 className={styles.roomsInfoNumber}>34</h3>
                        <p style={{fontWeight: "300"}}>Reserved rooms</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.roomsInfoIconWrapper}>
                        <MdBarChart />
                    </div>
                    <div>
                        <h3 className={styles.roomsInfoNumber}>34</h3>
                        <p style={{fontWeight: "300"}}>Total rooms</p>
                    </div>
                </div>
            </div>

            <div className={`${styles.card} ${styles.revenueInfoWrapper}`}>
                <div>
                    <h3 style={{fontSize:"20px", fontWeight: "400"}}>Renevue</h3>
                    <h3 style={{fontSize:"28px", fontWeight: "400"}}>$3000</h3>
                    <p>Total Revenue</p>
                </div>
                <div className={styles.deviderLine} />
                <div style={{display: "flex", justifyContent:"space-between"}}>
                    <div style={{display: "flex", alignItems:"center"}}>
                        <MdTrendingUp style={{fontSize: "22px", color:"green"}}/>
                        <div style={{marginLeft: "15px"}}>
                            <p style={{fontWeight: "500"}}>$245</p>
                            <p style={{fontWeight: "300"}}>Higher Revenue</p>
                        </div>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <MdTrendingDown style={{fontSize: "22px", color:"red"}}/>
                        <div style={{marginLeft: "15px"}}>
                            <p style={{fontWeight: "500"}}>$34</p>
                            <p style={{fontWeight: "300"}}>Lowest Revenue</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <LatestReservations />

    </div>
  )
}

export default AdminDashboard