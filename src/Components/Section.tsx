import React from 'react'

interface Props {
  backgroundColor?: string
  textColour?: string
  nextBackgroundColor?: string
  id?: string
  children?: any
  backgroundImageUrl?: string
  name?: string
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
  const year = new Date().getFullYear();

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
          <div className='col-lg-4 mb-5 mb-lg-0' />
          <div className='col-lg-4 mb-5 mb-lg-0'>
            {props.children}
            <ul className='list-inline mb-3' />
          </div>
          <div className='col-lg-4 mb-5 mb-lg-0'>
            <div className='footer-contact-info mb-3 mt-4'>
              This site is based on{' '}
              <a
                target='_blank'
                href='https://www.github.com/DarylBuckle/react-dev-portfolio'
                rel='noreferrer'
              >
                react-dev-portfolio
              </a>
              , a free to use, MIT licensed theme created by{' '}
              <a
                target='_blank'
                href='https://www.github.com/DarylBuckle'
                rel='noreferrer'
              >
                Daryl Buckle
              </a>
              .
            </div>
          </div>
        </div>
        <p className='text-white small mt-5 mb-0'>
          {`Copyright © ${props.name} ${year}`}
        </p>
      </div>
    </footer>
  )
}
