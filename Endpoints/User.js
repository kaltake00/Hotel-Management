
const db = require('../db')

const updateProfileImage = (req, res) => {
    if (!req.file) {
        console.log("No file upload");
    } else {
        console.log(req.session.user.id)
        console.log(req.file.filename)
        var imgsrc = 'http://127.0.0.1:3001/images/users/' + req.file.filename
        var insertData = "UPDATE users SET image_src = ? WHERE id = ?"
        db.query(insertData, [imgsrc, req.session.user.id], (err, result) => {
            if (err) throw err
            console.log("file uploaded")
            res.send({
                message: 'Image succesfully uploaded'
            })
        })
    }
};



module.exports = {updateProfileImage}