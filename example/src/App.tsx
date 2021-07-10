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
      email: 'daryl.buckle@outlook.com',
      projects: [
        {
          name: 'angular-dev-portfolio',
          owner: 'Daryl Buckle',
          url: 'https://github.com/DarylBuckle/angular-dev-portfolio',
          image: 'https://darylbuckle.dev/assets/images/projects/angular-dev-portfolio-thumb.png',
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
          image: 'https://darylbuckle.dev/assets/images/projects/dnd-character-sheets-thumb.png',
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
          image: 'https://darylbuckle.dev/assets/images/projects/espergen-character-sheets-thumb.png',
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
          image: 'https://darylbuckle.dev/assets/images/projects/react-botw-menu-components-thumb.png',
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
          image: 'https://darylbuckle.dev/assets/images/projects/react-oauth2-authcode-provider-thumb.png',
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
          image: 'https://darylbuckle.dev/assets/images/projects/react-funnel-pipeline-thumb.png',
          imagestyle: { backgroundSize: 'auto 100%' },
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
          image: 'https://darylbuckle.dev/assets/images/projects/react-profile-avatar-thumb.png',
          imagestyle: { backgroundSize: 'auto 100%' },
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
          image: 'https://darylbuckle.dev/assets/images/projects/tasklist-thumb.png',
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
          image: 'https://darylbuckle.dev/assets/images/projects/projectmanager-thumb.png',
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
          icon: ['fab' , 'node-js'],
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
          image: 'https://darylbuckle.dev/assets/images/projects/darylbuckle.dev-thumb.png',
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
          image: 'https://darylbuckle.dev/assets/images/projects/buckle-blog-thumb.png',
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
        use: 1
      },
      {
        identifier: 'Experience',
        title: 'Experience',
        subTitle: 'My professional experience.',
        bgColour: '#f6f6f6',
        use: 2
      }
    ]
  }}/>
}

export default App
