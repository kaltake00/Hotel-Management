import React from 'react'
import {Routes, Route, Navigate, useNavigate} from "react-router-dom"
import AdminDashboard from '../components/Admin/Dashboard/AdminDashboard'
import AdminGuests from '../components/Admin/Guests/AdminGuests'
import AdminLayout from '../components/Admin/AdminLayout'
import AdminRooms from '../components/Admin/Rooms/AdminRooms'
import FrontPage from '../components/Home/FrontPage'
import Profile from '../components/Profile/Dashboard/Profile'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import ProfileLayout from '../components/Profile/ProfileLayout'

import AuthApi from '../utils/AuthApi'
import SingleRoom from '../components/Room/SingleRoom'

function MyRoutes() {

    return (
        <Routes>
            <Route path="/" element={<FrontPage />}/>
            <Route path="/room/:id" element={<SingleRoom />} />
            <Route path="/signin" element={<AuthComponent component={SignIn}/>} />
            <Route path="/signup" element={<AuthComponent component={SignUp}/>} />
            <Route path="/profile" element={<PrivateComponent component={ProfileLayout}/>} >
                <Route path="" index element={<Profile />} />
                <Route path="reservations" element={<Profile />} />
                <Route path="reviews" element={<Profile />} />
            </Route>
            <Route path="/admin" element={<AdminComponent component={AdminLayout}/>}>
                <Route path="" index element={<AdminDashboard />} />
                <Route path="rooms" element={<AdminRooms />} />
                <Route path="guests" element={<AdminGuests />} />
            </Route>
            {/* <Route path="/test" element={<AuthComponent component={SignUp}/>} /> */}
        </Routes>
    )
}

const AdminComponent = ({component: Component, ...rest}) => {
    const navigate = useNavigate()
    const authApi = React.useContext(AuthApi);
    console.log('Admin Component: ', authApi.userData.role, authApi.auth)
    if (!authApi.auth){
        return <Navigate to="/signin" />
    }
    return (authApi.userData.role === "admin") ? <Component {...rest} /> : navigate(-1)
}

const AuthComponent = ({component: Component, ...rest}) => {
    const authApi = React.useContext(AuthApi);
   
    return !authApi.auth ? <Component {...rest} /> : <Navigate to="/profile" />
}


const PrivateComponent = ({component: Component, ...rest}) => {
    const authApi = React.useContext(AuthApi);
    console.log('Private Component: ', authApi.userData, authApi.auth)

    return authApi.auth ? <Component {...rest} /> : <Navigate to="/signin" />
}



export default MyRoutes