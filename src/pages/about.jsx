import Testimony from '../components/carouseltestimony'
import Footer from '../components/footer'
import image1 from '../assets/img/bg-about.jpg'
export default function about () {
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
              <h1 className='text-center '>About Us</h1>
            </div>

            <div className=' absolute  right-[13%] bottom-[8%] text-right pt-[110px] '>
              <a className='link' href='/'>
                Home
              </a>
              <span className='dash'>/</span>
              <span>About Us</span>
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
        <section className='container-fluid p-0'>
          <div className='row'>
            <div className='col-md-6 px-0'>
              <img src={image1} className='imgslickz' alt='#' />
            </div>

            <div className='col-md-6 max-sm:container centered p-md-5 mx-auto max-w-[1200px] pt-5'>
              <div className='p-md-5  px-7 lg:px-0 '>
                <div className='heading '>Living Your Dreams</div>
                <p className='my-3'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmodt temp to the incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis a nostr a exercitation
                  ullamco laboris nisi ut aliquip.
                </p>
              </div>
            </div>

            {/* <div className='col-md-6 centered p-md-5 pt-5 pb-5'>
              <div className='p-md-5'>
                 <div className='heading'>Interior Design</div>
                <p className='my-3'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmodt temp to the incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis a nostr a exercitation
                  ullamco laboris nisi ut aliquip.
                </p>
                <a className='btn' href='/'>
                  <span className='shine'></span>
                  <span>More Detail</span>
                </a>
              </div>
            </div> */}

            {/* <div className='col-md-6 px-0'>
              <img src={ image1}jpg' className='imgslickz' alt='#' />
            </div> */}
          </div>
        </section>
        <div className='py-[55px]' />
        <Testimony />
        <Footer />
      </div>
    </>
  )
}
