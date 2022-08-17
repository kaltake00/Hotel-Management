import React, { useState } from 'react'
import styles from './AdminRooms.module.css'
import NewRoomModal from './NewRoomModal'

function AdminRooms() {
  const [createModalOpened, setCreateModalOpened] = useState(false);
  const closeCreateModal = () =>{
    setCreateModalOpened(false)
  }
  const openCreateModal = () => setCreateModalOpened(true)
  return (
    <div className='container'>
      {createModalOpened && <NewRoomModal onClose={closeCreateModal}/>}
      <div className={styles.topActionsWrapper}>
        <div style={{textAlign: "left"}}>
          <h3>Welcome to the admin rooms</h3>
          <p>Lorem ipsum dolor admin rooms</p>
        </div>
        <div>
          <button onClick={openCreateModal} className='mainButton'>
            Add new room
          </button>
        </div>
      </div>

      <div className={styles.roomsWrapper}>
        <h1>Sorry there are no rooms for now!</h1>
      </div>
    </div>
  )
}

export default AdminRooms