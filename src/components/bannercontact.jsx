import image2 from '../assets/img/bg-about.jpg'
export default function BannerContact () {
  return (
    <>
      ;
      <section className='container-fluid p-md-0'>
        <div className='row'>
          <div className='col-md-6'>
            <img
              src={image2}
              alt='imgbanner'
              className='w-100 border-radius'
            />
          </div>
          <div className='col-md-6 centered'>
            <div>
              <div className='subheading mt-md-0 mt-5'>You can trust us</div>
              <div className='heading'>We Made Your Design</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span className='br'></span>Fusce vitae egestas mi, vel dapibus
                diam. Mauris malesuada,
                <span className='br'></span>nisl non rutrum commodo, sem magna.
              </p>
              <a className='btn' href='/contact'>
                <span className='shine'></span>
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
