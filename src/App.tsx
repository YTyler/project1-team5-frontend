import React from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, useLocation} from 'react-router-dom'
import Header from './components/Header';
import Threads from './components/Threads';
import AddUser from './components/AddUser';
import LogUser from './components/LogUser';
import AddThread from './components/AddThread';
import LogHeader from './components/LogHeader';
import Footer from './components/Footer';
import About from './components/About';


function App() {
  const [showAddUser, setShowAddUser] = useState(false)
  const [showLogUser, setShowLogUser] = useState(false)
  const [showAddThread, setShowAddThread] = useState(false)
  const [showAuth, setShowAuth] = useState(true)

  useEffect(() => {
    const getThreads = async () => {
      const threadsFromServer = await fetchThreads()
      setThreads(threadsFromServer)
    }

    getThreads();
  }, [])

  const fetchThreads = async () => {
    const res = await fetch('http://localhost:5000/thread/all')
    const data = await res.json()
    return data
  }

  const [threads, setThreads] = useState<any[]>([])

  const [users, setUsers] = useState<any[]>([])
  

  const addUser = async (user:any) => {
    const res = await fetch('http://localhost:5000/user/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    const data = await res.json()

    setUsers([data, ...users])

  }

  const authUser = (user:any) => {
    if(user.userName === users.map)
      console.log(user);
  }

  const addThread = async (thread:any) => {
    const res = await fetch('http://localhost:5000/thread/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(thread)
    })

    const data = await res.json()

    setThreads([data, ...threads])
    
  }


  console.log([...users])
  return (
    <Router>
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
      
      <Route path='/' exact render={(props:any) => (
        <>
          {showAddUser && <AddUser onAdd={addUser}/>}
          {showLogUser && <LogUser onLog={authUser} onLogUser={() => setShowLogUser(!showLogUser)} onAuth={() => setShowAuth(!showAuth)} />}
          {showAddThread && <AddThread onAdd={addThread}/>}
          <Threads threads={threads}/>
        </>
      )} />

      <Route path='/about' component={About}/>
      <Footer />
    </div>
    </Router>
  );

  
}



export default App;
