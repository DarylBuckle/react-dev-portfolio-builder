import React, { useEffect, useState } from 'react'
import { Section } from '../Classes/page'
import { idealTextColor } from '../Functions/CommonFunctions'

interface Props {
  backgroundColor?: string
  textColour?: string
  title?: string
  logoUrl?: string
  noBackground?: boolean | undefined
  navSize?: number | undefined
  mailto?: string
  links: Section[]
}

export const NavComponent = (props: Props) => {
  const [hideBackground, setHideBackground] = useState(getScrollOffset() < 1)
  const [showScrollToTop, setShowScrollToTop] = useState(
    getScrollOffset() > 300
  )

  function getScrollOffset() {
    const y =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    return y
  }

  function scrollToTop() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    const onScroll = () => {
      const scrollOffset = getScrollOffset()
      if (scrollOffset < 1) {
        setHideBackground(true)
      } else {
        setHideBackground(false)
      }

      if (scrollOffset > 300) {
        setShowScrollToTop(true)
      } else {
        setShowScrollToTop(false)
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  let headerClasses = 'navbar navbar-expand-lg navbar-dark fixed-top'
  let scrollToTopClass = 'btn btn-lg to-top'
  let contactClass = 'btn rounded-pill px-4 ml-lg-4'
  if (!props.backgroundColor) {
    headerClasses += ' bg-secondary'
    scrollToTopClass += ' btn-primary'
    contactClass += ' btn-primary'
  }
  if (!props.textColour) {
    headerClasses += ' text-white'
    scrollToTopClass += ' text-white'
    contactClass += ' text-white'
  }
  if (hideBackground) {
    headerClasses += ' nobackground'
  }

  if (showScrollToTop) {
    scrollToTopClass += ' shown'
  }

  return (
    <nav
      className={headerClasses}
      style={{
        backgroundColor: props.backgroundColor,
        color: props.textColour
      }}
    >
      <div className='container'>
        <a id='app-home-logo' className='navbar-brand' href='#'>
          {props.logoUrl ? (
            <img
              style={{ maxWidth: '130px' }}
              src={props.logoUrl}
              alt={props.title}
            />
          ) : (
            props.title
          )}
        </a>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul
            className='navbar-nav ml-auto mr-lg-5'
            data-toggle='collapse'
            data-target='.navbar-collapse.show'
          >
            {props.links &&
              props.links.map((s, i) => (
                <li key={'portfolio-link-' + i} className='nav-item mr-lg-3'>
                  <a className='nav-link (not)active' href={'#' + s.identifier}>
                    {s.title}
                  </a>
                </li>
              ))}
            {props.mailto ? (
              <a
                className={contactClass}
                target='_blank'
                href={`mailto:${props.mailto}`}
                rel='noreferrer'
                style={{
                  backgroundColor: props.textColour,
                  color: idealTextColor(props.textColour)
                }}
              >
                Contact
              </a>
            ) : null}
          </ul>
        </div>
      </div>
      <button
        className={scrollToTopClass}
        role='button'
        title='Scroll to top'
        onClick={() => scrollToTop()}
        style={{
          backgroundColor: props.textColour,
          color: idealTextColor(props.textColour)
        }}
      >
        /\
      </button>
    </nav>
  )
}
