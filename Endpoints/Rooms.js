const db = require('../db')

const getAllRooms = (req, res) =>{
    db.query('SELECT * FROM rooms', (err, result) =>{
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    }) 
}


const createRoom = (req, res) => {
    if (!req.file){
        console.log("No file uploaded")
        res.send({
            message: "No file uploaded"
        })
    } else {
        console.log(req.file.filename)
        var imgsrc = 'http://127.0.0.1:3001/images/rooms/' + req.file.filename
        db.query("INSERT INTO rooms (name, beds, price, featured_img) VALUES (?, ?, ?, ?)",
        [req.body.roomName, req.body.roomBeds, req.body.roomPrice, imgsrc], (err,res)=>{
            if (err) throw err
            console.log('Room successfully created!')
            res.send({
                message: "Room has been successfully created!"
            })
        })
    }
}


module.exports = {getAllRooms, createRoom}