import image1 from '../assets/img/bg-about.jpg'
import Slider from 'react-animated-slider'
//import 'react-animated-slider/build/vertical.css';
//import Slider from 'react-slick'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import 'react-animated-slider/build/horizontal.css'

const content = [
  {
    title: 'Experience Design',
    description: 'With precision',
    button: 'More Detail',
    link: '/',
    image: image1
  },
  {
    title: 'Concept Design',
    description: 'Stylish living',
    button: 'More Detail',
    link: '/',
    image: image1
  },
  {
    title: 'Choice of Residence',
    description: 'According lifestyle',
    button: 'More Detail',
    link: '/',
    image: image1
  }
]

export default function SliderHome () {
  return (
    <>
      <Slider className='slider-wrapper' autoplay={5000}>
        {content.map((item, index) => (
          <div
            key={index}
            className='slider-content'
            style={{
              background: `url('${item.image}') no-repeat center center`
            }}
          >
            <div className='inner'>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button onClick={() => window.open(item.link, '_self')}>
                <span className='shine'></span>
                <span>{item.button}</span>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}
