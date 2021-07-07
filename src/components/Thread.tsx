import React from 'react'

function Thread({ thread }:{ thread: any}) {


    return (
        <div>
            <h3>{thread.title}</h3>
            <p>{thread.description}</p>
            <p>By {thread.author}</p>
        </div>
    )
}

export default Thread
