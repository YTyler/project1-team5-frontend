import React from 'react'
import { useState } from 'react'

function AddThread({onAdd}: {onAdd:any}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')

    const onSubmit = (e:any) => {
        e.preventDefault()

        if(!title) {
            alert('Please use a valid title.')
            return
        }
        const kind = 'thread'
        const id = Math.floor(Math.random() * 10000) + 1
        var today = new Date();
        var date = today.getFullYear()+'_'+(today.getMonth()+1)+'_'+today.getDate();
        onAdd({ title, description, author, id, kind, date })

        setTitle('')
        setDescription('')
        setAuthor('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>title:</label>
                <input type='text' placeholder='title here' value={title} onChange={(e:any) => setTitle(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>description:</label>
                <input type='text' placeholder='description here' value={description} onChange={(e:any) => setDescription(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>author:</label>
                <input type='text' placeholder='author here' value={author} onChange={(e:any) => setAuthor(e.target.value)}/>
            </div>

            <input type='submit' value='Post' className='btn btn-block' onSubmit={onSubmit}/>
        </form>
    )
}

export default AddThread
