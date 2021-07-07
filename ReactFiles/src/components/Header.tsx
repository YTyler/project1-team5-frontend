import React from 'react'
import Button from './Button'

function Header({title, onAddUser, onLogUser, showAUser, showLUser, onAddThread, showThread} : {title:any; onAddUser:any; onLogUser:any; showAUser: any;  showLUser: any ; onAddThread: any; showThread: any}) {

    return (
        <header className='header'>
        <h1>{title}</h1>
        {/*<Button color={showThread ? 'red' : 'purple'} text={showThread ? 'Close' : '+'} onClick={onAddThread}/>*/}
        <Button color={showLUser ? 'red' : 'green'} text={showLUser ? 'Close' : 'Log In'} onClick={onLogUser}/>
        <Button color={showAUser ? 'red' : 'blue'} text={showAUser ? 'Close' : 'Sign Up'} onClick={onAddUser}/>
        
        </header>
    )
}

Header.defaultProps = {
    title: 'Sylph'
}

export default Header
