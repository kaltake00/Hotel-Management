import React from 'react'
import styles from './FeaturedRoomCard.module.css'
import {HiArrowRight} from 'react-icons/hi'
import {AiOutlineEdit} from 'react-icons/ai'
import AuthApi from '../../utils/AuthApi'
import { Link } from 'react-router-dom'

function FeaturedRoomCard(props) {
    const authApi = React.useContext(AuthApi)
    var isAdmin = false;
    if (authApi.userData.role === "admin"){
        isAdmin = true;
    }

    const roomData = props.roomData;

    return (
        <div className={styles.roomCard}>
            <div className={styles.roomImageWrapper}>
                <img src={roomData.featured_img} alt={`${roomData.name}`}></img>
                {isAdmin && 
                    <div className={styles.editRoomWrapper}>
                        <AiOutlineEdit />
                    </div>
                }
            </div>
            <div className={styles.roomBody}>
                <div className={styles.roomInformations}>
                    <p className={styles.roomPrice}>${roomData.price}.00</p>
                    <h3>{roomData.name}</h3>
                    <p className={styles.totalBeds}>Beds: {roomData.beds}</p>
                </div>
                <Link className={styles.roomButton} to={`/room/${roomData.id}`}>
                    <HiArrowRight />
                    <p>book</p>
                </Link>
            </div>
        </div>
    )
}

export default FeaturedRoomCard