import React from 'react'
import { useState } from 'react'

function AddUser({onAdd}:{onAdd:any}) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const onSubmit = (e:any) => {
        e.preventDefault()
        const kind = 'user'
        const id = Math.floor(Math.random() * 10000) + 1
        onAdd({ userName, password, email, id, kind })

        setUserName('')
        setPassword('')
        setEmail('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Username:</label>
                <input type='text' placeholder='Username here' value={userName} onChange={(e:any) => setUserName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Password:</label>
                <input type='text' placeholder='Password here' value={password} onChange={(e:any) => setPassword(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Email:</label>
                <input type='text' placeholder='Email here' value={email} onChange={(e:any) => setEmail(e.target.value)}/>
            </div>

            <input type='submit' value='Sign Up' className='btn btn-block'/>
        </form>
    )
}

export default AddUser
