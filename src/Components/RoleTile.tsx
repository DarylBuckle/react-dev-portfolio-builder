import React, { Fragment, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { Role } from '../Classes/role'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { ProjectTileComponent } from './ProjectTile'
import DateRange from './DateRange'
// eslint-disable-next-line no-unused-vars
import { Project } from '../Classes/project'

const pageSize = 4

interface Props {
  role: Role
  onProjectClick?: (project: Project) => void
}

export const RoleTileComponent = ({ role, onProjectClick }: Props) => {
  const [projectsToShow, setProjectsToShow] = useState(pageSize)

  const projectsList = []
  if (role.projects) {
    for (const p of role.projects) {
      projectsList.push(p)
      if (projectsList.length >= projectsToShow) {
        break
      }
    }
  }

  return (
    <Fragment>
      <span className='timeline-item-duration'>
        <strong>
          <DateRange
            startdate={role.startdate}
            enddate={role.enddate}
            current={role.current}
            showTimeSpan
          />
        </strong>
      </span>
      <div className='mb-4'>
        <h2>{role.title}</h2>
        <h2>
          {role.url ? (
            <a target='_blank' href={role.url} rel='noreferrer'>
              {role.company}
            </a>
          ) : (
            <span>{role.company}</span>
          )}
        </h2>
        {role.location && (
          <a
            target='_blank'
            href={`https://www.google.com/maps/place/${role.location}`}
            rel='noreferrer'
          >
            <FontAwesomeIcon className='mr-2' icon={faMapMarkerAlt} size='lg' />
            {role.location}
          </a>
        )}
      </div>
      {role.positions && role.positions.length > 0 && (
        <div className='mb-4'>
          Positions held;
          <ul>
            {role.positions.map((p, i) => (
              <li key={'position-' + i}>
                {p.title}
                <span className='ml-2'>
                  <DateRange
                    startdate={p.startdate}
                    enddate={p.enddate}
                    current={p.current}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {role.info && (
        <div
          className='details'
          dangerouslySetInnerHTML={{ __html: role.info }}
        />
      )}

      <div className='role-projects'>
        {projectsList.length > 0 && (
          <div className='row justify-content-center text-center mt-5 mb-5'>
            {projectsList.map((p) => {
              return (
                <div
                  key={'project-tile-' + p.name}
                  className='project-tile col-md-6 col-lg-6 mb-5'
                  onClick={onProjectClick ? () => onProjectClick(p) : undefined}
                >
                  <ProjectTileComponent project={p} />
                </div>
              )
            })}
            {role.projects && projectsList.length < role.projects.length && (
              <div className='col-md-6 col-lg-6 mb-5'>
                <button
                  className='project-more-btn btn btn-link mt-3 mb-2 text-secondary hvr-grow'
                  onClick={() => setProjectsToShow(projectsToShow + pageSize)}
                >
                  <FontAwesomeIcon icon={faEllipsisH} size='4x' />
                  <div>
                    {`+${role.projects.length - projectsToShow} more projects`}
                  </div>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </Fragment>
  )
}
