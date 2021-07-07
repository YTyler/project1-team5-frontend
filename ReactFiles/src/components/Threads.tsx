import React from 'react'
import Thread from './Thread'



function Threads({threads} : {threads:any}) {
    

    return (
        <>
          {threads.map((thread:any) => (<Thread key={thread.id} thread={thread}/>))}  
        </>
    )
}

export default Threads
