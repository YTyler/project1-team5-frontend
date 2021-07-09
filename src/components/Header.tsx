import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from './Button'

function Header({title, onAddUser, onLogUser, showAUser, showLUser, onAddThread, showThread} : {title:any; onAddUser:any; onLogUser:any; showAUser: any;  showLUser: any ; onAddThread: any; showThread: any}) {

    const location = useLocation()

    return (
        <header className='header NavBar'>
            <img className="Sylph" id = "logo" src={'/assests/images/SylphLogo.PNG'} alt = "Logo Goes Here"/>
        <h1>{title}</h1>
        {/*<Button color={showThread ? 'red' : 'purple'} text={showThread ? 'Close' : '+'} onClick={onAddThread}/>*/}
        {location.pathname === '/' && <Button color={showLUser ? 'red' : 'green'} text={showLUser ? 'Close' : 'Log In'} onClick={onLogUser}/>}
        {location.pathname === '/' && <Button color={showAUser ? 'red' : 'blue'} text={showAUser ? 'Close' : 'Sign Up'} onClick={onAddUser}/>}
        
        </header>
    )
}

Header.defaultProps = {
    title: 'Sylph'
}

export default Header
