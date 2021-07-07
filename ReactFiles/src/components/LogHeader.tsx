import React from 'react'
import Button from './Button'

function LogHeader({title, onAddThread, showThread, onAuth, onLogUser} : {title:any; onAddThread: any; showThread: any; onAuth:any ; onLogUser: any}) {

    return (
        <header className='header'>
        <h1>{title}</h1>
        <Button color={showThread ? 'red' : 'purple'} text={showThread ? 'Close' : '+'} onClick={onAddThread}/>
        <Button color='red' text='Log Out' onClick={onAuth} />
        {/*<Button color={showLUser ? 'red' : 'green'} text={showLUser ? 'Close' : 'Log In'} onClick={onLogUser}/>
        <Button color={showAUser ? 'red' : 'blue'} text={showAUser ? 'Close' : 'Sign Up'} onClick={onAddUser}/>*/}
        
        </header>
    )
}

LogHeader.defaultProps = {
    title: 'Sylph'
}

export default LogHeader