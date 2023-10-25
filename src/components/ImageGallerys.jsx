import ImageItems from './ImageItems'
import ImageGallery from 'react-image-grid-gallery'
import image1 from '../assets/img/mocks.jpg'

const imagesArray = [
  {
    alt: 'Image1 alt text',
    caption: 'Image1  Description',
    src: {image1}
  },
  {
    alt: 'Image2 alt text',
    caption: 'Image2  description',
    src: '../assets/img/service3.jpg'
  },
  {
    alt: 'Image1 alt text',
    caption: 'Image1  description',
    src: '../assets/img/porto.jpg'
  },
  {
    alt: 'Image2 alt text',
    caption: 'Image2  description',
    src: '../assets/img/porto.jpg'
  },
  {
    alt: 'Image3 alt text',
    caption: 'Image3  description',
    src: '../assets/img/porto.jpg'
  }
]

export default function ImageGallerys () {
  return (
    <>
      <section className='container-fluid black_more'>
        <div className=''>
          <ImageGallery
            className='min-h-[900px] grid gap-3'
            imgArray={imagesArray}
            columnWidth={400}
            gapSize={24}
            style={{ width: '100%' }}
          />
        </div>
      </section>
    </>
  )
}

//  <div className='grid gap-3 '>
//   <div className=' relative'>
//     <img
//       className='h-auto max-w-full relative  '
//       src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
//       alt=''
//     />

//     <div className='absolute inset-0 flex flex-col items-start justify-end p-3'>
//       <h3 className='text-lg font-medium text-black '>Skinny Jeans Blue</h3>
//       <a
//         href='/'
//         className='mt-1.5 inline-block bg-black px-3 py-2 text-xs font-medium uppercase tracking-wide text-white'
//       >
//         Shop Now
//       </a>
//     </div>
//   </div>
//   <div className=' relative'>
//     <img
//       className='h-auto max-w-full relative  '
//       src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
//       alt=''
//     />

//     <div className='absolute inset-0 flex flex-col items-start justify-end p-3'>
//       <h3 className='text-lg font-medium text-black '>Skinny Jeans Blue</h3>
//       <a
//         href='/'
//         className='mt-1.5 inline-block bg-black px-3 py-2 text-xs font-medium uppercase tracking-wide text-white'
//       >
//         Shop Now
//       </a>
//     </div>
//   </div>
// </div>
