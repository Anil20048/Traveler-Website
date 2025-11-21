import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Destinations from '../Pages/Destinations'
import About from "../Pages/AboutPage";

import Packages from '../Pages/Packages'
import BookingPage from '../Pages/BookingPage'
import BlogPage from "../Pages/BlogPage";
import GalleryPage from '../Pages/GalleryPage'
import ContactPage from '../Pages/ContactPage'
import PrivacyPage from '../Pages/privacyPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path='/about' element={<About/>}/>
      <Route path="/packages" element={<Packages />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="PrivacyPage" element={<PrivacyPage/>} />
    </Routes>
  )
}

export default AppRoutes
