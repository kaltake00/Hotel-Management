import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../UI/Header'
import styles from './FrontPage.module.css'

function FrontPage() {

    useEffect(()=>{
        getFeaturedRooms()
    }, [])


    const [featuredRooms, setFeaturedRooms] = useState([])

    const getFeaturedRooms = async () => {
        const result = await axios.get("http://localhost:3001/rooms/featured")
        setFeaturedRooms(result.data)
        console.table(featuredRooms)
    }

    return (
        <div>
            {/* Here goes NavBar */}
            <Header />

            {/* Here goes body of page */}
            <div className={`container ${styles.homeBanner}`}>
                <div>
                    <h1>Enjoy Your <br /> dream vacation</h1>
                    <p>Many different rooms with great luxury prepared just for your needs.<br/> Enjoy worry-free in high comfort.</p>
                    <button className={`secondaryButton ${styles.ctaButton}`}>View all available rooms</button>
                </div>
            </div>

            {/* Featured Rooms */}

            <div className={styles.featuredRoom_section}>
                <div>
                    <h3>Featured rooms</h3>
                    <p>View All Rooms</p>
                </div>
                <div className='featuredRooms--wrapper'>
                    {/* Here goes featuredRoom */}
                    <h1>Sorry, there are no featured rooms!</h1>
                </div>
            </div>
        </div>
    )
}

export default FrontPage