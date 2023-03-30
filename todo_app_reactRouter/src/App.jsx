import { useState } from 'react'
import './App.css'
import CalendarPage from "./pages/Calendar"
import HomePage from './pages/Homepage'
import TodayPage from './pages/Todaypage'
import TodoPage from './pages/TodoPage';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exect path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </div>
  )
}

export default App
