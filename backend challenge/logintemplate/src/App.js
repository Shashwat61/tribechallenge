import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import authService from './services/authService';

function App() {
  const [user,setUser]=useState(false)

  useEffect(()=>{
    const res=authService.getUser()
    setUser(res)
  },[user])
  function handleLogout(){
    authService.logout()
    setUser(authService.getUser())
  }

  return (
    <div className="App">
      {
        !user ? 
        <Login setUser={setUser}/>
        : <div>
          <h2>Your email has been sent. Please check</h2>
          <button onClick={handleLogout} style={{padding:'0.5rem', border:'none',borderRadius:'4px', cursor:'pointer'}}>Logout</button>
        </div>
      }
    </div>
  );
}

export default App;
