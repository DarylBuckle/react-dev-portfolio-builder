import React from 'react'
import { NavComponent } from './Components/Nav'
import { Avatar } from 'react-profile-avatar'
import { idealTextColor, displayMemo } from './Functions/CommonFunctions'
import {
  HeaderSectionComponent,
  SectionComponent,
  FooterComponent
} from './Components/Section'

// eslint-disable-next-line no-unused-vars
import { Page } from './Classes/page'

import 'react-profile-avatar/dist/index.css'
import { ProjectTileComponent } from './Components/ProjectTile'

interface Props {
  page: Page
}

export default ({ page }: Props) => {
  const sectionContent = []
  const navLinks = []
  let headerNextColour: string | undefined
  if (page.sections) {
    for (let i1 = 0; i1 < page.sections.length; i1++) {
      const s = page.sections[i1]
      if (i1 === 0) {
        headerNextColour = s.bgColour
      }
      let nextColour: string | undefined = page.bgColour
      if (i1 < page.sections.length - 1) {
        nextColour = page.sections[i1 + 1].bgColour
      }

      let content
      switch (s.use) {
        case 1: // My projects grid
          content = (
            <div className='row justify-content-center'>
              {page.user.projects &&
                page.user.projects.map((p) => {
                  return (
                    <div
                      key={'project-tile-' + p.name}
                      className='project-tile col-md-6 col-lg-4 mb-5'
                      onClick={() => window.alert('Clicked ' + p.name)}
                    >
                      <ProjectTileComponent project={p} />
                    </div>
                  )
                })}
            </div>
          )
          break
      }

      sectionContent.push(
        <SectionComponent
          key={'section-' + i1}
          backgroundColor={s.bgColour}
          textColour={s.textColour}
          nextBackgroundColor={nextColour}
          id={s.identifier}
        >
          <div>
            <div className='text-center'>
              <div className='row justify-content-center'>
                <div className='section-header col-lg-6'>
                  <h2>{s.title}</h2>
                  <p className='section-header-desc'>
                    {displayMemo(s.subTitle)}
                  </p>
                </div>
              </div>
              <div className='row justify-content-center'>{content}</div>
            </div>
          </div>
        </SectionComponent>
      )
      if (s.identifier) {
        navLinks.push(s)
      }
    }
  }

  return (
    <div className='react-dev-portfolio'>
      <style>
        {`.react-dev-portfolio .project-tile h5:hover,
          .react-dev-portfolio .project-tile svg {
            color: ${page.textColour};
        }`}
      </style>
      <NavComponent
        backgroundColor={page.bgColour}
        textColour={page.textColour}
        title={page.user.firstname + ' ' + page.user.lastname}
        logoUrl={page.logoUrl}
        mailto={page.user.email}
        links={navLinks}
      />
      <HeaderSectionComponent
        backgroundColor={page.bgColour}
        textColour={page.textColour}
        nextBackgroundColor={headerNextColour}
        backgroundImageUrl={page.coverUrl}
      >
        <div className='text-center' style={{ marginTop: '50px' }}>
          <Avatar
            name='Daryl Buckle'
            imageSrc={page.user.imageUrl}
            size={200}
            borderSize={5}
            borderColour={page.textColour}
            colour={page.textColour}
          />
          <div className='profile-intro'>
            <div className='name'>
              <h1 className='display-4 name-1'> {page.user.firstname}</h1>
              <h1 className='display-4 name-mid'>&#8729;</h1>
              <h1 className='display-4 name-2'> {page.user.lastname}</h1>
            </div>
            <div
              className='profile-detail'
              style={{ color: idealTextColor(page.bgColour) }}
            >
              {page.user.headline}
            </div>
            <div className='profile-detail small'>{page.user.title}</div>
          </div>
        </div>
      </HeaderSectionComponent>
      {sectionContent}
      <FooterComponent
        backgroundColor={page.bgColour}
        textColour={page.textColour}
        name={page.user.firstname + ' ' + page.user.lastname}
      >
        Footer
      </FooterComponent>
    </div>
  )
}
