# react-dev-portfolio-builder

> A simple portfolio or cv page aimed at developers, built with React, Bootstrap and Font Awesome.

[![NPM](https://img.shields.io/npm/v/react-dev-portfolio-builder.svg)](https://www.npmjs.com/package/react-dev-portfolio-builder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[Example: https://darylbuckle.github.io/react-dev-portfolio-builder](https://darylbuckle.github.io/react-dev-portfolio-builder)

<img width="400" alt="react-dev-portfolio-builder-1" src="https://user-images.githubusercontent.com/15156674/89340514-c6af3b80-d697-11ea-92b2-b0dc7b91e5b6.png">

## Install

```bash
npm install --save react-dev-portfolio-builder
```

## Usage

```tsx
import React, { Component } from 'react'

import { PortfolioPage } from 'react-dev-portfolio-builder'
import 'react-dev-portfolio-builder/dist/index.css'
import 'bootstrap/dist/css/bootstrap.css'

class Example extends Component {
  render() {
    return (
      <PortfolioPage
        user={{
          firstname: 'Brian',
          lastname: 'Smith',
          headline: 'Web Developer',
          projects: [
            {
              name: 'My Website',
              owner: 'Brian Smith',
              startdate: new Date(2020, 6, 1),
              current: true,
              skills: [
                { name: 'React', group: 'Front End' },
                { name: 'Bootstrap', group: 'Front End' },
              ],
            },
          ],
          roles: [
            {
              title: 'Web Software Developer',
              company: 'ABC Solutions',
              location: 'Anytown, Your County, United Kingdom',
              startdate: new Date(2018, 2, 1),
              current: true,
            }
          ],
          qualifications: [
            {
              name: 'Bachelor of Science in Computer Science',
              location: 'Your University',
              grade: 'First Class Honours',
              startdate: new Date (2013, 8, 1),
              enddate: new Date (2016, 7, 1),
            },
          ],
          skills: [
            { name: 'React', group: 'Technologies', level: 60 },
            { name: 'Bootstrap', group: 'Technologies', level: 80 },
          ],
        }}
        page={{
          textColour: '#F44E3B',
          bgColour: 'grey',
          sections: [
            {
              identifier: 'Projects',
              title: 'Projects',
              subTitle: 'These are my own public and private projects.\r\n\r\nSelect a Project for more information.',
              systemUse: 'projects',
            },
            {
              identifier: 'Experience',
              title: 'Experience',
              subTitle: 'My professional experience.',
              bgColour: '#f6f6f6',
              systemUse: 'experience'
            },
            {
              identifier: 'Qualifications',
              title: 'Qualifications',
              subTitle: 'My academic qualifications.',
              systemUse: 'qualifications'
            },
            {
              identifier: 'Skills',
              title: 'Skills',
              subTitle: 'My key skills and technologies.\r\n\r\nClick on a technology to show projects that use it.',
              bgColour: '#f6f6f6',
              systemUse: 'skills'
            },
            {
              identifier: 'About',
              title: 'About',
              content: (
                <div>
                  <p>About me goes here.</p>
                </div>
              )
            },
          ],
        }} 
      />
    )
  }
}
```

## License

MIT © [DarylBuckle](https://github.com/DarylBuckle)
