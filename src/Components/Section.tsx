import React, { Fragment } from 'react'
// eslint-disable-next-line no-unused-vars
import { User } from '../Classes/user'
// eslint-disable-next-line no-unused-vars
import { Page } from '../Classes/page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
  faStackOverflow,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
interface Props {
  backgroundColor?: string
  textColour?: string
  nextBackgroundColor?: string
  id?: string
  children?: any
  backgroundImageUrl?: string
  user?: User
  page?: Page
}

export const HeaderSectionComponent = (props: Props) => {
  let headerClasses = 'page-header page-header-dark'
  if (!props.backgroundColor) {
    headerClasses += ' bg-secondary'
  }
  if (!props.textColour) {
    headerClasses += ' text-white'
  }
  let nextClasses = 'svg-border-rounded'
  if (!props.nextBackgroundColor) {
    nextClasses += ' text-white'
  }

  return (
    <header
      className={headerClasses}
      style={{
        backgroundColor: props.backgroundColor,
        color: props.textColour,
        backgroundImage: props.backgroundImageUrl
          ? `url('${props.backgroundImageUrl}')`
          : undefined
      }}
    >
      <div className='page-header-content pt-10 text-secondary-text'>
        <div className='container'>{props.children}</div>
      </div>
      <div
        className={nextClasses}
        style={{
          color: props.nextBackgroundColor
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 150 3'
          width='100%'
          height='30px'
          preserveAspectRatio='none'
          fill='currentColor'
        >
          <path d='M150,3H0V0H150ZM0,0S32,3,72,3,150,0,150,0' />
        </svg>
      </div>
    </header>
  )
}

export const SectionComponent = (props: Props) => {
  let nextClasses = 'svg-border-rounded'
  if (!props.nextBackgroundColor) {
    nextClasses += ' text-white'
  }

  return (
    <section
      className='group'
      style={{
        backgroundColor: props.backgroundColor,
        color: props.textColour,
        backgroundImage: props.backgroundImageUrl
          ? `url('${props.backgroundImageUrl}')`
          : undefined
      }}
      id={props.id + '-Container'}
    >
      {props.id && <div className='mark' id={props.id} />}
      <div>
        <div className='container'>{props.children}</div>
      </div>
      <div
        className={nextClasses}
        style={{
          color: props.nextBackgroundColor
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 150 3'
          width='100%'
          height='30px'
          preserveAspectRatio='none'
          fill='currentColor'
        >
          <path d='M150,3H0V0H150ZM0,0S32,3,72,3,150,0,150,0' />
        </svg>
      </div>
    </section>
  )
}

export const FooterComponent = (props: Props) => {
  let footerClasses = 'footer text-center'
  if (!props.backgroundColor) {
    footerClasses += ' bg-secondary'
  }
  if (!props.textColour) {
    footerClasses += ' text-white'
  }
  const { user, page } = props

  return (
    <footer
      className={footerClasses}
      style={{
        backgroundColor: props.backgroundColor,
        color: props.textColour,
        backgroundImage: props.backgroundImageUrl
          ? `url('${props.backgroundImageUrl}')`
          : undefined
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 mb-5 mb-lg-0'>
            {page?.footerLContent ? (
              page.footerLContent
            ) : (
              <Fragment>
                {user?.location && (
                  <div className='footer-contact-info mb-4 mt-4'>
                    <a
                      target='_blank'
                      href={`https://www.google.com/maps/place/${user.location}`}
                      rel='noreferrer'
                    >
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className='mr-2'
                        size='lg'
                      />
                      <br />
                      {user.location}
                    </a>
                  </div>
                )}
                {user?.mailto && (
                  <div className='footer-contact-info mb-4 mt-4'>
                    <a
                      target='_blank'
                      href={`mailto:${user.mailto}`}
                      rel='noreferrer'
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className='mr-2'
                        size='lg'
                      />
                      <br />
                      {user.mailto}
                    </a>
                  </div>
                )}
              </Fragment>
            )}
          </div>
          <div className='col-lg-4 mb-5 mt-3 mb-lg-0'>
            {page?.footerCContent}
            {user && (
              <ul className='list-inline my-3'>
                {user.facebook && (
                  <li className='list-inline-item mb-3'>
                    <a
                      title='Facebook'
                      className='media-bubble rounded-circle text-footer mr-3'
                      target='_blank'
                      href={`https://www.facebook.com/${user.facebook}`}
                      rel='noreferrer'
                    >
                      <FontAwesomeIcon icon={faFacebookF} size='1x' />
                    </a>
                  </li>
                )}
                {user.twitter && (
                  <li className='list-inline-item mb-3'>
                    <a
                      title='Twitter'
                      className='media-bubble rounded-circle text-footer mr-3'
                      target='_blank'
                      href={`https://www.twitter.com/${user.twitter}`}
                      rel='noreferrer'
                    >
                      <FontAwesomeIcon icon={faTwitter} size='1x' />
                    </a>
                  </li>
                )}
                {user.linkedin && (
                  <li className='list-inline-item mb-3'>
                    <a
                      title='LinkedIn'
                      className='media-bubble rounded-circle text-footer mr-3'
                      target='_blank'
                      href={`https://www.linkedin.com/in/${user.linkedin}`}
                      rel='noreferrer'
                    >
                      <FontAwesomeIcon icon={faLinkedin} size='1x' />
                    </a>
                  </li>
                )}
                {user.instagram && (
                  <li className='list-inline-item mb-3'>
                    <a
                      title='Instagram'
                      className='media-bubble rounded-circle text-footer mr-3'
                      target='_blank'
                      href={`https://www.instagram.com/${user.instagram}`}
                      rel='noreferrer'
                    >
                      <FontAwesomeIcon icon={faInstagram} size='1x' />
                    </a>
                  </li>
                )}
                {user.github && (
                  <li className='list-inline-item mb-3'>
                    <a
                      title='Github'
                      className='media-bubble rounded-circle text-footer mr-3'
                      target='_blank'
                      href={`https://www.github.com/${user.github}`}
                      rel='noreferrer'
                    >
                      <FontAwesomeIcon icon={faGithub} size='1x' />
                    </a>
                  </li>
                )}
                {user.stackoverflow && (
                  <li className='list-inline-item mb-3'>
                    <a
                      title='Stack Overflow'
                      className='media-bubble rounded-circle text-footer mr-3'
                      target='_blank'
                      href={`https://www.stackoverflow.com/users/${user.stackoverflow}`}
                      rel='noreferrer'
                    >
                      <FontAwesomeIcon icon={faStackOverflow} size='1x' />
                    </a>
                  </li>
                )}
              </ul>
            )}
          </div>
          <div className='col-lg-4 mb-5 mb-lg-0'>
            {page?.footerRContent ? (
              page.footerRContent
            ) : (
              <div className='footer-contact-info mb-3 mt-4'>
                This site was created with{' '}
                <a
                  target='_blank'
                  href='https://www.github.com/DarylBuckle/react-dev-portfolio-builder'
                  rel='noreferrer'
                >
                  react-dev-portfolio-builder
                </a>
                , a free to use, MIT licensed component created by{' '}
                <a
                  target='_blank'
                  href='https://www.github.com/DarylBuckle'
                  rel='noreferrer'
                >
                  Daryl Buckle
                </a>
                .
              </div>
            )}
          </div>
        </div>
        {page?.footerEnd}
      </div>
    </footer>
  )
}
