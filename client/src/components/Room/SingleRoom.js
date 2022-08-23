import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../UI/Header'

function SingleRoom() {
    var {id} = useParams()
  return (
    <div>
        <Header />
        <p>SingleRoom ID: {id}</p>
    </div>
  )
}

export default SingleRoom