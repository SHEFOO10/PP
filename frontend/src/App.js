import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import SidebarComponent from './components/Sidebar'
import { useEffect, useState } from 'react'
import Calendar from './components/Calendar';
import Courses from './components/Courses';
import Projects from './components/Projects';
import Faq from './components/Faq'
import Profile from './components/Profile';
import Signup from './components/Signup';
import './sass/styles.sass'
function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState({name: 'Mariem Ehab', title: 'Software Engineer'})

  return (
    <div className="App">
      <BrowserRouter>
      {loggedIn && <SidebarComponent setLoggedIn={setLoggedIn} userInfo={userInfo}/>}
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
          element={loggedIn ? <Profile /> : <Navigate replace to="/" />}
        ></Route>

        <Route
          path="/faq"
          element={loggedIn ? <Faq /> : <Navigate replace to="/" />}
        ></Route>

        <Route
          path="/calendar"
          element={loggedIn ? <Calendar /> : <Navigate replace to="/" />}
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