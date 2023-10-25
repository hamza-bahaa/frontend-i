import { useState, useEffect } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {const handleScroll = () => {
  setIsVisible(window.scrollY > 300)
}


    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div id='scroll-to-top' className={`init ${isVisible ? 'visible' : ''}`}>
      {isVisible && (
        <div onClick={scrollToTop}>
          <i className='fa fa-chevron-up fa-2x bg-gradient'></i>
        </div>
      )}
    </div>
  )
}

export default ScrollToTop
