import Pricing from '../components/pricing'
import Testimony from '../components/carouseltestimony'
import Footer from '../components/footer'
import image2 from '../assets/img/bg-about.jpg'

export default function Price () {
  return (
    <>
      <div className=' pt-[80px]  wraperitem'>
        <section
          className=' jumbotron breadcumb relative  h-[50vh]  object-cover items-center bg-center object-center bg-cover w-full'
          style={{
            backgroundImage: `url(${image2})`
          }}
        >
          <div>
            <div className=' pt-[80px]   w-full    text-center flex justify-center items-center text-2xl drop-shadow-lg  transition-shadow duration-300 font-semibold'>
              <h1 className='text-center '>Pricing</h1>
            </div>

            <div className=' absolute  right-[13%] bottom-[8%] text-right pt-[110px] '>
              <a className='link' href='/'>
                Home
              </a>
              <span className='dash'>/</span>
              <span>Pricing</span>
            </div>
          </div>
        </section>

        <Pricing />

        <section className='container-fluid'>
          <div className='row m-10-hor'>
            <div className='col-md-4'>
              <div className='pricelist mt-0'>
                <div className='heading'>Basic</div>
                <div className='bigprice'>
                  <span className='text-gradient'>$29</span>{' '}
                  <small>Month</small>
                </div>
                <ul className='list'>
                  <li>
                    <i className='fa fa-check'></i> 8 Weeks Free Service
                  </li>
                  <li>
                    <i className='fa fa-check'></i> 8 Weeks Free Service
                  </li>
                  <li>
                    <i className='fa fa-check'></i> 8 Weeks Free Service
                  </li>
                  <li>
                    <i className='fa fa-check'></i> 8 Weeks Free Service
                  </li>
                  <li>
                    <i className='fa fa-check'></i> 8 Weeks Free Service
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='pricelist mt-0'>
                <div className='heading'>Standard</div>
                <div className='bigprice'>
                  <span className='text-gradient'>$39</span>{' '}
                  <small>Month</small>
                </div>
                <ul className='list'>
                  <li>
                    <i className='fa fa-check'></i> 8 Weeks Free Service
                  </li>
                  <li>
                    <i className='fa fa-check'></i> 8 Weeks Free Service
                  </li>
                  <li>
                    <i className='fa fa-check'></i> 8 Weeks Free Service
                  </li>
                  <li>
                    <i className='fa fa-check'></i> 8 Weeks Free Service
                  </li>
                  <li>
                    <i className='fa fa-check'></i> 8 Weeks Free Service
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='pricelist mt-0'>
                <div className='heading'>Advanced</div>
                <div className='bigprice'>
                  <span className='text-gradient'>$49</span>{' '}
                  <small>Month</small>
                </div>
                <ul className='list'>
                  <li>
                    <i className='fa fa-check'></i> 8 Weeks Free Service
                  </li>
                  <li>
                    <i className='fa fa-check'></i> 8 Weeks Free Service
                  </li>
                  <li>
                    <i className='fa fa-check'></i> 8 Weeks Free Service
                  </li>
                  <li>
                    <i className='fa fa-check'></i> 8 Weeks Free Service
                  </li>
                  <li>
                    <i className='fa fa-check'></i> 8 Weeks Free Service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Testimony />
        <Footer />
      </div>
    </>
  )
}
