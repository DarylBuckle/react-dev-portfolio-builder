import React, { useState } from 'react'
import { NavComponent } from './Components/Nav'
import { Avatar } from 'react-profile-avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { Modal } from 'react-bootstrap'
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

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { RoleTileComponent } from './Components/RoleTile'
import { QualificationTileComponent } from './Components/QualificationTile'
import { SkillGroupComponent } from './Components/SkillBar'
// eslint-disable-next-line no-unused-vars
import { Project } from './Classes/project'
// eslint-disable-next-line no-unused-vars
import { Qualification } from './Classes/qualification'
import { ProjectModalComponent } from './Components/ProjectModal'
import { QualificationModalComponent } from './Components/QualificationModal'

interface Props {
  page: Page
  projectClick?: (project: Project) => void
  qualificationClick?: (qualification: Qualification) => void
}

export default ({ page, projectClick, qualificationClick }: Props) => {
  const [projectModal, setProjectModal] = useState<Project>()
  function onProjectClick(project: Project) {
    if (projectClick) {
      // Project click overridden
      projectClick(project)
    } else {
      // Show default modal
      setProjectModal(project)
    }
  }

  const [qualificationModal, setQualificationModal] = useState<Qualification>()
  function onQualificationClick(qualification: Qualification) {
    if (qualificationClick) {
      // Project click overridden
      qualificationClick(qualification)
    } else {
      // Show default modal
      setQualificationModal(qualification)
    }
  }

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
      switch (s.systemuse) {
        case 1: // My projects grid
          content = (
            <div className='row justify-content-center'>
              {page.user.projects &&
                page.user.projects.map((p) => {
                  return (
                    <div
                      key={'project-tile-' + p.name}
                      className='project-tile col-md-6 col-lg-4 mb-5'
                      onClick={() => onProjectClick(p)}
                    >
                      <ProjectTileComponent project={p} />
                    </div>
                  )
                })}
            </div>
          )
          break
        case 2: // Experience
          content = (
            <VerticalTimeline layout='1-column'>
              {page.user.roles &&
                page.user.roles.map((r, i) => {
                  return (
                    <VerticalTimelineElement
                      key={'timelineElement-' + i}
                      className='role-tile vertical-timeline-element--work text-left'
                      iconStyle={
                        r.current
                          ? {
                              background: page.textColour,
                              color: 'white'
                            }
                          : {
                              background: '#aaa',
                              color: 'white'
                            }
                      }
                      icon={
                        <FontAwesomeIcon
                          style={{ marginLeft: '-10px' }}
                          icon={faBriefcase}
                          size='lg'
                        />
                      }
                    >
                      <RoleTileComponent
                        role={r}
                        onProjectClick={onProjectClick}
                      />
                    </VerticalTimelineElement>
                  )
                })}
            </VerticalTimeline>
          )
          break
        case 3: // Qualifications
          content = (
            <div className='row justify-content-center'>
              {page.user.qualifications &&
                page.user.qualifications.map((q) => {
                  return (
                    <div
                      key={'qualification-tile-' + q.name}
                      className='col-md-4 col-lg-3 col-sm-6 mb-3'
                      onClick={() => onQualificationClick(q)}
                    >
                      <QualificationTileComponent qualification={q} />
                    </div>
                  )
                })}
            </div>
          )
          break
        case 4: // Skills
          content = (
            <div className='row justify-content-center'>
              {page.user.skills && (
                <SkillGroupComponent
                  skills={page.user.skills}
                  showProjects
                  user={page.user}
                  onProjectClick={onProjectClick}
                />
              )}
            </div>
          )
          break
        default:
          content = s.content
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
                  {s.title && <h2>{s.title}</h2>}
                  {s.subTitle && (
                    <p className='section-header-desc'>
                      {displayMemo(s.subTitle)}
                    </p>
                  )}
                </div>
              </div>
              {content}
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
    <div className='react-dev-portfolio main'>
      <style>
        {`.react-dev-portfolio .project-tile h5:hover,
          .react-dev-portfolio .role-tile span,
          .react-dev-portfolio .role-tile .project-more-btn:hover,
          .react-dev-portfolio .skill .selectable:hover,
          .react-dev-portfolio .skill-group h6,
          .react-dev-portfolio .text-colour,
          .react-dev-portfolio .images,
          .react-dev-portfolio .images span {
            color: ${page.textColour};
        }
        .react-dev-portfolio a {
          color: ${page.textColour};
          text-decoration: none;
          background-color: rgba(0,0,0,0);
        }
        .react-dev-portfolio a:hover, .react-dev-portfolio a:visited, .react-dev-portfolio a:focus {
          color: ${page.textColour};
        }
        .react-dev-portfolio .media-bubble,
        .react-dev-portfolio button.pill,
        .react-dev-portfolio .carousel-indicators li {
          background-color: ${page.textColour};
          color: ${idealTextColor(page.textColour)} !important;
        }
        `}
      </style>
      <NavComponent
        backgroundColor={page.bgColour}
        textColour={page.textColour}
        title={page.user.firstname + ' ' + page.user.lastname}
        logoUrl={page.logoUrl}
        mailto={page.user.mailto}
        links={navLinks}
        externalLinks={page.externalLinks}
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
        textColour={idealTextColor(page.bgColour)}
        user={page.user}
      />
      {!projectClick && (
        <Modal
          className='react-dev-portfolio'
          show={projectModal != null}
          onHide={() => {
            setProjectModal(undefined)
          }}
          centered
          size='xl'
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: page.textColour }}>
              {projectModal ? projectModal.name : ''}
            </Modal.Title>
          </Modal.Header>
          {projectModal && <ProjectModalComponent project={projectModal} />}
          <div className='modal-footer text-center justify-content-center'>
            <button
              type='button'
              className='btn'
              data-dismiss='modal'
              style={{
                backgroundColor: page.textColour,
                color: idealTextColor(page.bgColour)
              }}
              onClick={() => {
                setProjectModal(undefined)
              }}
            >
              Close
            </button>
          </div>
        </Modal>
      )}
      {!qualificationClick && (
        <Modal
          className='react-dev-portfolio'
          show={qualificationModal != null}
          onHide={() => {
            setQualificationModal(undefined)
          }}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: page.textColour }}>
              {qualificationModal ? qualificationModal.name : ''}
            </Modal.Title>
          </Modal.Header>
          {qualificationModal && (
            <QualificationModalComponent qualification={qualificationModal} />
          )}
          <div className='modal-footer text-center justify-content-center'>
            <button
              type='button'
              className='btn'
              data-dismiss='modal'
              style={{
                backgroundColor: page.textColour,
                color: idealTextColor(page.bgColour)
              }}
              onClick={() => {
                setQualificationModal(undefined)
              }}
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}
