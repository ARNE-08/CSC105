import React from 'react'
import '../styles/Admin.css'
import { Navigate } from 'react-router-dom'

function Admin({ userLogin, setuserLogin }) {
    const handleLogout = () => setuserLogin(false)

    if (!userLogin) {
        return <Navigate to="/" replace />;
        // return <p>You need to log in before logging into this page</p>
    }

    return (
        <div>
            <img src="src/assets/ProfilePic.jpg" alt="Pallas Cat" />
            <h1>This is Admin Page</h1>
            <button className='logout' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Admin