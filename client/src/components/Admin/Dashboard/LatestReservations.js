import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './LatestReservations.module.css'

function LatestReservations() {
  return (
    <div className={styles.reservationsWrapper}>
        <h3>Latest Reservation</h3>
        <NavLink to="/">Click here to see all reservations</NavLink>
        <div className={styles.reservationsRow}>
            <div className={styles.roomInfoCard+' '+styles.reservationCard}>
                <h3>Room Informations</h3>
                <div className={styles.informationsWrapper}>
                    <div className={styles.featuredRoomImg + ' '+styles.imageWrapper}>
                        <img src='https://hotelhills.ba/wp-content/uploads/2019/04/IMG_5377_1-1024x683.jpg'></img>
                    </div>
                    <div>
                        <h3>Room Name</h3>
                        <p>Number of beds: 4</p>
                        <p>Number of persons: 5</p>
                    </div>
                </div>
                <NavLink to="/">View room details</NavLink>
            </div>

            <div className={styles.clientInfoCard+' '+styles.reservationCard}>
                <h3>Client Informations</h3>
                <div className={styles.informationsWrapper}>
                    <div className={styles.clientProfileImage+' '+styles.imageWrapper}>
                        <img src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
                    </div>
                    <div>
                        <h3>Lorem Ipsum</h3>
                        <p>Total Reservations: 3</p>
                        <p>Email: loremipsum@mail.com</p>
                    </div>
                </div>
                <NavLink to="/">View client details</NavLink>
            </div>

            <div className={styles.reservationInfoCard+' '+styles.reservationCard}>
                <h3>Reservation Informations</h3>
                <h3 className={styles.reservationPrice}>Price: $214</h3>
                <div className={styles.informationsWrapper}>
                    <p>Check in date: 04/03/2022</p>
                    <p>Check out date: 04/03/2022</p>
                    <p>Persons: 4</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestReservations