import React from 'react'
import { useState } from 'react'

function StateAssignmentOne() {
    const [count, setCount] = useState(0)

    function buttoncount() {
        setCount(count + 1)
    }

    return (
        <div>
            <section className="STO">
                <button onClick={buttoncount}>{count}</button>
            </section>
        </div>
    )
}

export default StateAssignmentOne