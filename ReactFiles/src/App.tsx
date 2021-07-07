import React from 'react';
import { useState } from 'react'
import Header from './components/Header';
import Threads from './components/Threads';
import AddUser from './components/AddUser';
import LogUser from './components/LogUser';
import AddThread from './components/AddThread';
import LogHeader from './components/LogHeader';


function App() {
  const [showAddUser, setShowAddUser] = useState(false)
  const [showLogUser, setShowLogUser] = useState(false)
  const [showAddThread, setShowAddThread] = useState(false)
  const [showAuth, setShowAuth] = useState(true)


  const [threads, setThreads] = useState([
    {
        id: 0,
        type: 'Thread',
        title: 'A Thread',
        description: 'This is a thread about threads.',
        media: '',
        date: 0o6012021,
        author: 'Matt_Otto'

    },
    {
        id: 1,
        type: 'Thread',
        title: 'A Cat',
        description: 'This is a thread about cats.',
        media: '',
        date: 0o6122021,
        author: 'Matt_Otto'

    }
])

  const [users, setUsers] = useState([
    {
      userName: 'Matt_Otto',
      password: 'PassWord',
      email: 'thisis@anemail.com',
      id: 1,
      profile: {
        displayName: '',
        aboutUser: `He's dumb`,
      }
    }
  ])


  const addUser = (user:any) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newUser = {id, ...user}
    setUsers([...users, newUser])
  }

  const authUser = (user:any) => {
    if(user.userName === users.map)
      console.log(user);
  }

  const addThread = (thread:any) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newThread = {id, ...thread}
    setThreads([...threads, newThread])
  }


  console.log([...users])
  return (
    <div>
      {showAuth ? 
      <Header 
      onAddUser={() => setShowAddUser(!showAddUser)} showAUser={showAddUser} 
      onLogUser={() => setShowLogUser(!showLogUser)} showLUser={showLogUser} 
      onAddThread={() => setShowAddThread(!showAddThread)} showThread={showAddThread}/> 
      : 
      <LogHeader 
      onAddThread={() => setShowAddThread(!showAddThread)} showThread={showAddThread} 
      onAuth={() => setShowAuth(!showAuth)} 
      onLogUser={() => setShowLogUser(!showLogUser)}/>
      }
      {showAddUser && <AddUser onAdd={addUser}/>}
      {showLogUser && <LogUser onLog={authUser} onLogUser={() => setShowLogUser(!showLogUser)} onAuth={() => setShowAuth(!showAuth)} />}
      {showAddThread && <AddThread onAdd={addThread}/>}
      <Threads threads={threads}/>
      
    </div>
  );

  
}



export default App;
