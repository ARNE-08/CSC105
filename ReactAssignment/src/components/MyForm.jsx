import React from 'react'

function MyForm() {
    return (
        <div>
            <form action="#">
                <label htmlFor="">Email address</label><input type="email" placeholder='Enter email' required /><br />
                <label htmlFor="">Name</label><input type="text" placeholder='Enter Name' required /><br />
                <label htmlFor="">Lastname</label><input type="text" placeholder='Enter Lastname' required /><br />
                <label htmlFor="">Phone Number</label><input type="text" pattern="\d+" maxlength={10} minLength={10} placeholder='Enter Phone Number' required /><br />
                <label htmlFor="">Password</label><input type="password" placeholder='Password' required /><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default MyForm