import React, { useState } from 'react'
import AuthApi from '../../../utils/AuthApi'
import axios from 'axios'
import styles from './Profile.module.css'

import {NotificationContainer, NotificationManager} from 'react-notifications';

function Profile() {

    const authApi = React.useContext(AuthApi)
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };
    const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        try {
            const res = await axios.put(
                "http://localhost:3001/profile/image",
                formData
            );
            console.log(res);
            NotificationManager.success('Your profile picture will be changed at next login', 'Successfully changed profile picture');
        } catch (ex) {
            console.log(ex);
        }
    };

    const handleLogOut = async () => {
        const result = await axios.get('/auth/signout')
        console.log(result)
        authApi.setAuth(result.data.auth)
    }
    return (
        <div style={{backgroundColor: "#F3F4F7", textAlign: "left" }}>
            <div className='container'>


                <div className=''>
                    <div style={{marginTop:"45px", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                        <div>
                            <h3>Hi {authApi.userData.first_name} {authApi.userData.last_name}</h3>
                            <p>Welcome to profile dashboard</p>
                        </div>
                        <button className='mainButton' onClick={handleLogOut}>Log Out</button>
                    </div>
                    <div className='row' style={{display: "flex", gap:"25px", marginTop:"35px"}}>
                        <div className={styles.profilePictureWrapper}>
                            <h3>PROFILE IMAGE</h3>
                            <div style={{display: "flex"}}>
                                <img width={"200px"} src={authApi.userData.image_src} />
                                <div className={styles.formWrapper}>
                                    <input type="file" onChange={saveFile} />
                                    <p style={{fontWeight: "300", fontSize: "12px", marginTop:"5px"}}>Acceptable formats: jpg, png, jpeg <br/>Max file size is 50MB</p>
                                    <button className='secondaryButton' onClick={uploadFile}>Upload file</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.profileInformationsWrapper}>
                            <h3>ACCOUNT INFORMATIONS</h3>
                            <div className={styles.informationWrapper}>
                                <p>First Name</p>
                                <input type="text" defaultValue={authApi.userData.first_name} onChange={(e)=>{console.log(e.target.value)}}></input>
                            </div>
                            <div className={styles.informationWrapper}>
                                <p>Last Name</p>
                                <input type="text" defaultValue={authApi.userData.last_name}></input>
                            </div>
                            <div className={styles.informationWrapper}>
                                <p>Email</p>
                                <input type="text" defaultValue={authApi.userData.email}></input>
                            </div>
                            <button className='secondaryButton'>Save changes</button>
                        </div>

                        <div className={styles.profileInformationsWrapper}>
                            <h3>ACCOUNT CREDENTIALS</h3>
                            <div>
                                <div className={styles.credentialsWrapper}>
                                    <p>Username</p>
                                    <input type="text" defaultValue={authApi.userData.username} onChange={(e)=>{console.log(e.target.value)}}></input>
                                </div>
                                <div className={styles.credentialsWrapper}>
                                    <p>New Password</p>
                                    <input type="password" placeholder='New Password'></input>
                                </div>
                                <div className={styles.credentialsWrapper}>
                                    <p>Repeat Password</p>
                                    <input type="password" placeholder='New Password'></input>
                                </div>
                            </div>
                            <button className='secondaryButton' >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <NotificationContainer/>
        </div>
    )
}

export default Profile