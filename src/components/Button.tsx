import React from 'react'

function Button({color, text, onClick} : {color: any; text: any; onClick:any}) {
    
    
    return (
        <div>
            <button onClick={onClick} style={{backgroundColor: color}}
            className='btn'>
                {text}
            </button>
        </div>
    )
}

export default Button
