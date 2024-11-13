import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
