import React from 'react'

function Thread({ thread }:{ thread: any}) {


    return (
        <div id="Outer">
            <div className="Threads background" id="Post">
                <h3 id = "Title">{thread.title}</h3>
                <p>{thread.description}</p>
                <p>By: {thread.author}</p>
            </div>
        </div>
    )
}

export default Thread
