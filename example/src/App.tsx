import React from 'react'

import { PortfolioPage } from 'react-dev-portfolio-builder'
import 'react-dev-portfolio-builder/dist/index.css'
import 'bootstrap/dist/css/bootstrap.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faAngular } from '@fortawesome/free-brands-svg-icons'

const App = () => {
  return (
    <div className='my-page'>
      <PortfolioPage page={{
        coverUrl: require('./cover.jpg'),
        textColour: '#F44E3B',
        bgColour: '#D33115',
        sections: [
          {
            identifier: 'Projects',
            title: 'Projects',
            subTitleHTML: '<div><p class="section-header-desc" style="color: rgb(221, 221, 221)">These are my own public and private projects.</p><p class="section-header-desc noprint" style="color: rgb(221, 221, 221)">Select a Project for more information.</p></div>',
            systemUse: 'projects',
            bgColour: '#2c3e50',
            textColour: 'white',
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
            bgColour: '#2c3e50',
            textColour: 'white',
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
            bgColour: '#2c3e50',
            textColour: 'white',
            content: (
              <div>
                <p>Hi, I'm Gary. As you might of guessed, I am not real.</p>
                <p>If I was real, I'd probably write a bit about my experiences as a Developer and about how I love Football, but alas, I am not.</p>
                <p>This page serves as a way of showing an example of what react-dev-portfolio-builder looks like and what it can do. It's extremely easy to customise!</p>
                <p>For more information please visit the Github repository at <a href='https://github.com/DarylBuckle/react-dev-portfolio-builder'>https://github.com/DarylBuckle/react-dev-portfolio-builder</a>.</p>
              </div>
            )
          },
          {
            identifier: 'About2',
            linkedIdentifier: 'About',
            title: '',
            bgColour: 'white',
            textColour: 'red',
            containerClassName: 'noprint',
            content: (
              <div>
                This is a second part of the About section.
              </div>
            )
          }
        ],
        externalLinks: [
          {
            title: 'Git',
            url: 'https://github.com/DarylBuckle/react-dev-portfolio-builder'
          },
        ],
        footerEnd: (
          <p className='text-white small mt-5 mb-0'>
            Copyright © Gary Smith 2021
          </p>
        )
      }} 
      user={{
        id: 1,
        name: 'Gary Smith',
        firstname: 'Gary',
        lastname: 'Smith',
        imageUrl: 'https://darylbuckle.dev/angular-dev-portfolio/assets/images/profile.png',
        headline: 'Web Developer',
        title: 'Web Software Developer at ABC Solutions',
        location: 'Anytown, Your County, United Kingdom',
        email: 'gary.smith@yourdomain.com',
        projects: [
          {
            name: 'My Website',
            owner: 'Gary Smith',
            icon: ['fab' , 'angular'],
            url: 'https://darylbuckle.github.io/angular-dev-portfolio',
            thumbnail: 'https://darylbuckle.github.io/angular-dev-portfolio/assets/images/my-website-thumb.png',
            images: ['https://darylbuckle.github.io/angular-dev-portfolio/assets/images/my-website-1.png', 'https://darylbuckle.github.io/angular-dev-portfolio/assets/images/my-website-2.png'],
            private: false,
            startdate: new Date(2020, 6, 1),
            current: true,
            skills: [
              { name: 'React', group: 'Front End' },
              { name: 'Bootstrap', group: 'Front End' },
              { name: 'GitHub Pages', group: 'Hosting' }
            ],
            info: '<p>This is my porfolio page. You are looking at it right now.</p>' +
            '<p>The page was created from <a href=\'https://www.github.com/DarylBuckle/react-dev-portfolio-builder\'>react-dev-portfolio-builder</a>.</p>'
          },
          {
            name: 'angular-tour-of-heroes',
            owner: 'Gary Smith',
            icon: <FontAwesomeIcon icon={faAngular} size='8x' />,
            private: false,
            enddate: new Date(2020, 5, 1),
            skills: [
              { name: 'Angular', group: 'Skills' },
              { name: 'Front End Development', group: 'Skills' },
            ],
            info: '<p>This was a tutorial I did to learn Angular.</p>' +
            '<p>For more info visit <a href=\'https://angular.io/tutorial\'>https://angular.io/tutorial</a>.</p>'
          },
        ],
        roles: [
          {
            title: 'Web Software Developer',
            company: 'ABC Solutions',
            location: 'Anytown, Your County, United Kingdom',
            url: '',
            startdate: new Date(2018, 2, 1),
            current: true,
            positions: [
              {
                title: 'Web Software Developer',
                company: 'Halo Service Solutions',
                startdate: new Date(2019, 8, 1),
                current: true
              },
              {
                title: 'Junior Developer',
                company: 'Halo Service Solutions',
                startdate: new Date(2018, 2, 1),
                enddate: new Date(2019, 8, 1),
                current: false
              },
            ],
            info: '<p>I was employed as a Junior Developer and am now a Web Software Developer. I have worked on building several websites for a range of customers throughout my time at ABC.</p>' +
            'Role duties;' +
              '<ul>' +
                '<li>Helping with web design</li>' +
                '<li>Liasing with customers</li>' +
                '<li>Creating websites to customer specification</li>' +
                '<li>Training junior developers</li>' +
              '</ul>',
            projects: [
              {
                name: 'Project 1',
                owner: 'ABC Solutions',
                role: 'ABC Solutions',
                private: true,
                startdate: new Date(2019, 6, 1),
                enddate: new Date(2019, 8, 1),
                current: false,
                skills: [
                  { name: 'HTML', group: 'Front End' },
                  { name: 'CSS', group: 'Front End' },
                  { name: 'Javascript', group: 'Front End' },
                  { name: 'Wordpress', group: 'Front End' },
                  { name: 'PHP', group: 'Back End' },
                ],
                info: '<p>This is an example of a project.</p>' +
                '<p>Details about this project will show here.</p>' +
                '<p>You can also show multiple images of the project above.</p>'
              },
              {
                name: 'Project 2',
                owner: 'ABC Solutions',
                role: 'ABC Solutions',
                private: true,
                startdate: new Date(2019, 6, 1),
                enddate: new Date(2019, 8, 1),
                current: false,
                skills: [
                  { name: 'HTML', group: 'Front End' },
                  { name: 'CSS', group: 'Front End' },
                  { name: 'Javascript', group: 'Front End' },
                  { name: 'Wordpress', group: 'Front End' },
                  { name: 'PHP', group: 'Back End' },
                ],
                info: '<p>This is an example of a project.</p>' +
                '<p>Details about this project will show here.</p>' +
                '<p>You can also show multiple images of the project above.</p>'
              }
            ]
          },
          {
            title: 'Service Desk Engineer',
            company: 'XYZ Ltd',
            location: 'Anytown, Your County, United Kingdom',
            url: '',
            startdate: new Date(2016, 7, 1),
            enddate: new Date(2018, 2, 1),
            current: false,
            info: '<p>My first full time job after graduating from university. This role gave me my first professional experiences working in Software.</p>'
          },
          {
            title: 'Intern Software Developer',
            company: 'CBA Software',
            location: 'Anytown, Your County, United Kingdom',
            url: '',
            startdate: new Date(2015, 5, 1),
            enddate: new Date(2015, 7, 1),
            current: false,
            info: '<p>I interned at CBA Software whilst at University.</p>'
          }
        ],
        qualifications: [
          {
            name: 'Bachelor of Science in Computer Science',
            location: 'Your University',
            grade: 'First Class Honours',
            startdate: new Date (2013, 8, 1),
            enddate: new Date (2016, 7, 1),
            current: false,
            icon: <FontAwesomeIcon icon={faGraduationCap} size='6x' />,
            info: '<p>You can enter more information about your qualifcation here.</p>'
          },
          {
            name: 'Example Qualification',
            location: 'ABC Solutions',
            enddate: new Date (2019, 11, 1),
            image: 'https://www.microsoft.com/en-us/CMSImages/lrn_mcc-MTA-Certification2x.png?version=6303ba51-6df0-6c10-fedd-3d21cd6672f4',
            info: '<p>You can enter more information about your qualifcation here.</p>'
          },
          {
            name: 'A Levels',
            location: 'Anytown High School',
            grade: '4 x A-C grades',
            startdate: new Date (2011, 8, 1),
            enddate: new Date (2013, 7, 1),
            icon: <FontAwesomeIcon icon={faBookOpen} size='6x' />,
            info: '<p>You can enter more information about your qualifcation here.</p>'
          },
          {
            name: 'GCSEs',
            location: 'Anytown High School',
            grade: '10 x A-C grades',
            startdate: new Date (2009, 8, 1),
            enddate: new Date (2011, 7, 1),
            icon: <FontAwesomeIcon icon={faBookOpen} size='6x' />,
            info: '<p>You can enter more information about your qualifcation here.</p>'
          },
        ],
        skills: [
          { name: 'Web Design', group: 'Key Skills', level: 90 },
          { name: 'Problem Solving', group: 'Key Skills', level: 90 },
          { name: 'Team Work', group: 'Key Skills', level: 80 },
          { name: 'React', group: 'Technologies', level: 60 },
          { name: 'Angular', group: 'Technologies', level: 60 },
          { name: 'JQuery', group: 'Technologies', level: 80 },
          { name: 'PHP', group: 'Technologies', level: 90 },
          { name: 'HTML', group: 'Technologies', level: 90 },
          { name: 'CSS', group: 'Technologies', level: 90 },
          { name: 'Javascript', group: 'Technologies', level: 90 },
          { name: 'Bootstrap', group: 'Technologies', level: 80 },
          { name: 'Wordpress', group: 'Technologies', level: 80 },
          { name: 'My SQL', group: 'Technologies', level: 70 },
          { name: 'Git', group: 'Technologies', level: 80 },
        ],
        linkedin: 'yourusernamegoeshere',
        facebook: 'yourusernamegoeshere',
        twitter: 'yourusernamegoeshere',
        instagram: 'yourusernamegoeshere',
        github: 'yourusernamegoeshere',
        stackoverflow: 'youruseridgoeshere',
        mailto: 'gary.smith@yourdomain.com',
      }} />
    </div>
  )
}

export default App
