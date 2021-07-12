import React, { Fragment, useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { Link, Section } from '../Classes/page'
import { idealTextColor } from '../Functions/CommonFunctions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

interface Props {
  backgroundColor?: string
  textColour?: string
  title?: string
  logoUrl?: string
  noBackground?: boolean | undefined
  navSize?: number | undefined
  mailto?: string
  links: Section[]
  externalLinks?: Link[]
}

export const NavComponent = (props: Props) => {
  const [hideBackground, setHideBackground] = useState(getScrollOffset() < 1)
  const [showScrollToTop, setShowScrollToTop] = useState(
    getScrollOffset() > 300
  )
  const [activeLink, setActiveLink] = useState(getActiveLink())

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
    setActiveLink('')
  }

  function getActiveLink() {
    let elementInView = ''
    if (props.links) {
      for (const navLink of props.links) {
        if (navLink.identifier) {
          if (
            isElementInViewport(
              document.getElementById(navLink.identifier + '-Container')
            )
          ) {
            if (navLink.linkedIdentifier) {
              elementInView = navLink.linkedIdentifier
            } else {
              elementInView = navLink.identifier
            }
          }
        }
      }
    }
    return elementInView
  }

  function isElementInViewport(el: HTMLElement | null) {
    if (!el) {
      return false
    }

    const rect = el.getBoundingClientRect()
    return (
      rect.top + window.outerHeight * 0.35 <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom + window.outerHeight * 0.35 >=
        (window.innerHeight || document.documentElement.clientHeight)
    )
  }

  useEffect(() => {
    const onScroll = () => {
      const scrollOffset = getScrollOffset()

      const newHideBackground = scrollOffset < 1
      if (newHideBackground !== hideBackground) {
        setHideBackground(newHideBackground)
      }

      const newShowScrollToTop = scrollOffset > 300
      if (newShowScrollToTop !== showScrollToTop) {
        setShowScrollToTop(newShowScrollToTop)
      }

      const newActiveLink = getActiveLink()
      if (newActiveLink !== activeLink) {
        setActiveLink(newActiveLink)
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [activeLink, showScrollToTop, hideBackground])

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
        <a
          id='app-home-logo'
          className='navbar-brand'
          href='#'
          style={{ color: idealTextColor(props.textColour) }}
        >
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
              props.links.map(
                (s, i) =>
                  !s.linkedIdentifier && (
                    <li
                      key={'portfolio-link-' + i}
                      className='nav-item mr-lg-3'
                    >
                      <a
                        className={
                          activeLink && s.identifier === activeLink
                            ? 'nav-link active'
                            : 'nav-link'
                        }
                        href={'#' + s.identifier}
                      >
                        {s.title}
                      </a>
                    </li>
                  )
              )}
            {props.externalLinks && props.externalLinks.length > 0 && (
              <Fragment>
                <div className='nav-seperator' />
                {props.externalLinks.map((s, i) => (
                  <li key={'portfolio-link-' + i} className='nav-item mr-lg-3'>
                    <a className='nav-link' href={s.url}>
                      {s.title}
                    </a>
                  </li>
                ))}
              </Fragment>
            )}
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
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </nav>
  )
}
