//import ImageGallery from '../components/ImageGallery'
import Footer from '../components/footer'
import image1 from '../assets/img/bg-about.jpg'
import ImageGallery from '../components/ImageGallerys'

export default function Works () {
  return (
    <>
      <div className=' pt-[80px]  wraperitem'>
        <section
          className=' jumbotron breadcumb relative  h-[50vh]  object-cover items-center bg-center object-center bg-cover w-full'
          style={{
            backgroundImage: `url(${image1})`
          }}
        >
          <div>
            <div className=' pt-[80px]   w-full    text-center flex justify-center items-center text-2xl drop-shadow-lg  transition-shadow duration-300 font-semibold'>
              <h1 className='text-center '>Our Works</h1>
            </div>

            <div className=' absolute  right-[13%] bottom-[8%] text-right pt-[110px] '>
              <a className='link' href='/'>
                Home
              </a>
              <span className='dash'>/</span>
              <span>Works</span>
            </div>
          </div>
        </section>

        <section className='container-fluid black pb-0'>
          <div className='row m-10-hor'>
            <div className=' p-md-5 mb-16'>
              <div className='heading'>Perfection Concept Design</div>

              <div>
                Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus
                metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor
                justo sed mi finibus, vel tristique risus faucibus. Curabitur
                mollis bibendum luctus. Duis suscipit vitae dui sed suscipit.
                Quisque vitae sodales lectus, vel tristique risus faucibus.
              </div>
            </div>
          </div>
        </section>

        <section className='container-fluid black_more'>
          <div className='row m-10-hor'>
            <ImageGallery />
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
