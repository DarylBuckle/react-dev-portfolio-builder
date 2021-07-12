import {
  faLock,
  faLockOpen,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Project } from '../Classes/project'
import DateRange from './DateRange'
import { ImageGalleryComponent } from './ImageGallery'
import { SkillGroupComponent } from './SkillBar'

interface Props {
  project: Project
}

export const ProjectModalComponent = ({ project }: Props) => {
  return (
    <div className='modal-body project-modal' style={{ padding: '1rem 0' }}>
      <div className='container'>
        <span className='float-right text-right'>
          <strong>
            <DateRange
              startdate={project.startdate}
              enddate={project.enddate}
              current={project.current}
              showTimeSpan
            />
          </strong>
        </span>
        <span className='mt-3 mb-3'>{`Owner: ${project.owner}`}</span>
        <br />
        <span className='text-uppercase small mt-3 mb-3'>
          {project.private ? (
            <div>
              <FontAwesomeIcon icon={faLock} className='mr-1' />
              Private
            </div>
          ) : (
            <div>
              <FontAwesomeIcon icon={faLockOpen} className='mr-1' />
              Public
            </div>
          )}
        </span>
        {project.url && (
          <div className='text-lowercase text-primary mt-3'>
            <a href={project.url} target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faExternalLinkAlt} className='mr-1' />
              {project.url}
            </a>
          </div>
        )}
      </div>
      <ImageGalleryComponent
        image={project.thumbnail}
        images={project.images}
      />
      <div className='container'>
        {project.info && (
          <div
            className='details'
            dangerouslySetInnerHTML={{ __html: project.info }}
          />
        )}
        {project.skills && project.skills?.length > 0 && (
          <SkillGroupComponent skills={project.skills} />
        )}
      </div>
    </div>
  )
}
