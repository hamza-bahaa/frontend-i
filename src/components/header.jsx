import React, { useState, useEffect, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { HiOutlineMenu } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { HiOutlineChevronDown } from 'react-icons/hi2'

export default function Header () {
  // State to store fetched services data
  const [services, setServices] = useState([null])
  const [open, setOpen] = useState(false)

  // Fetch services data from API
  useEffect(() => {
    fetch(`http://localhost:5173/services.json`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setServices(data)
        console.log(data)
      })
  }, [])

  return (
    <>
      <header className='bg-pr2 mainbg fixed z-50 w-full   '>
        <div className='mx-auto max-w-[1220px]  z-50 py-2 sm:px-6  '>
          <div className='flex lg:h-16 max-w-[1220px] mx-auto container items-center justify-between'>
            <a
              href='/'
              className='flex-1 md:flex z-50 md:max-w-[1220px] items-center md:gap-12'
            >
              <svg
                className='hover:fill-pr1   hover:scale-110 duration-500 hover:text-pr1 max-w-[140px] max-sm:max-w-[140px] lg:min-w-[140px] '
                xmlns='http://www.w3.org/2000/svg'
                x='0'
                y='0'
                enableBackground='new 0 0 646.172 300.014'
                version='1.1'
                viewBox='0 0 646.172 300.014'
                xmlSpace='preserve'
                fill='#FFF'
              >
                <path d='M111.627 160.713H96.505v90.936h35.676v-70.4c0-11.332-9.201-20.536-20.554-20.536zM76.921 160.713H41.188v35.735h35.666l.067-35.735z'></path>
                <path d='M77.069 81.118h3.052c20.101 0 40.202-.04 60.306.054 4.158.02 8.348.339 12.466.918 12.357 1.759 23.418 6.775 32.74 14.994 18.736 16.49 26.896 37.227 23.079 62.104-.074.505-.171 1.012-.265 1.516-3.218 18.399-13.084 32.851-28.506 43.519-3.705 2.565-7.786 4.549-11.81 6.869v37.4c1.365-.339 2.525-.581 3.648-.937 19.824-6.082 36.594-16.901 49.735-32.926a220.16 220.16 0 002.805-3.537c11.833-15.535 18.813-32.379 20.816-50.388 1.217-10.967.601-22.404-1.929-34.234-5.503-25.923-19.597-46.551-41.066-62.032-17.032-12.295-36.181-18.961-57.199-19.166-22.669-.205-45.354-.186-68.02-.129-11.269.017-22.537.035-33.789.035-.673 0-1.328.114-1.887.188v79.381h35.824V81.118z'></path>
                <path d='M41.185 219.261H76.918V254.91H41.185z'></path>
                <path d='M143.131 156.958c-10.969-15.271-30.106-14.38-31.392-14.299H97.227v-35.928h47.833c20.297 0 36.757 16.977 36.757 37.907 0 10.465-4.106 19.94-10.762 26.787-5.756 5.934-13.411 9.911-21.946 10.861.393-2.771 1.753-14.561-5.978-25.328'></path>

                <path d='M319.368 114.07c0 8.859-6.088 14.324-15.915 14.324h-8.438v11.62h-6.943V99.746h15.381c9.827 0 15.915 5.408 15.915 14.324zm-6.996 0c0-5.062-3.15-7.996-9.239-7.996h-8.117v15.992h8.117c6.088 0 9.239-2.934 9.239-7.996zM358.084 140.014l-7.638-11.793c-.48.058-.961.058-1.441.058h-8.438v11.735h-6.942V99.746h15.381c9.826 0 15.915 5.408 15.915 14.324 0 6.098-2.884 10.584-7.958 12.713l8.599 13.231h-7.478zm-9.4-33.94h-8.118v16.049h8.118c6.088 0 9.239-2.991 9.239-8.053 0-5.062-3.151-7.996-9.239-7.996zM407.479 133.743v6.271h-28.038V99.746h27.291v6.271h-20.348v10.47h18.051v6.155h-18.051v11.102h21.095zM418.851 135.757l2.403-5.81c2.991 2.588 7.744 4.429 12.337 4.429 5.821 0 8.278-2.243 8.278-5.235 0-8.686-22.217-2.991-22.217-17.948 0-6.5 4.807-12.023 15.061-12.023 4.485 0 9.186 1.266 12.443 3.567l-2.189 5.81c-3.365-2.128-7.05-3.164-10.308-3.164-5.768 0-8.118 2.416-8.118 5.465 0 8.571 22.164 2.991 22.164 17.775 0 6.443-4.86 11.965-15.114 11.965-5.821.001-11.642-1.955-14.74-4.831zM469.958 106.074h-12.39v-6.328h31.723v6.328H476.9v33.94h-6.942v-33.94zM501.303 99.746h6.942v40.268h-6.942V99.746zM550.648 119.42h6.568v16.05c-3.898 3.394-9.346 5.12-14.633 5.12-11.589 0-20.134-8.687-20.134-20.709 0-12.023 8.545-20.709 20.24-20.709 6.249 0 11.482 2.244 15.007 6.558l-4.379 4.602c-2.938-3.164-6.302-4.602-10.308-4.602-7.957 0-13.564 5.81-13.564 14.151 0 8.168 5.607 14.151 13.512 14.151 2.67 0 5.287-.576 7.69-2.071V119.42zM601.165 133.743v6.271h-28.038V99.746h27.291v6.271H580.07v10.47h18.051v6.155H580.07v11.102h21.095z'></path>

                <path d='M288.071 157.566h17.439c13.977 0 23.42 9.344 23.42 22.398s-9.443 22.398-23.42 22.398h-17.439v-44.796zm17.189 41.854c12.464 0 20.461-8.064 20.461-19.455 0-11.389-7.996-19.453-20.461-19.453h-13.977v38.908h13.977zM385.769 199.42v2.943H355.36v-44.796h29.465v2.945h-26.253v17.663h23.482v2.878h-23.482v18.367h27.197zM408.297 196.604l1.447-2.433c3.021 3.2 8.625 5.631 14.544 5.631 8.814 0 12.717-3.903 12.717-8.766 0-13.439-27.511-5.376-27.511-21.886 0-6.336 4.785-11.904 15.612-11.904 4.849 0 9.884 1.537 13.284 4.033l-1.196 2.623c-3.651-2.56-8.121-3.776-12.088-3.776-8.561 0-12.402 4.033-12.402 8.959 0 13.439 27.511 5.503 27.511 21.758 0 6.336-4.973 11.839-15.864 11.839-6.549.001-12.844-2.495-16.054-6.078zM466.394 157.566h3.212v44.796h-3.212v-44.796zM531.733 180.157h3.086v16.767c-3.967 3.838-9.695 5.759-15.738 5.759-13.284 0-23.043-9.664-23.043-22.718s9.759-22.718 23.105-22.718c6.359 0 11.961 2.048 15.864 6.143l-2.014 2.177c-3.841-3.84-8.437-5.313-13.789-5.313-11.457 0-19.956 8.448-19.956 19.71 0 11.199 8.499 19.71 19.956 19.71 4.66 0 8.94-1.153 12.528-4.096v-15.421zM600.094 157.566v44.796h-2.645l-30.03-38.908v38.908h-3.212v-44.796h2.709l29.966 38.908v-38.908h3.212z'></path>
              </svg>
            </a>

            {/* Dropdown menu */}

            {/* <select
              id='services-dropdown'
              name='services-dropdown'
              placeholder='Services '
              className=' hidden md:block  focus:ring-pr1 rounded-md text-sm focus:border-pr1 overflow-scroll  bg-black  hover:text-pr1 mx-3 '
            >
              {services?.map((serv, index) => (
                <>
                  <option
                    key={index}
                    //selected
                    //value={serv?.id}
                    //placeholder={serv?.title}
                    className='text-sm hover:bg-pr1 aria-selected:bg-pr1 text-white hover:text-pr1 '
                    href={`/service${serv?.id}`}
                  >
                    {serv?.title}
                  </option>
                </>
              ))}
            </select> */}

            {/* Navigation bar */}
            <div className='lg:flex lg:items-center z-50  lg:justify-between lg:px-7 max-w-[1200px] mx-auto lg:flex-row max-sm:h-full'>
              <div>
                <HiOutlineMenu
                  className={`${
                    open
                      ? 'block p-0 h-9 w-9 my-3 text-pr1   '
                      : ' lg:hidden flex flex-col m-1 items-end text-left   h-6 w-6 cursor-pointer'
                  }`}
                  onClick={() => setOpen(!open)}
                />
              </div>
              <nav
                className={`${
                  open
                    ? 'block pl-0 pr-10 text-left z-50   items-center w-screen bg-pr2 mx-auto h-[100vh]   '
                    : 'hidden'
                } lg:flex lg:items-center lg:w-full z-50  lg:mx-auto lg:text-center  lg:justify-center lg:flex-row text-left `}
              >
                <ul className='lg:flex lg:justify-between max-sm:w-full lg:space-x-5 text-md text-white max-sm:max-h-screen   '>
                  <li>
                    <a
                      className='px-0 mx-1 py-2   hover:border-b-pr1 block max-md:border-b-2 transition hover:text-pr1/75'
                      href='/'
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className='px-0 mx-1 py-2   hover:border-b-pr1 block max-md:border-b-2 transition hover:text-pr1/75'
                      href='/about'
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      className=' px-0 mx-1 py-2   hover:border-b-pr1 block max-md:border-b-2 transition hover:text-pr1/75'
                      href='/team'
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      className=' px-0 mx-1 py-2   hover:border-b-pr1 block max-md:border-b-2 transition hover:text-pr1/75'
                      href='/works'
                    >
                      Works
                    </a>
                  </li>

                  <li>
                    <Menu
                      as='div'
                      className='relative  text-left max-md:border-b-2'
                    >
                      <div>
                        <Menu.Button className=' inline-flex  justify-center gap-x-1.5 px-0 lg:px-2  mx-1 py-2 text-md     text-white border-none hover:text-pr1 '>
                          <p className='hover:text-pr1'>Services</p>
                          <HiOutlineChevronDown
                            className='-mr-1 h-5 w-5 my-[3px] hover:text-pr1 text-gray-400'
                            aria-hidden='true'
                          />
                        </Menu.Button>
                      </div>

                      <Menu.Items className='overflow-hidden max-h-[320px] border-0 focus:outline-none  overflow-y-auto scroll-v absolute max-sm:relative max-sm:shadow-none max-sm:ring-0 left-0 z-10 mt-2 w-56 origin-top-right   shadow-xl ring-0 rounded-md  bg-pr2 ring-opacity-0  '>
                        <Menu.Item>
                          <ul>
                            {services?.map((item, index) => {
                              return (
                                <li key={index}>
                                  <a
                                    selected
                                    value={item?.id}
                                    href={`/service${item?.id}`}
                                    className={
                                      ' hover:bg-pr1 overflow-hidden hover:text-black block px-3 pt-1 my-1 text-sm'
                                    }
                                  >
                                    {item?.title}

                                    <hr className='mt-1  text-pr1' />
                                  </a>
                                </li>
                              )
                            })}
                          </ul>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </li>
                  <li>
                    <a
                      className=' px-0 mx-1 py-2   hover:border-b-pr1 block max-md:border-b-2 transition hover:text-pr1/75'
                      href='/blog'
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className=' px-0 mx-1 py-2   hover:border-b-pr1 block max-md:border-b-2 transition hover:text-pr1/75'
                      href='/contact'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
