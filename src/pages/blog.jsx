import Testimony from '../components/carouseltestimony'
import Footer from '../components/footer'
import image2 from '../assets/img/blog1.jpg'
export default function blog () {
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
              <h1 className='text-center '>blog</h1>
            </div>

            <div className=' absolute  right-[13%] bottom-[8%] text-right pt-[110px] '>
              <a className='link' href='/'>
                Home
              </a>
              <span className='dash'>/</span>
              <span>blog</span>
            </div>
          </div>
        </section>

        <section className='container-fluid' id='blog'>
          <div className='row m-10-hor'>
            <div className='col-md-8'>
              <div className='left'>
                <div className='mainimg'>
                  <img src={image2} alt='imgservice' />
                </div>
                <div className='content'>
                  <div className='title'>Exterior</div>
                  <div className='desc'>
                    <p>
                      An international firm of architects, planners and interior
                      designers specialising in a wide range of commercial,
                      residential and public sector projects.
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries,
                      but also the leap into electronic typesetting{' '}
                    </p>
                    <blockquote>
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Duis mollis, est non
                      commodo luctus, nisi erat porttitor ligula, eget lacinia
                      odio sem nec elit. Integer posuere erat a ante venenatis
                      dapibus posuere velit aliquet.
                    </blockquote>
                    <p>
                      Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                      venenatis vestibulum. Cum sociis natoque penatibus et
                      magnis dis parturient montes, nascetur ridiculus mus. Duis
                      mollis, est non commodo luctus, nisi erat porttitor
                      ligula, eget lacinia odio sem nec elit. Integer posuere
                      erat a ante venenatis dapibus posuere velit aliquet.
                      Aenean eu leo quam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='right'>
                <h3>Recent posts</h3>
                <ul className='recent-post'>
                  <li>
                    <a className='recent' href='/blog'>
                      <div className='img'>
                        <img src={image2} alt='imgservice' />
                      </div>
                      <div className='contblog'>
                        <div className='title'>Lorem ipsum dolor sit</div>
                        <div className='descblog'>
                          Mazim alienum appellantur eu cu ullum officiis pro pri
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className='recent' href='/blog'>
                      <div className='img'>
                        <img
                          src={image2}
                          alt='imgservice'
                        />
                      </div>
                      <div className='contblog'>
                        <div className='title'>Maiorum ponderum eum</div>
                        <div className='descblog'>
                          Mazim alienum appellantur eu cu ullum officiis pro pri
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className='recent' href='/blog'>
                      <div className='img'>
                        <img
                          src={image2}
                          alt='imgservice'
                        />
                      </div>
                      <div className='contblog'>
                        <div className='title'>Et mei iusto dolorum</div>
                        <div className='descblog'>
                          Mazim alienum appellantur eu cu ullum officiis pro pri
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
                {/* <h3>Tags</h3>
                <ul className='tags'>
                  <li>
                    <a className='tag' href='/blog'>
                      Interior
                    </a>
                  </li>
                  <li>
                    <a className='tag' href='/blog'>
                      Trend
                    </a>
                  </li>
                  <li>
                    <a className='tag' href='/blog'>
                      Photography
                    </a>
                  </li>
                  <li>
                    <a className='tag' href='/blog'>
                      Design
                    </a>
                  </li>
                  <li>
                    <a className='tag' href='/blog'>
                      Exterior
                    </a>
                  </li>
                  <li>
                    <a className='tag' href='/blog'>
                      Website
                    </a>
                  </li>
                  <li>
                    <a className='tag' href='/blog'>
                      React Js
                    </a>
                  </li>
                  <li>
                    <a className='tag' href='/blog'>
                      Creative
                    </a>
                  </li>
                </ul> */}
                <div className='bannerservice'>
                  <div className='imgbg'>
                    <img src={image2} alt='imgservice' />
                  </div>
                  <div className='contb'>
                    <div className='headingb'>Get A quote</div>
                    <div className='descb'>With Experts Advice</div>
                    <div
                      className='btn'
                      onClick={() => window.open('/price', '_self')}
                    >
                      <span className='shine'></span>
                      <span>Click here</span>
                    </div>
                  </div>
                </div>
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
