import React from 'react'
import styles from './RoomCard.module.css'

function RoomCard(props) {
  var roomData = props.roomData
  return (
    <div className={styles.roomCard}>
        <div className={styles.featuredImage}>
            <img src={roomData.featured_img} alt="" />
        </div>
        <div className={styles.roomInformations}>
            <h3>{roomData.name}<span>ID: {roomData.id}</span></h3>
            <p>Beds: <span>{roomData.beds}</span></p>
            <p>Price: <span>{roomData.price}</span></p>
            <p>Total rents: <span>{roomData.total_rents}</span></p>
        </div>
        <div className={styles.actionButtonsWrapper}>
          <button className='mainButton'>Edit Room</button>
          <button className='secondaryButton'>Delete room</button>
        </div>
    </div>
  )
}

export default RoomCard