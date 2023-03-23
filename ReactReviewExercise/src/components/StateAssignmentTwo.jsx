import React from 'react'
import { useState } from 'react'

function StateAssignmentTwo() {
    const [number, setNumber] = useState([])

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    function RandomNum() {
        setNumber([...number, getRandomInt(9)])
    }

    return (
        <div>
            <section>
                <button onClick={RandomNum}>Click me!</button>
                <ul>
                    {number.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default StateAssignmentTwo