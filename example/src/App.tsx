import React from 'react'

import { PortfolioPage } from 'react-dev-portfolio'
import 'react-dev-portfolio/dist/index.css'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  return <PortfolioPage page={{
    user: {
      id: '123',
      name: 'DarylBuckle',
      firstname: 'Daryl',
      lastname: 'Buckle',
      headline: 'Full Stack Developer',
      title: 'CTO at Halo Service Solutions',
      imageUrl: 'https://darylbuckle.dev/assets/images/profile.png',
      email: 'daryl.buckle@outlook.com'
    },
    coverUrl: 'https://darylbuckle.dev/assets/images/background.jpg',
    logoUrl: 'https://darylbuckle.dev/assets/images/logo.png',
    textColour: '#ffa500',
    bgColour: '#2c3e50',
    sections: [
      {
        identifier: 'Projects',
        title: 'Projects',
        subTitle: 'These are my own public and private projects.\r\n\r\nSelect a Project for more information.',
      },
      {
        identifier: 'Experience',
        title: 'Experience',
        subTitle: 'My professional experience.',
        bgColour: '#f6f6f6'
      }
    ]
  }}/>
}

export default App
