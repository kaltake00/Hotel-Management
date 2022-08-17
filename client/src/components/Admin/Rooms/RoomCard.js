import React from 'react'

function RoomCard() {
  return (
    <div className='roomCard'>
        <div className='featuredImage'>
            <img src='https://hotelhills.ba/wp-content/uploads/2019/04/IMG_5377_1-1024x683.jpg' />
        </div>
        <div className='roomInfromations'>
            <h3>Room Name ipsum <span>ID: 3</span></h3>
            <p>Beds: <span>3</span></p>
            <p>Price: <span>3</span></p>
            <p>Total rents: <span>3</span></p>
            <p>Discount: <span>No</span></p>
        </div>
    </div>
  )
}

export default RoomCard