import React from 'react'
import { useState } from 'react'

function LogUser({onLog, onAuth, onLogUser}:{onLog:any; onAuth:any; onLogUser:any}) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    const onSubmit = (e:any) => {
        e.preventDefault()

        onLog({ userName, password, remember })

        setUserName('')
        setPassword('')
        setRemember(false)
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
                <label>Remember Username:</label>
                <input type='checkbox' checked={remember} value={remember} onChange={(e:any) => setRemember(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='Login' className='btn btn-block' onClick={() => {onAuth(); onLogUser()}}/>
        </form>
    )
}

export default LogUser
