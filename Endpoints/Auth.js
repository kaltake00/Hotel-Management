const db = require('../db')

const registerUser = (req, res) => {
    const first_name = req.body.firstName;
    const last_name = req.body.lastName;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const role = "user";
    const profile_pic = "http://127.0.0.1:3001/images/users/blank-profile-pic.png"

    db.query(`SELECT * FROM users WHERE username = "${username}"`,
            
        (err, result) => {
            if (err){ 
                res.send({message: 'Error in database!'}) 
            }
            if (result.length > 0) {
                res.send({message: 'Already exists user with this username!'})
            }
            else {
                insertNewRow()
            }
        }
    )
    
    function insertNewRow(){
        db.query('INSERT INTO users (first_name, last_name, username, password, email, role, image_src) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [first_name, last_name, username, password, email, role, profile_pic],
            (error, result_2) => {
                if (error) {
                    res.send({message: err})
                }
                else {
                    req.session.user = result_2.insertId; // ovdje sam obrisao .id da vraca user id
                    console.log('CreatedUserID', result_2.insertId)
                    const userData = {
                        id: result_2.insertId,
                        first_name: first_name,
                        last_name: last_name,
                        username: username,
                        email: email,
                        role: role,
                        image_src: profile_pic
                    }
                    console.log(userData)
                    res.send({message: 'You have successfully created an account', auth: true, userData: userData})
                }
            }
        )
    }

    
}

const loginUser = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password)

    db.query("SELECT id, username, first_name, last_name, email, role, image_src FROM users WHERE username = ? AND password = ?", [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err })
            }
            if (result.length > 0) {
                req.session.user = result[0]; // ovdje sam obrisao .id da vraca user id
                const userData = {
                    id: result[0].id,
                    first_name: result[0].first_name,
                    last_name: result[0].last_name,
                    username: result[0].username,
                    email: result[0].email,
                    role: result[0].role,
                    image_src: result[0].image_src
                }
                res.send({ message: 'You are successfully logged in', auth: true , userData: userData})
            }
            else (
                res.send({ message: "Wrong credentials!", auth: false })
            )
        })
}

const checkLoginAuthentication = (req, res) => {
    if(req.session.user){
        res.send({
            auth: true,
            message: "You are logged in",
            userData: req.session.user
        })
    } else{
        return res.send({
            auth: false,
            message: 'You are not logged in!'
        })
    }
}

const logOutUser = (req,res)=>{
    req.session.destroy();
    res.send({
        auth: false,
        messange: 'You are successfully logged out'
    })
}

module.exports = {registerUser, loginUser, checkLoginAuthentication, logOutUser}