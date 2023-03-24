import React from 'react'
import { useState } from 'react'
import Card from './Card'

function List() {
    const users = [
        {
            Name: 'Paramita Saenghao',
            Job: 'Student',
            Hobby: 'Reading'
        },
        {
            Name: 'ABC',
            Job: 'DEF',
            Hobby: 'GHI'
        },
        {
            Name: 'JKL',
            Job: 'MNO',
            Hobby: 'PQR'
        },
        {
            Name: 'STU',
            Job: 'VWX',
            Hobby: 'YZ'
        }
    ]

    return (
        <div className="List">
            {users.map((item) => {
                return <Card newuser={item} />
            })}
        </div>
    )
}

export default List