import React, { useState } from 'react'
import styles from './NewRoomModal.module.css'
function NewRoomModal(props) {

    const [roomName, setRoomName] = useState('')
    const [roomBeds, setRoomBeds] = useState('')
    const [roomPrice, setRoomPrice] = useState('')
    // Room Image upload
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("No File Selected")
    const saveImage = (e) =>{
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    const submitNewRoom = (e) =>{
        e.preventDefault()
        const formData = new FormData();
        formData.append('roomName', roomName)
        formData.append('roomBeds', roomBeds)
        formData.append('roomPrice', roomPrice)
        formData.append('file', file)
        formData.append('fileName', fileName)
 
        props.onSubmit(formData)
        props.onClose()
    }

    return (
        <div>
            <div className={styles.backdrop} onClick={props.onClose} />
            <div className={styles.modalCard}>
                <h1>Add room</h1>
                <p>Please fill all fields and click submit</p>
                <form onSubmit={submitNewRoom}>
                    <div className={styles.coverImageWrapper}>
                        <div className={styles.uploadImage}>
                            <div className={styles.box}>
                                <div className={styles.actualImagePreview}>
                                    <img src={process.env.PUBLIC_URL + "/Images/placeholder.jpg"} alt=""></img>
                                </div>
                                <div className={styles.uploadOptions}>
                                    <label>
                                        <input id="RestaurantImageUpload" onChange={saveImage} name='image' type="file" required></input>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.uploadImageBody}>
                            <h3>Upload cover photo</h3>
                            <p>to be desplayed at top of your room, min size 360x620px</p>
                            <p>Selected file: {fileName}</p>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Room name</label>
                        <input type='text' name='name' required onChange={(e)=>setRoomName(e.target.value)}></input>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Total beds</label>
                        <input type='number' name='beds' required onChange={(e)=>setRoomBeds(e.target.value)}></input>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Price</label>
                        <input type='number' name='price' required onChange={(e)=>setRoomPrice(e.target.value)}></input>
                    </div>
                
                    
                    <button type='submit' className='mainButton'>Create new room</button>
                </form>
            </div>
        </div>
    )
}

export default NewRoomModal