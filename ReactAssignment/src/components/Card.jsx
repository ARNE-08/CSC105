import React from 'react'
import "../styles/Card.css"

function Card(props) {
    console.log(props.newuser.Name);
    // const user = {
    //     Name: 'Paramita Saenghao',
    //     Job: 'Student',
    //     Hobby: 'Reading'
    // }

    return (
        <div className="Card">
            <p>Name: {props.newuser.Name}</p>
            <p>Job: {props.newuser.Job}</p>
            <p>Hobby: {props.newuser.Hobby}</p>
        </div>
    )
}

export default Card