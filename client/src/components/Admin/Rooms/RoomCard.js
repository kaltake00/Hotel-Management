import React from 'react'
import styles from './RoomCard.module.css'

function RoomCard(props) {
  var roomData = props.roomData

  const deleteRoomHandler = () =>{
    props.onDelete(roomData.id)
  }
  return (
    <div style={{padding: "20px"}}>
      <div className={styles.roomCard}>
        <div className={styles.featuredImage}>
            <img src={roomData.featured_img} alt="" />
        </div>
        <div className={styles.roomInformations}>
            <span>ID: {roomData.id}</span>
            <h3>{roomData.name}</h3>
            <p>Beds: <span>{roomData.beds}</span></p>
            <p>Price: <span>{roomData.price}</span></p>
            <p>Total rents: <span>{roomData.total_rents}</span></p>
        </div>
        <div className={styles.actionButtonsWrapper}>
          <button className='mainButton'>Edit Room</button>
          <button className='secondaryButton' onClick={deleteRoomHandler}>Delete room</button>
        </div>
      </div>
    </div>
    
  )
}

export default RoomCard