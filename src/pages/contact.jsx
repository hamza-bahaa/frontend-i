//import emailjs from 'emailjs-com'

import Footer from '../components/footer'
import image2 from '../assets/img/bg-about.jpg'

export default function contact () {
  function sendEmail (e) {
    const success = document.getElementById('success')
    const button = document.getElementById('buttonsent')
    const failed = document.getElementById('failed')
    e.preventDefault()

      // emailjs
      //   .sendForm(
      //     'gmail',
      //     'template_csfdEZiA',
      //     e.target,
      //     'user_zu7p2b3lDibMCDutH5hif'
      //   )
      .then(
        result => {
          console.log(result.text)
          success.classList.add('show')

          button.classList.add('show')
          setTimeout(() => {
            location.reload()
          }, 1000)

          failed.classList.remove('show')
        },
        error => {
          console.log(error.text)
          failed.classList.add('show')
        }
      )
  }

  return (
    <div className=' pt-[80px]  wraperitem'>
      <section
        className=' jumbotron breadcumb relative  h-[50vh]  object-cover items-center bg-center object-center bg-cover w-full'
        style={{
          backgroundImage: `url(${image2})`
        }}
      >
        <div>
          <div className=' pt-[80px]   w-full    text-center flex justify-center items-center text-2xl drop-shadow-lg  transition-shadow duration-300 font-semibold'>
            <h1 className='text-center '>contact</h1>
          </div>

          <div className=' absolute  right-[13%] bottom-[8%] text-right pt-[110px] '>
            <a className='link' href='/'>
              Home
            </a>
            <span className='dash'>/</span>
            <span>contact</span>
          </div>
        </div>
      </section>
      <section className='container-fluid black_more'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <div className='text-side'>
              <h2>Get in Touch</h2>
              <p>
                Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
                dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                dapibus eu, fermentum et, dapibus sed, urna.
              </p>

              <div className='address'>
                <div className='heading'>Our Office</div>
                <div className='list'>
                  <i className='fa fa-map-marker'></i>
                  70 Washington Square South New York, NY 10012, United States
                </div>
                <div className='list'>
                  <i className='fa fa-envelope-o'></i>
                  <a
                    href='mailto:contact_info@artha.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    contact_info@prestige-design.com
                  </a>
                </div>
                <div className='list'>
                  <i className='fa fa-phone'></i>
                  +92 423 567 7
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='form-side'>
              <form className='formcontact ' onSubmit={sendEmail}>
                <label>Name</label>
                <input
                  className='  text-black'
                  type='text'
                  placeholder='Enter Your Name'
                  name='user_name'
                  required
                />
                <label>Phone</label>
                <input
                  className='  text-black'
                  type='tel'
                  placeholder='Enter Your Phone'
                  name='user_phone'
                  required
                />
                <label>Email</label>
                <input
                  className='  text-black'
                  type='email'
                  placeholder='Enter Your Email'
                  name='user_email'
                  required
                />

                <label>Message</label>
                <textarea className='text-black' name='message' required />
                <div id='success' className='hide'>
                  Your message has been sent...
                </div>
                <div id='failed' className='hide'>
                  Message failed...
                </div>
                <button type='submit' value={'send'} id='buttonsent'>
                  <span className='shine'></span>
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
