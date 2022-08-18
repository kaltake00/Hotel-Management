import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './AdminRooms.module.css'
import NewRoomModal from './NewRoomModal'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import RoomCard from './RoomCard';


function AdminRooms() {

  useEffect(()=>{
    getAllRooms()
  }, [])

  const [createModalOpened, setCreateModalOpened] = useState(false);
  const [rooms, setRooms] = useState([])

  ////////////////////////////////////////////////////////////////
  const closeCreateModal = () =>{
    setCreateModalOpened(false)
  }

  const openCreateModal = () => setCreateModalOpened(true);
    // CREATE
  const submitNewRoom = async(formData) =>{
    try {
      const res = await axios.post("http://localhost:3001/room", formData)
      console.log(res)
      NotificationManager.success(res.data.message, 'Room created!');
      getAllRooms()
    }
    catch (ex){console.log(ex)}
  }
    // READ
  const getAllRooms = async () => {
    const result = await axios.get("http://localhost:3001/rooms")
    setRooms(result.data)
  }
    // DLETE
  const deleteRoom = async (roomId) => {
    console.log('successfully deleted room id: ', roomId)
    await axios.delete(`http://localhost:3001/rooms/delete/${roomId}`)
    NotificationManager.info("Room has been successfully deleted", 'Deleting room');
    getAllRooms()
  }

  /////////////////////////////////////////////////////////////////////
  return (
    <div className='container'>
      {createModalOpened && <NewRoomModal onClose={closeCreateModal} onSubmit={submitNewRoom}/>}
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
        {rooms.length > 0
          ? rooms.map(room => <RoomCard key={room.id} roomData={room} onDelete={deleteRoom}/>)
          : <h1>Sorry there are no rooms</h1>
        }
      </div>
      <NotificationContainer/>
    </div>
  )
}

export default AdminRooms