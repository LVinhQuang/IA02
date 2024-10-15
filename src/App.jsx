import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PhotoGallery from './pages/photoGallery/PhotoGallery';
import PhotoDetail from './pages/photoDetail/PhotoDetail';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhotoGallery />} />
        <Route path="/photos/:id" element={<PhotoDetail />} />
      </Routes>
    </Router>
  )
}

export default App
