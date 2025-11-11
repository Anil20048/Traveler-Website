import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Destinations from '../Pages/Destinations'
import Packages from '../Pages/Packages'
import BookingPage from '../Pages/BookingPage'
import BlogPage from "../Pages/BlogPage";
import GalleryPage from '../Pages/GalleryPage'
import ContactPage from '../Pages/ContactPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default AppRoutes
