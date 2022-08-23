import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../UI/Header'
import axios from "axios"

function SingleRoom() {
  var { id } = useParams()

  useEffect(() => {
    getRoomData()
  }, [])


  const [roomData, setRoomData] = useState({})
  const getRoomData = async () => {
    const roomData = await axios.get(`http://localhost:3001/room/${id}`)
    console.log(roomData.data[0])
  }

  return (
    <div>
      <Header />
      <p>SingleRoom ID: {id}</p>
    </div>
  )
}

export default SingleRoom