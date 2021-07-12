import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'

interface Props {
  image?: string
  images?: string[]
}

export const ImageGalleryComponent = ({ image, images }: Props) => {
  let iterations: number[] = []
  if (images) {
    iterations = Array(images.length)
      .fill(0)
      .map((_x, i) => i)
  }
  const imageMod = images && images.length > 0 ? images[0] : image

  return (
    <div className='container images mt-5 mb-4'>
      {images && images.length > 1 ? (
        <Fragment>
          <div
            id='img-gallary-carousel'
            className='carousel slide mb-5'
            data-ride='carousel'
          >
            <ol className='carousel-indicators'>
              {iterations.map((_img, i) => (
                <li
                  key={'imageGalleryO-' + i}
                  data-target='#img-gallary-carousel'
                  data-slide-to={i}
                  className={i === 0 ? 'active' : ''}
                />
              ))}
            </ol>
            <div className='carousel-inner'>
              {iterations.map((_img, i) => (
                <div
                  key={'imageGallery-' + i}
                  data-target='#img-gallary-carousel'
                  data-slide-to={i}
                  className={`carousel-item ${i === 0 ? 'active' : ''}`}
                >
                  <a href={images[i]} target='_blank' rel='noreferrer'>
                    <img
                      className='d-block'
                      src={images[i]}
                      alt={`Image ${i + 1}`}
                    />
                  </a>
                </div>
              ))}
            </div>
            <a
              className='carousel-control-prev'
              href='#img-gallary-carousel'
              role='button'
              data-slide='prev'
            >
              <FontAwesomeIcon icon={faChevronLeft} size='2x' />
              <span className='sr-only'>Previous</span>
            </a>
            <a
              className='carousel-control-next'
              href='#img-gallary-carousel'
              role='button'
              data-slide='next'
            >
              <FontAwesomeIcon icon={faChevronRight} size='2x' />
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </Fragment>
      ) : imageMod ? (
        <div
          id='img-gallary-carousel'
          className='carousel slide mb-5'
          data-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <a href={imageMod} target='_blank' rel='noreferrer'>
                <img className='d-block' src={imageMod} alt='Image 1' />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
