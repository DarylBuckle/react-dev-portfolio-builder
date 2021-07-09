import React from 'react'

interface Props {
  noBackground?: boolean | undefined
  navSize?: number | undefined
}

export const NavComponent = (props: Props) => {
  console.log(props)
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-secondary fixed-top'>
      <div className='container'>
        <a id='app-home-logo' className='navbar-brand' href='#'>
          <img
            style={{ maxWidth: '130px' }}
            src='https://darylbuckle.dev/assets/images/logo.png'
            alt='My Portfolio'
          />
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
            <li className='nav-item mr-lg-3'>
              <a className='nav-link active' href='#Projects'>
                Projects
              </a>
            </li>
            <a
              className='bg-header-button text-header-button-text btn rounded-pill px-4 ml-lg-4'
              target='_blank'
              href='mailto:{{profile.mailto}}'
              rel='noreferrer'
            >
              Contact me
            </a>
          </ul>
        </div>
      </div>
    </nav>
  )
}
