import React from 'react'

import { PortfolioPage } from 'react-dev-portfolio'
import 'react-dev-portfolio/dist/index.css'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  return <PortfolioPage textColour={'#ffa500'} bgColour={'#2c3e50'} profile={{
    firstname: 'Daryl',
    lastname: 'Buckle',
    title: 'Full Stack Developer',
    title2: 'CTO at Halo Service Solutions',
    imageUrl: 'https://darylbuckle.dev/assets/images/profile.png',
    coverUrl: 'https://darylbuckle.dev/assets/images/background.jpg'
  }}/>
}

export default App
