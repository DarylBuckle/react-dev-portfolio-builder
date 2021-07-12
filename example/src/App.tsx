import React from 'react'

import { PortfolioPage } from 'react-dev-portfolio'
import 'react-dev-portfolio/dist/index.css'
import 'bootstrap/dist/css/bootstrap.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return <PortfolioPage page={{
    coverUrl: require('./cover.jpg'),
    textColour: '#F44E3B',
    bgColour: '#D33115',
    sections: [
      {
        identifier: 'Projects',
        title: 'Projects',
        subTitle: 'These are my own public and private projects.\r\n\r\nSelect a Project for more information.',
        systemuse: 1,
        bgColour: '#2c3e50',
        textColour: 'white',
      },
      {
        identifier: 'Experience',
        title: 'Experience',
        subTitle: 'My professional experience.',
        bgColour: '#f6f6f6',
        systemuse: 2
      },
      {
        identifier: 'Qualifications',
        title: 'Qualifications',
        subTitle: 'My academic qualifications.',
        bgColour: '#2c3e50',
        textColour: 'white',
        systemuse: 3
      },
      {
        identifier: 'Skills',
        title: 'Skills',
        subTitle: 'My key skills and technologies.\r\n\r\nClick on a technology to show projects that use it.',
        bgColour: '#f6f6f6',
        systemuse: 4
      },
      {
        identifier: 'About',
        title: 'About',
        bgColour: '#2c3e50',
        textColour: 'white',
        content: (
          <div>
            <div className="hero text-left mb-5 text-white">
                <h1 className="display-4 ">Coding</h1>
                <p className="lead">Coding isn't just a job, it's a passion.</p>
                <p>I taught myself how to code whilst working in transport, and this then lead to a career as a Software Engineer.</p>
                <p>I am the CTO and head of engineering at Halo Service Solutions. At Halo, I have been able to take this passion 
                    and thrive creating business software used by hundreds of thousands of people all around the world.</p>
                <p>React, .NET Core and MS SQL are my top skills. I also dabble into a bit of React Native and AWS every so often.</p>
                <p>Outside of work I continue creating applications for fun. You can take a look at some of these on my portfolio page.</p>
            </div>
            <br/>
            <div className="text-center">
                <a className="btn btn-lg" style={{ backgroundColor: '#2c3e50', color: '#ffa500' }} href="#Projects" role="button">See my work</a>
            </div>
            <br/>
            <div className="hero text-right mb-5 mt-5 text-white">
                <h1 className="display-4 ">Design</h1>
                <p className="lead">There's nothing better than seeing designs come to life.</p>
                <p>I love designing apps and building them. Whilst I enjoy all aspects of Full Stack Software engineering, the highlight is undoubtedly design.
                    Whether that's coming up with the architecture, deciding how features work, or user interface design.
                </p>
                <p>I designed and created the HaloITSM, HaloPSA and Halo Service Desk web solutions. That includes the underlying architecture, ui design and application foundations.</p>
            </div>

          </div>
        )
      },
      {
        identifier: 'About2',
        linkedIdentifier: 'About',
        title: '',
        bgColour: 'white',
        textColour: 'red',
        content: (
          <div>
            About part 2. More info will show here.
          </div>
        )
      }
    ],
    externalLinks: [
      {
        title: 'Blog',
        url: 'https://darylbuckle.dev/blog'
      }
    ]
  }} user={{
    id: 1,
    name: 'Gary Smith',
    firstname: 'Gary',
    lastname: 'Smith',
    headline: 'Full Stack Developer',
    title: 'Developer at ABC Ltd',
    imageUrl: 'https://darylbuckle.dev/assets/images/profile.png',
    location: 'Suffolk, United Kingdom',
    email: 'daryl.buckle@outlook.com',
    mailto: 'daryl.buckle@outlook.com',
    projects: [
      {
        name: 'angular-dev-portfolio',
        owner: 'Daryl Buckle',
        url: 'https://github.com/DarylBuckle/angular-dev-portfolio',
        thumbnail: 'https://darylbuckle.dev/assets/images/projects/angular-dev-portfolio-thumb.png',
        images: ['https://darylbuckle.dev/assets/images/projects/angular-dev-portfolio-1.png', 'https://darylbuckle.dev/assets/images/projects/angular-dev-portfolio-2.png'],
        private: false,
        startdate: new Date(2020, 6, 1),
        enddate: new Date(2020, 7, 1),
        skills: [
          { name: 'Angular', group: 'Front End' },
          { name: 'Typescript', group: 'Front End' },
          { name: 'HTML', group: 'Front End' },
          { name: 'SCSS', group: 'Front End' },
          { name: 'Bootstrap', group: 'Front End' },
          { name: 'GitHub Pages', group: 'Hosting' }
        ],
        info: '<p>angular-dev-portfolio is a template portfolio or cv page aimed at developers, built with Angular (v9.1.9), Bootstrap and Font Awesome.</p>' +
        '<p>The page you are looking at now is built using this template.</p>' +
        '<p>I made it initially as a way of learning Angular. The idea is all the data is structured in objects and the data resides inside a single file, "data.ts", so it is very easy to fork the repository and in a matter of minutes put your own data into the template. It uses Bootstrap so the theme can easily be changed in SCSS. The site has no back-end and is hosted on GitHub pages.</p>'
      },
      {
        name: 'DnD Character Sheets',
        owner: 'Daryl Buckle',
        url: 'https://darylbuckle.dev/dnd-character-sheets',
        thumbnail: 'https://darylbuckle.dev/assets/images/projects/dnd-character-sheets-thumb.png',
        images: ['https://darylbuckle.dev/assets/images/projects/dnd-character-sheets-1.png', 'https://darylbuckle.dev/assets/images/projects/dnd-character-sheets-2.png', 'https://darylbuckle.dev/assets/images/projects/dnd-character-sheets-3.png'],
        private: false,
        enddate: new Date(2020, 8, 1),
        skills: [
          { name: 'React', group: 'Skills' },
          { name: 'Typescript', group: 'Skills' },
          { name: 'CSS', group: 'Skills' },
          { name: 'HTML', group: 'Skills' },
          { name: 'Npm', group: 'Skills' },
          { name: 'GitHub Pages', group: 'Skills' }
        ],
        info: '<p>dnd-character-sheets is a library of react components for rendering different elements of Dungeons and Dragons 5th Edition character sheets.</p>' +
        '<p>The example app hosted on GitHub pages allows you to populate attributes of your Dungeons and Dungeons character, namely stats, profile and spell sheets and print them.</p>' +
        '<p>Dungeons and Dragons players would normally have a copy of these sheets which they fill in pencil when they play. ' +
        'This tool allows them to fill out their character details on a web version of the same sheets and update and print them when needed. ' +
        'The sheets are styled to look like the familiar official paper sheets.</p>' +
        '<p>The components are available on npm.</p>'
      },
      {
        name: 'EsperGen Character Sheets',
        owner: 'Daryl Buckle',
        url: 'https://darylbuckle.dev/espergen-character-sheets',
        thumbnail: 'https://darylbuckle.dev/assets/images/projects/espergen-character-sheets-thumb.png',
        images: ['https://darylbuckle.dev/assets/images/projects/espergen-character-sheets-1.png', 'https://darylbuckle.dev/assets/images/projects/espergen-character-sheets-2.png'],
        private: false,
        enddate: new Date(2020, 8, 1),
        skills: [
          { name: 'React', group: 'Skills' },
          { name: 'Typescript', group: 'Skills' },
          { name: 'CSS', group: 'Skills' },
          { name: 'HTML', group: 'Skills' },
          { name: 'Npm', group: 'Skills' },
          { name: 'GitHub Pages', group: 'Skills' }
        ],
        info: '<p>espergen-character-sheets is a library of react components for rendering different elements of Esper Genesis 5th Edition character sheets. ' +
        'Esper Genesis is essentially a Sci-Fi version of the role playing game "Dungeons and Dragons" (I play both of these).</p>' +
        '<p>The example app hosted on GitHub pages allows you to populate attributes of your Esper Genesis character, namely stats, traits and talent sheets and print them.</p>' +
        '<p>Esper Genesis players would normally have a copy of these sheets which they fill in pencil when they play. ' +
        'This tool allows them to fill out their character details on a web version of the same sheets and update and print them when needed. ' +
        'The sheets are styled to look like the official paper character sheets.</p>' +
        '<p>The components are available on npm.</p>'
      },
      {
        name: 'Breath of the Wild Components',
        owner: 'Daryl Buckle',
        url: 'https://darylbuckle.dev/react-botw-menu-components',
        thumbnail: 'https://darylbuckle.dev/assets/images/projects/react-botw-menu-components-thumb.png',
        images: ['https://darylbuckle.dev/assets/images/projects/react-botw-menu-components-1.png', 'https://darylbuckle.dev/assets/images/projects/react-botw-menu-components-2.png', 'https://darylbuckle.dev/assets/images/projects/react-botw-menu-components-3.png'],
        private: false,
        enddate: new Date(2020, 11, 1),
        skills: [
          { name: 'React', group: 'Skills' },
          { name: 'Typescript', group: 'Skills' },
          { name: 'CSS', group: 'Skills' },
          { name: 'HTML', group: 'Skills' },
          { name: 'Npm', group: 'Skills' },
          { name: 'GitHub Pages', group: 'Skills' }
        ],
        info: '<p>The Legend of Zelda: Breath of the Wild is my favorite game. I also love the menu styles in-game. ' +
        'So for a bit of fun I created a few React components and a css module to create Botw style menus.</p>' +
        '<p>react-botw-menu-components is a collection of components, including; <ul><li>react-botw-tabs - a tab sheet</li><li>react-botw-grid-menu - ' +
        'an inventory selection menu</li><li>botw-menu.css - a css package</li></ul></p>' +
        '<p>The demo for react-botw-menu-components is a page styled like a Botw menu screen which showcases these components.</p>' +
        '<p>The components are available on npm.</p>'
      },
      {
        name: 'react-oauth2-authcode-provider',
        owner: 'Daryl Buckle',
        url: 'https://github.com/DarylBuckle/react-oauth2-authcode-provider',
        thumbnail: 'https://darylbuckle.dev/assets/images/projects/react-oauth2-authcode-provider-thumb.png',
        images: [
          'https://darylbuckle.dev/assets/images/projects/react-oauth2-authcode-provider-1.png',
          'https://darylbuckle.dev/assets/images/projects/react-oauth2-authcode-provider-2.png'
        ],
        private: false,
        enddate: new Date(2020, 7, 1),
        skills: [
          { name: 'React', group: 'Skills' },
          { name: 'Typescript', group: 'Skills' },
          { name: 'Npm', group: 'Skills' },
          { name: 'GitHub Pages', group: 'Skills' },
          { name: 'OAuth2', group: 'Skills' }
        ],
        info: '<p>react-oauth2-authcode-provider is a react component that handles authentication (with OAuth2 and Open Id servers) and token management for Single page applications.</p>' +
        '<p>It is designed to handle the authorization code, refresh and logout flows for an application in just a few lines of code.</p>' +
        '<p>This package is available on npm. I use it for a few of my own projects.</p>'
      },
      {
        name: 'react-funnel-pipeline',
        owner: 'Daryl Buckle',
        url: 'https://github.com/DarylBuckle/react-funnel-pipeline',
        thumbnail: 'https://darylbuckle.dev/assets/images/projects/react-funnel-pipeline-thumb.png',
        thumbnailStyle: { backgroundSize: 'auto 100%' },
        images: ['https://darylbuckle.dev/assets/images/projects/react-funnel-pipeline-1.png'],
        private: false,
        enddate: new Date(2020, 7, 1),
        skills: [
          { name: 'React', group: 'Skills' },
          { name: 'Typescript', group: 'Skills' },
          { name: 'Npm', group: 'Skills' },
          { name: 'GitHub Pages', group: 'Skills' }
        ],
        info: '<p>react-funnel-pipeline is a lightweight react component that renders a basic funnel/sales pipeline chart with a few customisation options.</p>' +
        '<p>This package is available on npm.</p>'
      },
      {
        name: 'react-profile-avatar',
        owner: 'Daryl Buckle',
        url: 'https://github.com/DarylBuckle/react-profile-avatar',
        thumbnail: 'https://darylbuckle.dev/assets/images/projects/react-profile-avatar-thumb.png',
        thumbnailStyle: { backgroundSize: 'auto 100%' },
        images: ['https://darylbuckle.dev/assets/images/projects/react-profile-avatar-1.png'],
        private: false,
        enddate: new Date(2021, 5, 1),
        skills: [
          { name: 'React', group: 'Skills' },
          { name: 'Typescript', group: 'Skills' },
          { name: 'Npm', group: 'Skills' },
          { name: 'GitHub Pages', group: 'Skills' }
        ],
        info: '<p>react-profile-avatar is a lightweight react component that renders a simple circular user avatar with a variety of options.</p>' +
        '<p>This package is available on npm.</p>'
      },
      {
        name: 'Tasklist',
        owner: 'Daryl Buckle',
        url: 'https://github.com/DarylBuckle/tasklist',
        thumbnail: 'https://darylbuckle.dev/assets/images/projects/tasklist-thumb.png',
        images: ['https://darylbuckle.dev/assets/images/projects/tasklist-1.png', 'https://darylbuckle.dev/assets/images/projects/tasklist-2.png'],
        private: false,
        enddate: new Date(2020, 1, 1),
        skills: [
          { name: 'React', group: 'Front End' },
          { name: 'HTML', group: 'Front End' },
          { name: 'SCSS', group: 'Front End' },
          { name: 'Javascript', group: 'Front End' },
          { name: 'Redux', group: 'Front End' },
          { name: 'Bootstrap', group: 'Front End' },
          { name: 'C#', group: 'Back End' },
          { name: '.NET Core 3', group: 'Back End' },
          { name: 'Web API', group: 'Back End' },
          { name: 'REST', group: 'Back End' },
          { name: 'Microsoft SQL', group: 'Database' },
          { name: 'Entity Framework', group: 'Database' },
          { name: 'JSON', group: 'Front End' },
          { name: 'TDD', group: 'Workflow' }
        ],
        info: '<p>Tasklist is a very basic application for listing tasks and marking their status.</p>' +
        '<p>It\'s a single page application (react) which loads a single list of tasks fetched from a rest web api (.net core 3, SQL), ' +
        ' and allows adding and editing of those tasks and changing of the status of those tasks.</p>' +
        '<p>It was built using test driven development and contains the early stages of some of my react building block components.</p>'
      },
      {
        name: 'Project Manager',
        owner: 'Daryl Buckle',
        thumbnail: 'https://darylbuckle.dev/assets/images/projects/projectmanager-thumb.png',
        images: ['https://darylbuckle.dev/assets/images/projects/projectmanager-1.png', 'https://darylbuckle.dev/assets/images/projects/projectmanager-2.png', 'https://darylbuckle.dev/assets/images/projects/projectmanager-3.png'],
        private: true,
        startdate: new Date(2020, 2, 1),
        enddate: new Date(2020, 4, 1),
        skills: [
          { name: 'React', group: 'Front End' },
          { name: 'HTML', group: 'Front End' },
          { name: 'SCSS', group: 'Front End' },
          { name: 'Javascript', group: 'Front End' },
          { name: 'Redux', group: 'Front End' },
          { name: 'Bootstrap', group: 'Front End' },
          { name: 'C#', group: 'Back End' },
          { name: '.NET Core 3', group: 'Back End' },
          { name: 'Web API', group: 'Back End' },
          { name: 'REST', group: 'Back End' },
          { name: 'OAuth2', group: 'Back End' },
          { name: 'Microsoft SQL', group: 'Database' },
          { name: 'Entity Framework', group: 'Database' },
          { name: 'JSON', group: 'Front End' },
          { name: 'TDD', group: 'Workflow' }
        ],
        info: '<p>An unnamed development project management web app.</p>' +
        '<p>It was a concept app which was an extension of my Task List project. ' +
        'It essentially took the tasks element and grouped them within a ' +
        'kanban board within a project, and added user logins. ' +
        'It has a .Net Core 3 backend, Sql database, ' +
        'Open Id authentication server, and React frontend.</p>' +
        '<p>This was more used as a sandbox app for testing my react components with actual use cases (such as my ' +
        'react OAuth authentication component and form and list builder components), ' +
        'playing with design styles, just generally improving my development skills and getting up to date with React hooks, ' +
        '.Net Core 3, and test driven development.</p>' +
        '<p>This is unfinished and got a bit left behind, but I may revisit some day.</p>'
      },
      {
        name: 'Authentication Proxy',
        owner: 'Daryl Buckle',
        url: 'https://github.com/DarylBuckle/nodejs-auth-proxy',
        private: false,
        enddate: new Date(2020, 10, 1),
        skills: [
          { name: 'NodeJs', group: 'Skills' },
          { name: 'OAuth2', group: 'Skills' },
          { name: 'Heroku', group: 'Skills' }
        ],
        info: '<p>A NodeJS server app that acts a proxy for authentication requests.</p>' +
        '<p>This was built to resolve the problem of storing client secrets in a web client without a server that needs to authenticate with OAuth2 ' +
        'Authorization Code where PKCE is not supported, e.g Strava. This app stores verifies the origin and rewrites the token ' +
        'request with the Client Secret.</p>' +
        '<p>This is a template repo. The actual proxy is private due to storing a Client Secret.'
      },
      {
        name: 'DarylBuckle.dev',
        owner: 'Daryl Buckle',
        url: 'https://darylbuckle.dev',
        thumbnail: 'https://darylbuckle.dev/assets/images/projects/darylbuckle.dev-thumb.png',
        images: ['https://darylbuckle.dev/assets/images/projects/darylbuckle.dev-1.png'],
        private: true,
        startdate: new Date(2020, 8, 1),
        enddate: new Date(2021, 0, 1),
        skills: [
          { name: 'Angular', group: 'Front End' },
          { name: 'Typescript', group: 'Front End' },
          { name: 'HTML', group: 'Front End' },
          { name: 'SCSS', group: 'Front End' },
          { name: 'Bootstrap', group: 'Front End' },
          { name: 'GitHub Pages', group: 'Hosting' }
        ],
        info: '<p>This is my professional portfolio web site which shows my work and experience. ' +
        'You are on this site right now.</p>' +
        '<p>This was created using my Angular Dev Portfolio template, with another small Angular SPA for the about page. ' +
        'It is hosted on GitHub pages.</p>'
      },
      {
        name: 'Buckle Blog',
        owner: 'Daryl Buckle',
        url: 'https://darylbuckle.dev/blog',
        thumbnail: 'https://darylbuckle.dev/assets/images/projects/buckle-blog-thumb.png',
        images: ['https://darylbuckle.dev/assets/images/projects/buckle-blog-1.png', 'https://darylbuckle.dev/assets/images/projects/buckle-blog-2.png'],
        private: false,
        startdate: new Date(2020, 7, 1),
        current: true,
        skills: [
          { name: 'Jekyll', group: 'Skills' },
          { name: 'Bootstrap', group: 'Skills' },
          { name: 'Markdown', group: 'Skills' },
          { name: 'GitHub Pages', group: 'Skills' },
          { name: 'Blogging', group: 'Skills' },
        ],
        info: '<p>This is my personal development blog where I write about Software development practices, tutorials and tips.</p>' +
        '<p>You can access this from the "Blog" link on my portfolio page. It is styled similarly to my portfolio page.</p>' +
        '<p>It is written in Jekyll and hosted on Github Pages. New posts are published just by creating a new markdown file in the github pages repo.</p>'
      },
    ],
    roles: [
      {
        title: 'Chief Technology Officer',
        company: 'Halo Service Solutions',
        location: 'Suffolk, United Kingdom',
        url: 'https://haloservicesolutions.com',
        startdate: new Date(2014, 2, 1),
        current: true,
        positions: [
          {
            title: 'Chief Technology Officer',
            company: 'Halo Service Solutions',
            startdate: new Date(2020, 9, 1),
            current: true
          },
          {
            title: 'Lead Software Engineer/Architect',
            company: 'Halo Service Solutions',
            startdate: new Date(2017, 6, 1),
            enddate: new Date(2020, 9, 1),
            current: false
          },
          {
            title: 'Software Engineer',
            company: 'Halo Service Solutions',
            startdate: new Date(2014, 8, 1),
            enddate: new Date(2017, 6, 1),
            current: false
          },
          {
            title: 'Junior Software Engineer',
            company: 'Halo Service Solutions',
            startdate: new Date(2014, 2, 1),
            enddate: new Date(2014, 8, 1),
            current: false
          }
        ],
        info: '<p>Technical lead, development manager, architect and full stack developer at Halo Service Solutions (formerly known as NetHelpDesk). Architect and creator of API centric web based ITSM, PSA and Service Desk SaaS solutions.</p>' +
        '<br>Highlights;' +
          '<ul>' +
            '<li>Development of commercial software solutions</li>' +
            '<li>Creator and lead architect of a new web-based API centric solution which replaced the ageing desktop solution</li>' +
            '<li>User interface and architecture design</li>' +
            '<li>Researching new technologies and driving technical direction</li>' +
            '<li>Managing technical department</li>' +
            '<li>Growing a team and training engineers</li>' +
            '<li>Consulting with customers regarding their requirements and developing specifications of work, and time and cost estimates, and working to strict deadlines</li>' +
            '<li>Setting up and improving upon internal development procedures</li>' +
            '<li>Integrating the Software with third party applications</li>' +
            '<li>Troubleshooting and application maintenance</li>' +
          '</ul>',
        projects: [
          {
            name: 'HaloITSM',
            owner: 'Halo Service Solutions',
            role: 'Halo Service Solutions',
            url: 'https://haloitsm.com',
            thumbnail: 'https://darylbuckle.dev/assets/images/projects/haloitsm-thumb.svg',
            thumbnailStyle: { backgroundSize: '250px', backgroundColor: 'white' },
            images: [
              'https://darylbuckle.dev/assets/images/projects/haloitsm-1.png',
              'https://darylbuckle.dev/assets/images/projects/haloitsm-2.png',
              'https://darylbuckle.dev/assets/images/projects/haloitsm-3.png'
            ],
            private: true,
            startdate: new Date(2017, 6, 1),
            current: true,
            skills: [
              { name: 'React', group: 'Front End' },
              { name: 'HTML', group: 'Front End' },
              { name: 'CSS', group: 'Front End' },
              { name: 'Javascript', group: 'Front End' },
              { name: 'Redux', group: 'Front End' },
              { name: 'Webpack', group: 'Front End' },
              { name: 'Bootstrap', group: 'Front End' },
              { name: 'C#', group: 'Back End' },
              { name: '.NET Core 2', group: 'Back End' },
              { name: '.NET Core 3', group: 'Back End' },
              { name: 'Web API', group: 'Back End' },
              { name: 'REST', group: 'Back End' },
              { name: 'MVC', group: 'Back End' },
              { name: 'Redis', group: 'Back End' },
              { name: 'Microsoft SQL', group: 'Database' },
              { name: 'Entity Framework', group: 'Database' },
              { name: 'AWS EC2', group: 'Hosting' },
              { name: 'IIS', group: 'Hosting' },
              { name: 'PowerShell', group: 'Hosting' },
              { name: 'OAuth2', group: 'Back End' },
              { name: 'JSON', group: 'Front End' },
              { name: 'Git', group: 'Source Control' },
              { name: 'Kanban', group: 'Workflow' },
            ],
            info: '<p>HaloITSM is an IT Service Management solution consisting of many features such as incident, problem, change & service request management, CMDB, knowledge base, active directory and azure integrations, single sign-on and a self service portal.</p>' +
            '<p>The product consists of multiple single-page web applications built using ReactJS with C# .Net Core backend applications (Web API and OAuth2 Authentication Server built with MVC), and Microsoft SQL Server database. API is open for integrations. Application authentication was implemented with OAuth2 Authorisation Code flow with PKCE. Hosted by IIS with AWS EC2.</p>' +
            '<p>I was the creator of the product and wrote all the initial code, and trained a team of developers to learn the languages and codebase. The application was one of three new products built with the same underlying components to replace the NetHelpDesk Desktop solution.</p>'
          },
          {
            name: 'HaloPSA',
            owner: 'Halo Service Solutions',
            role: 'Halo Service Solutions',
            url: 'https://halopsa.com',
            thumbnail: 'https://darylbuckle.dev/assets/images/projects/halopsa-thumb.svg',
            thumbnailStyle: { backgroundSize: '250px', backgroundColor: 'white' },
            images: ['https://darylbuckle.dev/assets/images/projects/halopsa-1.png', 'https://darylbuckle.dev/assets/images/projects/halopsa-2.png', 'https://darylbuckle.dev/assets/images/projects/halopsa-3.png'],
            private: true,
            startdate: new Date(2017, 6, 1),
            current: true,
            skills: [
              { name: 'React', group: 'Front End' },
              { name: 'HTML', group: 'Front End' },
              { name: 'CSS', group: 'Front End' },
              { name: 'Javascript', group: 'Front End' },
              { name: 'Redux', group: 'Front End' },
              { name: 'Webpack', group: 'Front End' },
              { name: 'Bootstrap', group: 'Front End' },
              { name: 'C#', group: 'Back End' },
              { name: '.NET Core 2', group: 'Back End' },
              { name: '.NET Core 3', group: 'Back End' },
              { name: 'Web API', group: 'Back End' },
              { name: 'REST', group: 'Back End' },
              { name: 'MVC', group: 'Back End' },
              { name: 'Redis', group: 'Back End' },
              { name: 'Microsoft SQL', group: 'Database' },
              { name: 'Entity Framework', group: 'Database' },
              { name: 'AWS EC2', group: 'Hosting' },
              { name: 'IIS', group: 'Hosting' },
              { name: 'PowerShell', group: 'Hosting' },
              { name: 'OAuth2', group: 'Back End' },
              { name: 'JSON', group: 'Front End' },
              { name: 'Git', group: 'Source Control' },
              { name: 'Kanban', group: 'Workflow' },
            ],
            info: '<p>HaloPSA is solution for Managed Service Providers consisting of many features such as ticketing, crm, service level agreements, contract management, asset management, sales, billing and reporting.</p>' +
            '<p>The product consists of multiple single-page web applications built using ReactJS with C# .Net Core backend applications (Web API and OAuth2 Authentication Server built with MVC), and Microsoft SQL Server database. API is open for integrations. Application authentication was implemented with OAuth2 Authorisation Code flow with PKCE. Hosted by IIS with AWS EC2.</p>' +
            '<p>I was the creator of the product and wrote all the initial code, and trained a team of developers to learn the languages and codebase. The application was one of three new products built with the same underlying components to replace the NetHelpDesk Desktop solution.</p>'
          },
          {
            name: 'Halo Service Desk',
            owner: 'Halo Service Solutions',
            role: 'Halo Service Solutions',
            url: 'https://haloservicedesk.com',
            thumbnail: 'https://darylbuckle.dev/assets/images/projects/haloservicedesk-thumb.svg',
            thumbnailStyle: { backgroundSize: '250px', backgroundColor: 'white' },
            images: ['https://darylbuckle.dev/assets/images/projects/haloservicedesk-1.png', 'https://darylbuckle.dev/assets/images/projects/haloservicedesk-2.png', 'https://darylbuckle.dev/assets/images/projects/haloservicedesk-3.png'],
            private: true,
            startdate: new Date(2017, 6, 1),
            current: true,
            skills: [
              { name: 'React', group: 'Front End' },
              { name: 'HTML', group: 'Front End' },
              { name: 'CSS', group: 'Front End' },
              { name: 'Javascript', group: 'Front End' },
              { name: 'Redux', group: 'Front End' },
              { name: 'Webpack', group: 'Front End' },
              { name: 'Bootstrap', group: 'Front End' },
              { name: 'C#', group: 'Back End' },
              { name: '.NET Core 2', group: 'Back End' },
              { name: '.NET Core 3', group: 'Back End' },
              { name: 'Web API', group: 'Back End' },
              { name: 'REST', group: 'Back End' },
              { name: 'MVC', group: 'Back End' },
              { name: 'Redis', group: 'Back End' },
              { name: 'Microsoft SQL', group: 'Database' },
              { name: 'Entity Framework', group: 'Database' },
              { name: 'AWS EC2', group: 'Hosting' },
              { name: 'IIS', group: 'Hosting' },
              { name: 'PowerShell', group: 'Hosting' },
              { name: 'OAuth2', group: 'Back End' },
              { name: 'JSON', group: 'Front End' },
              { name: 'Git', group: 'Source Control' },
              { name: 'Kanban', group: 'Workflow' },
            ],
            info: '<p>Halo Service Desk is Service Desk/Ticketing software.</p>' +
            '<p>The product consists of multiple single-page web applications built using ReactJS with C# .Net Core backend applications (Web API and OAuth2 Authentication Server built with MVC), and Microsoft SQL Server database. API is open for integrations. Application authentication was implemented with OAuth2 Authorisation Code flow with PKCE. Hosted by IIS with AWS EC2.</p>' +
            '<p>I was the creator of the product and wrote all the initial code, and trained a team of developers to learn the languages and codebase. The application was one of three new products built with the same underlying components to replace the NetHelpDesk Desktop solution.</p>'
          },
          {
            name: 'Halo Mobile',
            owner: 'Halo Service Solutions',
            role: 'Halo Service Solutions',
            thumbnail: 'https://darylbuckle.dev/assets/images/projects/halo-mobile-1.png',
            thumbnailStyle: { backgroundSize: '104px', backgroundColor: 'black' },
            images: ['https://darylbuckle.dev/assets/images/projects/halo-mobile-1.png', 'https://darylbuckle.dev/assets/images/projects/halo-mobile-2.png', 'https://darylbuckle.dev/assets/images/projects/halo-mobile-3.png'],
            private: true,
            current: true,
            startdate: new Date(2020, 10, 1),
            skills: [
              { name: 'React Native', group: 'Skills' },
              { name: 'Typescript', group: 'Skills' },
              { name: 'iOS Apps', group: 'Skills' },
              { name: 'Android Apps', group: 'Skills' },
            ],
            info: '<p>In my own time I created a new native mobile application for Halo over christmas 2020 and early 2021.</p>' +
            '<p>This started as an exercise in learning React Native and then turned into a full application.</p>' +
            '<p>It is cross-platform and will be available on both iOS and Android for Halo customers to download for free ' +
            'to compliment the web-based solution. It features ticketing, push notifications and searching. ' +
            'It authenticates with the customers own Halo api using oauth2 authorization code flow.</p>'
          },
          {
            name: 'NetHelpDesk',
            owner: 'Halo Service Solutions',
            role: 'Halo Service Solutions',
            url: 'https://www.nethelpdesk.com',
            thumbnail: 'https://darylbuckle.dev/assets/images/projects/nethelpdesk-win-thumb.png',
            images: ['https://darylbuckle.dev/assets/images/projects/nethelpdesk-win-1.png'],
            private: true,
            startdate: new Date(2014, 2, 1),
            enddate: new Date(2018, 4, 1),
            skills: [
              { name: 'Delphi XE7', group: 'Desktop Application' },
              { name: 'Pascal', group: 'Desktop Application' },
              { name: 'Microsoft SQL', group: 'Database' },
              { name: 'JQuery', group: 'Portal' },
              { name: 'Javascript', group: 'Portal' },
              { name: 'HTML', group: 'Portal' },
              { name: 'CSS', group: 'Portal' },
              { name: 'PHP', group: 'Portal' },
              { name: 'SOAP', group: 'Portal' },
              { name: 'IIS', group: 'Portal' },
              { name: 'Git', group: 'Source Control' }
            ],
            info: '<p>The NetHelpDesk solution consists of multiple windows desktop applications, a self service portal, a SOAP service and services ' +
            'for processing email and other time sensitive tasks.</p>' +
            '<p>The solution consists of many features serving as an all in one business solution - Ticketing, CRM, Asset Management, Contracts, Telecoms, ' +
            'Stock Control, Remote Access, Live Chat, Service Catalogue, Knowledge Base, Email, Sales, Invoicing, and many more.</p>' +
            '<p>This was the companies core product and has now been deprecated and replaced by the HaloITSM, HaloPSA and Halo Service Desk web based solutions.</p>' +
            '<p>I worked on this product for several years, supporting and building many new features and integrations for customers.'
          },
          {
            name: 'NetHelpDesk for iOS',
            owner: 'Halo Service Solutions',
            role: 'Halo Service Solutions',
            url: 'https://www.nethelpdesk.com',
            thumbnail: 'https://darylbuckle.dev/assets/images/projects/nethelpdesk-ios-thumb.png',
            thumbnailStyle: { backgroundSize: '160px', backgroundColor: 'white' },
            images: ['https://darylbuckle.dev/assets/images/projects/nethelpdesk-ios-1.png', 'https://darylbuckle.dev/assets/images/projects/nethelpdesk-ios-2.png'],
            private: true,
            startdate: new Date(2014, 11, 1),
            enddate: new Date(2019, 10, 1),
            skills: [
              { name: 'XCode', group: 'Skills' },
              { name: 'Objective-C', group: 'Skills' },
              { name: 'iOS Apps', group: 'Skills' },
              { name: 'SQLLite', group: 'Skills' },
              { name: 'XML', group: 'Skills' },
              { name: 'SOAP', group: 'Skills' }
            ],
            info: '<p>Mobile application for the NetHelpDesk ticketing solution.</p>' +
            '<p>The application offered basic Ticketing, Asset Management and Stock control features and was built to work without ' +
            'an internet connection so engineers would download data to their devices before travelling to a customers site.</p>' +
            '<p>Originally created with basic functionality by a third party but development was brought in house in December 2014. ' +
            'I was taught how to develop iOS applications by a third party developer and then became the development lead for the iOS application.</p>'
          },
          {
            name: 'NetHelpDesk Live Chat',
            owner: 'Halo Service Solutions',
            role: 'Halo Service Solutions',
            url: 'https://www.nethelpdesk.com',
            thumbnail: 'https://darylbuckle.dev/assets/images/projects/nethelpdesk-chat-thumb.ico',
            thumbnailStyle: { backgroundSize: '40px', backgroundColor: '#353535' },
            images: ['https://darylbuckle.dev/assets/images/projects/nethelpdesk-chat-1.png'],
            private: true,
            startdate: new Date(2017, 2, 1),
            enddate: new Date(2017, 5, 1),
            skills: [
              { name: 'JQuery', group: 'Front End' },
              { name: 'Javascript', group: 'Front End' },
              { name: 'HTML', group: 'Front End' },
              { name: 'CSS', group: 'Front End' },
              { name: 'PHP', group: 'Back End' },
              { name: 'JSON', group: 'Back End' },
              { name: 'Microsoft SQL', group: 'Database' }
            ],
            info: '<p>NetHelpDesk Live chat was an add-on to the NetHelpDesk solution to allow Agents to communicate and End-Users' +
            ' to get live chat support via the self service portal.</p>' +
            '<p>The app can be plugged in to any website that uses jQuery.</p>' +
            '<p>The backend is a PHP api.</p>' +
            '<p>I was the lead on this project.</p>'
          },
          {
            name: 'AD Self-Service Password Reset',
            owner: 'Halo Service Solutions',
            role: 'Halo Service Solutions',
            url: 'https://www.nethelpdesk.com',
            thumbnail: 'https://darylbuckle.dev/assets/images/projects/nethelpdesk-password-thumb.png',
            thumbnailStyle: { backgroundSize: '300px', backgroundColor: 'white' },
            images: ['https://darylbuckle.dev/assets/images/projects/nethelpdesk-password-1.png', 'https://darylbuckle.dev/assets/images/projects/nethelpdesk-password-2.png'],
            private: true,
            startdate: new Date(2016, 6, 1),
            enddate: new Date(2016, 8, 1),
            skills: [
              { name: 'C++', group: 'Skills' },
              { name: 'Javascript', group: 'Skills' },
              { name: 'HTML', group: 'Skills' },
              { name: 'CSS', group: 'Skills' },
              { name: 'Delphi XE7', group: 'Skills' },
              { name: 'Pascal', group: 'Skills' },
            ],
            info: '<p>NetHelpDesk AD Self-Service Password Reset is an add-on to the NetHelpDesk solution to allow AD Users of ' +
            'the software to reset their own passwords.</p>' +
            '<p>This consisted of a web client, a custom credential provider and installer written in C++ to add an option to the windows login' +
            ' screen for users to reset their password using security questions if they cannot log in.</p>' +
            '<p>I was the lead on this project.</p>'
          },
          {
            name: 'Skype for Business Plugin',
            owner: 'Halo Service Solutions',
            role: 'Halo Service Solutions',
            url: 'https://www.nethelpdesk.com',
            thumbnailStyle: { backgroundColor: 'white' },
            private: true,
            startdate: new Date(2017, 1, 1),
            enddate: new Date(2017, 2, 1),
            skills: [
              { name: 'C++', group: 'Skills' }
            ],
            info: '<p>This was a telecoms plugin for the NetHelpDesk solution to allow Skype for Business (formerly Lync) calls to be made, answered and ' +
            'controlled from the NetHelpDesk desktop client via a call management feature.</p>' +
            '<p>I was the lead on this project.</p>'
          },
          {
            name: '3CX Plugin',
            owner: 'Halo Service Solutions',
            role: 'Halo Service Solutions',
            url: 'https://www.nethelpdesk.com',
            thumbnailStyle: { backgroundColor: 'white' },
            private: true,
            startdate: new Date(2015, 3, 1),
            enddate: new Date(2015, 5, 1),
            skills: [
              { name: 'C++', group: 'Skills' }
            ],
            info: '<p>This was a telecoms plugin for the NetHelpDesk solution to allow 3CX calls to be made, answered and ' +
            'controlled from the NetHelpDesk desktop client via a call management feature.</p>' +
            '<p>I was the lead on this project.</p>'
          },
        ]
      },
      {
        title: 'Intermodal Team Leader',
        company: 'OOCL UK',
        location: 'Levington, Suffolk, United Kingdom',
        url: 'https://www.oocl.com',
        startdate: new Date(2012, 6, 1),
        enddate: new Date(2014, 1, 28),
        current: false,
        positions: [
          {
            title: 'Intermodal Team Leader',
            company: 'OOCL UK',
            startdate: new Date(2013, 8, 1),
            enddate: new Date(2014, 1, 28),
            current: false
          },
          {
            title: 'Operations Controller',
            company: 'OOCL UK',
            startdate: new Date(2012, 6, 1),
            enddate: new Date(2013, 7, 30),
            current: false
          },
        ],
        info: '<p>My first full time job after graduating from university. This role gave me my first professional experiences programming, where on the side of my day-to-day duties I worked on writing basic scripts and programs for reporting and automating day to day procedures.</p>' +
        'Role duties;' +
          '<ul>' +
            '<li>Managing large groups of haulage drivers</li>' +
            '<li>Planning transport and working closely with suppliers and managing relationships</li>' +
            '<li>Leading and training a small team of transport operators</li>' +
            '<li>Writing VB Scripts and Macros to automate procedures</li>' +
            '<li>Writing applications for reporting on internal performance</li>' +
            '<li>Studying for and achieving the Transport Manager CPC qualification</li>' +
          '</ul>',
        projects: [
          {
            name: 'Transport Automations',
            owner: 'OOCL UK',
            role: 'OOCL UK',
            thumbnailStyle: { backgroundColor: 'white' },
            private: true,
            startdate: new Date(2013, 6, 1),
            enddate: new Date(2014, 0, 1),
            skills: [
              { name: 'Visual Basic', group: 'Skills' },
              { name: 'Macros', group: 'Skills' }
            ],
            info: '<p>I wrote scripts, macros and small applications in Visual basic to automate and improve some processes such as a ' +
            ' Truckcom export, daily to-do list and reefer control sheet.</p>'
          },
          {
            name: 'Transport Reports',
            owner: 'OOCL UK',
            role: 'OOCL UK',
            thumbnailStyle: { backgroundColor: 'white' },
            private: true,
            startdate: new Date(2013, 3, 1),
            enddate: new Date(2014, 0, 1),
            skills: [
              { name: 'Visual Basic', group: 'Skills' },
              { name: 'Macros', group: 'Skills' }
            ],
            info: '<p>I wrote scripts, macros and small applications in Visual basic to create reports on the transport' +
            ' department KPIs and stats, as well as an intermodal team monthly report.</p>'
          },
        ]
      },
    ],
    qualifications: [
      {
        name: 'Bachelor of Science in Mathematics',
        location: 'University of East Anglia',
        grade: 'First Class Honours',
        icon: <FontAwesomeIcon icon={faGraduationCap} size='6x' />,
        startdate: new Date (2009, 8, 1),
        enddate: new Date (2012, 6, 1),
        info: '<p>Undergraduate degree. 3 year full-time study.</p> ' +
          '<p>Modules studied;</p>' +
          '<div class=\'text-center mb-4\'>' +
          '<h6 class=\'text-colour\'>First Year</h6>' +
            '<span class=\'badge badge-tertiary m-2\'>IT for Mathematicians</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Mechanics & Modelling</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Geometry</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Calculus</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Multi-Variable Calculus</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Analysis and Algebra</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Discrete Mathematics</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Pure Mathematics</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Probability</span>' +
          '</div>' +
          '<div class=\'text-center mb-4\'>' +
          '<h6 class=\'text-colour\'>Second Year</h6>' +
            '<span class=\'badge badge-tertiary m-2\'>Fluids & Solids</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Algebra</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Quantum Mechanics</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Mathematics MiniProject</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Introduction to Financial and Management Accounting</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Analysis</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Differential Equations & Algorithms</span>' +
          '</div>' +
          '<div class=\'text-center mb-4\'>' +
          '<h6 class=\'text-colour\'>Final Year</h6>' +
            '<span class=\'badge badge-tertiary m-2\'>Fluid Dynamics</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Lagrangian Systems</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Dynamical Meteorology</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Advanced Mathematical Techniques</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Mixed Boundary Value Problems</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Continuum Mechanics & Elasticity</span>' +
            '<span class=\'badge badge-tertiary m-2\'>Mathematical Biology</span>' +
          '</div>'
      },
    ],
    skills: [
      { name: 'Web Applications', group: 'Key Skills', level: 90 },
      { name: 'Application Design', group: 'Key Skills', level: 80 },
      { name: 'Leadership', group: 'Key Skills', level: 65 },
      { name: 'Problem Solving', group: 'Key Skills', level: 90 },
  
      { name: 'React', group: 'Top Technologies', level: 90 },
      { name: 'React Native', group: 'Top Technologies', level: 85 },
      { name: 'C#', group: 'Top Technologies', level: 90 },
      { name: '.NET Core 3', group: 'Top Technologies', level: 90 },
      { name: 'Microsoft SQL', group: 'Top Technologies', level: 90 },
  
      { name: 'Angular', group: 'Technologies', level: 65 },
      { name: 'iOS Apps', group: 'Technologies', level: 75 },
      { name: 'Android Apps', group: 'Technologies', level: 60 },
      { name: 'HTML', group: 'Technologies', level: 90 },
      { name: 'CSS', group: 'Technologies', level: 90 },
      { name: 'SCSS', group: 'Technologies', level: 90 },
      { name: 'Javascript', group: 'Technologies', level: 90 },
      { name: 'Typescript', group: 'Technologies', level: 90 },
      { name: 'JQuery', group: 'Technologies', level: 80 },
      { name: 'PHP', group: 'Technologies', level: 80 },
      { name: 'NodeJs', group: 'Technologies', level: 70 },
      { name: 'Redux', group: 'Technologies', level: 90 },
      { name: 'Npm', group: 'Technologies', level: 90 },
      { name: 'Webpack', group: 'Technologies', level: 70 },
      { name: 'Bootstrap', group: 'Technologies', level: 90 },
      { name: 'C++', group: 'Technologies', level: 60 },
      { name: 'Pascal', group: 'Technologies', level: 90 },
      { name: 'Delphi XE7', group: 'Technologies', level: 90 },
      { name: 'XCode', group: 'Technologies', level: 70 },
      { name: 'Objective-C', group: 'Technologies', level: 70 },
      { name: 'Web API', group: 'Technologies', level: 90 },
      { name: 'MVC', group: 'Technologies', level: 80 },
      { name: 'REST', group: 'Technologies', level: 90 },
      { name: 'GraphQL', group: 'Technologies', level: 45 },
      { name: 'SOAP', group: 'Technologies', level: 90 },
      { name: 'Redis', group: 'Technologies', level: 90 },
      { name: 'Entity Framework', group: 'Technologies', level: 90 },
      { name: 'My SQL', group: 'Technologies', level: 60 },
      { name: 'SQLLite', group: 'Technologies', level: 80 },
      { name: 'PowerShell', group: 'Technologies', level: 70 },
      { name: 'Visual Basic', group: 'Technologies', level: 70 },
      { name: 'Macros', group: 'Technologies', level: 70 },
      { name: 'OAuth2', group: 'Technologies', level: 90 },
      { name: 'JSON', group: 'Technologies', level: 90},
      { name: 'XML', group: 'Technologies', level: 90 },
      { name: 'Jekyll', group: 'Technologies', level: 70 },
      { name: 'Azure', group: 'Technologies', level: 40 },
      { name: 'AWS EC2', group: 'Technologies', level: 70 },
      { name: 'GitHub Pages', group: 'Technologies', level: 90 },
      { name: 'IIS', group: 'Technologies', level: 90 },
      { name: 'Git', group: 'Technologies', level: 90 },
      { name: 'TDD', group: 'Technologies', level: 70 },
      { name: 'Kanban', group: 'Technologies', level: 85 },
      { name: 'Scrum', group: 'Technologies', level: 60 },
    ],
    linkedin: 'darylbuckle',
    github: 'DarylBuckle',
  }} />
}

export default App
