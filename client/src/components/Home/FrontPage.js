import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../UI/Header'
import styles from './FrontPage.module.css'
import FeaturedRoomCard from './FeaturedRoomCard';

function FrontPage() {

    useEffect(()=>{
        getFeaturedRooms()
    }, [])


    const [featuredRooms, setFeaturedRooms] = useState([])

    const getFeaturedRooms = async () => {
        const result = await axios.get("http://localhost:3001/rooms/featured")
        setFeaturedRooms(result.data)
        console.log('Featured rooms: ',featuredRooms)
    }

    return (
        <div>
            {/* Here goes NavBar */}
            <Header />

            {/* Here goes body of page */}
            <div className={`container ${styles.homeBanner}`}>
                <div style={{marginLeft: "75px"}}>
                    <h1>Enjoy Your <br /> dream vacation</h1>
                    <p>Many different rooms with great luxury prepared just for your needs.<br/> Enjoy worry-free in high comfort.</p>
                    <button className={`secondaryButton ${styles.ctaButton}`}>View all available rooms</button>
                </div>
            </div>

            {/* Featured Rooms */}

            <div className={`container ${styles.featuredRoom_section}`}>
                <div className={styles.sectionBreadcrumb}>
                    <h3>Featured rooms</h3>
                    <p>View All Rooms</p>
                </div>
                <div className={styles.featuredRoom_wrapper}>
                    <div className={styles.featuredRooms_inner}>
                        {featuredRooms.length > 0 
                            ? featuredRooms.map(room => <FeaturedRoomCard key={room.id} roomData={room}/>) 
                            : <h1>There are no rooms</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontPage