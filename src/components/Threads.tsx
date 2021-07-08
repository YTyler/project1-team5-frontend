import React from 'react'
import Thread from './Thread'



function Threads({threads} : {threads:any}) {
    
    console.log(threads)
    const threads2 = Object.values(threads)

    return (
        <>
          {threads.map((thread:any) => (<Thread key={thread.id} thread={thread}/>))}  
        </>
    )
}

export default Threads
