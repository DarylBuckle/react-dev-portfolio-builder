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

It is recommended to also import bootstrap js in your html.

```html
<!-- Bootstrap core JS-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
```


## Props

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    page | Page  | true | A Page object. |
|    user | User  | true | A User object. |


#### Page props

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    textColour | string  | false | Primary text colour for headings. HTML hex expected.  |
|    bgColour | string  | false | Background colour for the profile and footer sections. HTML hex expected.  |
|    coverUrl | string  | false | Url of an image to as the background for the header. |
|    logoUrl | string  | false | Url of an image to use as the page name. |
|    sections  | Sections[]  | true | An array of the Section object. A section is a part of the page which contains information. |   
| externalLinks | Link[]  | false | Additional links to show in the nav-bar which link to external pages. |
|    hideFooter | boolean  | false | A flag to hide the page footer. Defaults to false. |
|    footerLContent | JSX  | false | Override the left part of the footer content. |
|    footerCContent | JSX  | false | Override the centre part of the footer content. |
|    footerRContent | JSX  | false | Override the right part of the footer content. |
|    footerEnd | JSX  | false | Additional info to add onto the end of the footer. |


##### Section props

All sections render a link in the nav bar if identifier is set and linkedIdentifier is not set.

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    identifier | string  | true | An unique id for the section. Used in the id of elements.  |
|    linkedIdentifier | string  | false | Set this to an identifier of another element to link to that element. This will not show an additional link in the nav bar and will highlight the linkedIdentifier when in that Section. Use to make a link span multiple sections.  |
|    title | string  | false | The header of the section.  |
|    subTitle | string  | false | The sub-header of the section.  |
|    textColour | string  | false | Text colour. HTML hex expected.  |
|    bgColour | string  | false | Background colour of the section. HTML hex expected.  |
|    systemUse | string  | false | Set to "projects" to render the My Projects tiles (projects in the User Projects list), "experience" to render your role timeline, "qualifications" to render your Qualifications tiles, "skills" to render your skills list. Any other value then the "content" prop will be rendered. |
|    content | JSX  | false | JSX content to render in the section.  |
|    className | string  | false | A css class name for the container of the section.  |
|    tileClassName | string  | false | A css class name for the tiles (projects, experience and qualifications only).  |


##### Link props

Additional links to external sites.

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    title | string  | true | A name for the link.  |
|    identifier | string  | true | The url of the link.  |


#### User props

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    firstname | string  | true | Your first name. |
|    lasname | string  | true | Your last name. |
|    headline | string  | false | A headline or your job title. |
|    title | string  | false | Your current job title. |
|    imageUrl | string  | false | Url of an image to use in your avatar. |
|    location  | string  | false | Your current location. |
|    projects  | Project[]  | false | A list of your own projects. |
|    roles  | Role[]  | false | A list of companies that you have been employed at. |
|    qualifications | Qualification[]  | false | A list of your qualifications. |
|    skills  | Skill[]  | false | A list of skills and/or technologies that you have worked with. |
|    linkedin  | string  | false | Your LinkedIn user name. If set this will show in the footer. |
|    twitter  | string  | false | Your Twitter user name. If set this will show in the footer. |
|    facebook  | string  | false | Your Facebook user name. If set this will show in the footer. |
|    instagram  | string  | false | Your Instagram user name. If set this will show in the footer. |
|    github  | string  | false | Your GitHub profile user name. If set this will show in the footer. |
|    stackoverflow  | string  | false | Your Stack Overflow profile user id. If set this will show in the footer. |
|    mailto  | string  |  false | Email Address where the contact button will send to. |


<br/>

##### Project props

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|   name | string | false | The name/title of the project. |
|    owner | string | true | The person or company who owns the project |
|    role | string | false | Enter the name of the company used in the 'company' property of the 'role' model if applicable. |
|    icon | object | false | A icon to show for this qualification. |
|    thumbnail | string | false | The url of an image to show instead of an icon. This can be the url of a public image or the path of a local asset. |
|    thumbnailStyle | Style | false | If image is set you can use this to apply custom styles to the image. |
|    images | string[] | false | This will show multiple images in a carousel on the modal screen instead of 'image'. |
|    url | string | false | A link to more information about the project. Will show on the modal screen. |
|    private | boolean | false | Whether the source code is public or private. |
|    startdate | Date | false | When you started working on the project. Must have either 'enddate' set or 'current' === true. |
|    enddate | Date | false | When you finished working on the project. If 'startdate' is not set only the enddate will show. |
|    current | boolean | false | Whether you are still working on this project. |
|    skills | Skill[] | false | A list of skills/technologies relating to the project. The project will then show in the skills section. |
|    info | string | false | Additional details. Shows on modal screen only. Accepts html. |

<br/>

##### Role props

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    title |  string | true | Your job title. |
|    company |  string | true | The name of the company. |
|    location |  string | false | Your place of work. |
|    url |  string | false | A link to the companies website. The companies name on the timeline becomes a link if set. |
|    startdate | Date | false | When you started employment. Must have either 'enddate' set or 'current' === true. |
|    enddate |  Date | false | When you finished employment. |
|    current |  boolean | false | Whether you are still employed. |
|    positions |  Role[] | false | A list of positions held at the company included start and end dates. |
|    projects |  Project[] | false | A list of projects worked on at the company. |
|    info |  string | false | Additional details. Accepts html. |

<br/>

##### Qualification props

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    name |  string | true | The name/title of the qualifcation. |
|    location |  string | false | The place of study. |
|    grade |  string | false | Grade obtained. |
|    icon |  object | false | A font awesome icon to show for this qualification. |
|    image |  string | false | The url of an image to show instead of an icon. This can be the url of a public image or the path of a local asset. |
|    imagestyle |  object | false | If image is set you can use this to apply custom styles to the image. |
|    startdate |  Date | false | When you started studying. Must have either 'enddate' set or 'current' === true. |
|    enddate |  Date | false | When you finished/gained the qualifcation. If 'startdate' is not set only the enddate will show. |
|    current |  boolean | false | Whether you are still studying for this qualification. |
|    info |  string | false | Additional details. Shows on modal screen only. Accepts html. |


<br/>

##### Skill props

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    name |  string | true | Name of the skill. |
|    group |  string | true | What group to show the skill under. If empty string no group header will be shown. |
|    level |  number | false | A number ranging from 0-100 to determine your skill level. |

<br/>


## License

MIT © [DarylBuckle](https://github.com/DarylBuckle)
