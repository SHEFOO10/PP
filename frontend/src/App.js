import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import SidebarComponent from './components/Sidebar'
import { useEffect, useState } from 'react'
import CalendarComponent from './components/Calendar';
import Courses from './components/Courses';
import Projects from './components/Projects';
import Faq from './components/Faq'
import Profile from './components/Profile';
import Signup from './components/Signup';
import './sass/styles.sass'
import {getUser, logout} from './API'
import "react-big-calendar/lib/css/react-big-calendar.css"
function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState(null)

  const handleLogout = async () => {
    const response = await logout()
    if (response.success){
      setLoggedIn(false)
      setUserInfo(null)
    }
  }

  // runs when the user open application for the first time
  useEffect(() => {
    // check if user is logged in and fetch his info
    const checkAuth = async () => {
      const response = await getUser();
      if (response.success){
        setUserInfo(response.msg);
        setLoggedIn(true);
      }
    };
    checkAuth();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      {loggedIn && <SidebarComponent handleLogout={handleLogout} userInfo={userInfo}/>}
        <Routes>
        <Route
          path="/"
          element={loggedIn ? <Navigate replace to="/Dashboard" /> : <Login setLoggedIn={setLoggedIn} setUserInfo={setUserInfo} />}
        ></Route>

        <Route
          path="/Dashboard"
          element={loggedIn ? <Dashboard /> : <Navigate replace to="/" />}
        ></Route>

        <Route
          path="/profile"
          element={loggedIn ? <Profile userInfo={userInfo}/> : <Navigate replace to="/" />}
        ></Route>

        <Route
          path="/faq"
          element={loggedIn ? <Faq /> : <Navigate replace to="/" />}
        ></Route>

        <Route
          path="/calendar"
          element={loggedIn ? <CalendarComponent /> : <Navigate replace to="/" />}
        ></Route>

        <Route
          path="/courses"
          element={loggedIn ? <Courses /> : <Navigate replace to="/" />}
        ></Route>

        <Route
          path="/projects"
          element={loggedIn ? <Projects /> : <Navigate replace to="/" />}
        ></Route>

        <Route
          path="/signup"
          element={loggedIn ? <Navigate replace to="/Dashboard" /> : <Signup setLoggedIn={setLoggedIn}/>}
        ></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App