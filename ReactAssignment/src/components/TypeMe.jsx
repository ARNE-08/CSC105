import React from 'react'

function TypeMe() {
    function Pls() {
        document.getElementById("Focus").innerHTML = "Please type in here!"
    }

    return (
        <div>
            <input type="text" onBlur={Pls} />
            <p id="Focus" style={{color: "red"}}></p>
        </div>
    )
}

export default TypeMe