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
        onAdd({ title, description, author })

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

            <input type='submit' value='Sign Up' className='btn btn-block'/>
        </form>
    )
}

export default AddThread
