import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import { Navigate } from 'react-router-dom'
// Import Bootstrap CSS and JavaScript
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './style.scss'
import 'flowbite'

// Import Font Awesome CSS
import 'font-awesome/css/font-awesome.min.css'

import ScrollToTopBtn from './components/ScrollToTop'
import Loader from './components/loader'
import Header from './components/header'
import Home from './pages/home'
import Home1 from './pages/home1'
import Home2 from './pages/home2'
import About from './pages/about'
import Team from './pages/team'
import Price from './pages/price'
import Works from './pages/works'
import Service from './pages/service'
import Service1 from './pages/service1'
import Service2 from './pages/service2'
import Service3 from './pages/service3'
import Blog from './pages/blog'
import Contact from './pages/contact'
// import ImageGallery from 'react-image-grid-gallery'

// const imagesArray = [
//   {
//     alt: "Image1's alt text",
//     caption: "Image1's description",
//     src: 'http://example.com/image1.jpg'
//   },
//   {
//     alt: "Image2's alt text",
//     caption: "Image2's description",
//     src: 'http://example.com/image2.png'
//   },
//   {
//     alt: "Image3's alt text",
//     caption: "Image3's description",
//     src: 'http://example.com/image3.webp'
//   }
// ]

export const ScrollTop = ({ children, Route }) => {
  React.useEffect(() => window.scrollTo(0, 0), [Route])
  return children
}

// eslint-disable-next-line react/prop-types
const PosedRouter = ({ children }) => (
  <div id='routerhang'>
    <div key={Route.key}>
      <Loader />
      {children}
    </div>
  </div>
)

export default function App () {
  return (
    <>
      {/* <ImageGallery imgArray={imagesArray} columnWidth={230} gapSize={24} /> */}
      <BrowserRouter>
        <div className='wraper'>
          <Header />
          <PosedRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home1' element={<Home1 />} />
              <Route path='/home2' element={<Home2 />} />
              <Route path='/about' element={<About />} />
              <Route path='/team' element={<Team />} />
              <Route path='/price' element={<Price />} />
              <Route path='/works' element={<Works />} />
              <Route path='/service' element={<Service />} />
              <Route path='/service1' element={<Service1 />} />
              <Route path='/service2' element={<Service2 />} />
              <Route path='/service3' element={<Service3 />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </PosedRouter>
          <ScrollToTopBtn />
        </div>
      </BrowserRouter>
    </>
  )
}
