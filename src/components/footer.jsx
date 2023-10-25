export default function Footer () {
  return (
    <>
      <footer className=' container-fluid black_more'>
        <div className='bg-footer bg-pr2 z-0  '>
         
        </div>
        <div className='row m-10-hor  lg:h-[230px]  '>
          <div className='col-md-5 z-30'>
            <div className='footer-col'>
              <div className='heading'>
                <h2 className='font-weight-bold '>
                  <a href='/' className='text-decoration-none'>
                    <span className=' text-xl font-semibold inline-block pr-2'>
                      PRESTIGE
                    </span>
                    <span className='text-pr1 text-xl font-light inline-block '>
                      DESIGN
                    </span>
                  </a>
                </h2>
              </div>
              <div className='content pt-1 w-full '>
                <p className='font-light w-full leading-5'>
                  Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                  suscipit. Vestibulum auctor nunc vitae diam eleifend, in
                  maximus metus sollicitudin. Quisque vitae sodales lectus. Nam
                  porttitor justo sed mi finibus, vel tristique risus faucibus.
                  Curabitur mollis bibendum luctus. Duis
                </p>
              </div>
            </div>
          </div>

          <div className='col-md-4 z-30'>
            <div className='footer-col'>
              <div className='heading'>Follow Us</div>
              <div className='content space-y-4'>
                <p>You Can Follow Our Work And The Latest News On.</p>
                <div className='socialicon'>
                  <span className='shine'></span>
                  <i className='fa fa-facebook-f'></i>
                </div>
                <div className='socialicon'>
                  <span className='shine'></span>
                  <i className='fa fa-linkedin'></i>
                </div>
                <div className='socialicon'>
                  <span className='shine'></span>
                  <i className='fa fa-twitter'></i>
                </div>
                <div className='socialicon'>
                  <span className='shine'></span>
                  <i className='fa  fa-instagram'></i>
                </div>
              </div>

              <ul>
                <li>
                  <p
                    className='link-call z-10'
                    onClick={() =>
                      window.open('mailto:support@artha.com', '_self')
                    }
                  >
                    Email: at. support@artha.com
                  </p>
                </li>
                <li>
                  <p
                    className='link-call z-10'
                    onClick={() => window.open('tel:010-020-0340', '_self')}
                  >
                    Phone: +20 010-020-0340
                  </p>
                </li>
                <li>
                  <p
                    className='link-call z-10 max-w-[90%]'
                    onClick={() => window.open('tel:010-020-0340', '_self')}
                  >
                    Location: 356 Elgin St. Celina, Delaware 10299
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-2   z-30 '>
            <div className='footer-col w-full '>
              <div className='heading'>Usefull link</div>

              <div className='flex lg:flex-row justify-between space-x-4  '>
                <ul className='content w-full space-y-[10px]'>
                  <li>
                    <a href='/about' className='link'>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href='/team' className='link'>
                      Team
                    </a>
                  </li>
                  <li>
                    <a href='/works' className='link'>
                      Works
                    </a>
                  </li>

                  <li>
                    <a href='/services' className='link'>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href='/blog' className='link'>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href='/contact' className='link'>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='subfooter'>
          <div className='row m-10-hor'>
            <div className=' z-10  '>
              <div className='content justify-between flex space-x-10 w-full'>
                <div>
                  © Copyrights 2023-2024 
                  <span className='font-weight-bold '> </span> All rights
                  reserved.
                </div>
                <div>
                  <span className='font-weight-bold text-right hover:text-pr1'>
                    {' '}
                    <a href='https://www.xtreme-communication.com/'>
                      xtreme-communication
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
