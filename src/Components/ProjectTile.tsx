import React, { Fragment } from 'react'
// eslint-disable-next-line no-unused-vars
import { Project } from '../Classes/project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

interface Props {
  project: Project
}

export const ProjectTileComponent = ({ project }: Props) => {
  return (
    <Fragment>
      <h5 className='oneline' title={project.name}>
        {project.name}
      </h5>
      <div
        className='project-item hvr-grow-shadow rounded-lg lift mt-3 mb-2'
        title={project.name}
        style={{
          ...project.imagestyle,
          backgroundImage: 'url(' + project.image + ')'
        }}
      >
        {!project.image && (
          <div>
            <FontAwesomeIcon icon={faCode} size='8x' />
          </div>
        )}
      </div>
    </Fragment>
  )
}
