import React from 'react'
import { NavComponent } from './Components/Nav'
import { Avatar } from 'react-profile-avatar'
import { idealTextColor } from './Functions/CommonFunctions'
import {
  HeaderSectionComponent,
  SectionComponent,
  FooterComponent
} from './Components/Section'

// eslint-disable-next-line no-unused-vars
import { Profile } from './Classes/profile'

import 'react-profile-avatar/dist/index.css'

interface Props {
  profile: Profile
  textColour?: string
  bgColour?: string
}

export default ({ profile, textColour, bgColour }: Props) => {
  return (
    <div className='react-dev-portfolio'>
      <NavComponent />
      <HeaderSectionComponent
        backgroundColor={bgColour}
        textColour={textColour}
        nextBackgroundColor='white'
        backgroundImageUrl={profile.coverUrl}
      >
        <div className='text-center' style={{ marginTop: '50px' }}>
          <Avatar
            name='Daryl Buckle'
            imageSrc={profile.imageUrl}
            size={200}
            borderSize={5}
            borderColour={textColour}
            colour={textColour}
          />
          <div className='profile-intro'>
            <div className='name'>
              <h1 className='display-4 name-1'> {profile.firstname}</h1>
              <h1 className='display-4 name-mid'>&#8729;</h1>
              <h1 className='display-4 name-2'> {profile.lastname}</h1>
            </div>
            <div
              className='profile-detail'
              style={{ color: idealTextColor(bgColour) }}
            >
              {profile.title}
            </div>
            <div className='profile-detail small'>{profile.title2}</div>
          </div>
        </div>
      </HeaderSectionComponent>
      <SectionComponent>Section 2</SectionComponent>
      <SectionComponent nextBackgroundColor={bgColour}>
        Section 3
      </SectionComponent>
      <FooterComponent backgroundColor={bgColour} textColour={textColour}>
        Footer
      </FooterComponent>
    </div>
  )
}
