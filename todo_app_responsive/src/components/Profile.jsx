import "./Profile.css";
// import Profile from '../assets/Profile.jpg'
import React from 'react'

function Profile() {
  return (
    <div className = "layout">
        <img src="src/assets/ProfilePic.jpg" alt="ab" />
        <h1 className = "name">Paramita Saenghao</h1>
        <hr></hr>
    </div>
  )
}

export default Profile