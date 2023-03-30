import { useState } from 'react'
import './App.css'
import { Route, Routes, NavLink, useParams } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import Profile from './pages/Profile'
import Error from './pages/Error'

function App() {
  // const location = useLocation()
  const [userLogin, setuserLogin] = useState(false)

  return (
    <div className="App">
      <Routes>
        <Route exect path="/" element={<Home userLogin={userLogin} setuserLogin={setuserLogin}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/admin" element={<Admin userLogin={userLogin} setuserLogin={setuserLogin}/>} />
        <Route path="*" element={<Error />} />
      </Routes>

      <nav>
        <NavLink replace to="/" className="inactive-link">
          {({ isActive }) =>
            isActive ? (
              <p className="active-link">Home</p>
            ) : (
              <p>Home</p>
            )
          }
        </NavLink>

        <NavLink replace to="/about" className="inactive-link">
          {({ isActive }) =>
            isActive ? (
              <p className="active-link">About</p>
            ) : (
              <p>About</p>
            )
          }
        </NavLink>

        <NavLink replace to="/contact" className="inactive-link">
          {({ isActive }) =>
            isActive ? (
              <p className="active-link">Contact</p>
            ) : (
              <p>Contact</p>
            )
          }
        </NavLink>

        <NavLink replace to="/profile" className="inactive-link">
          {({ isActive }) =>
            isActive ? (
              <p className="active-link">Profile</p>
            ) : (
              <p>Profile</p>
            )
          }
        </NavLink>

        <NavLink replace to="/admin" className="inactive-link">
          {({ isActive }) =>
            isActive ? (
              <p className="active-link">For Admin!!</p>
            ) : (
              <p>For Admin!!</p>
            )
          }
        </NavLink>
      </nav>
    </div>
  )
}

export default App
