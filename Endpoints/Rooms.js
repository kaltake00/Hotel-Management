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