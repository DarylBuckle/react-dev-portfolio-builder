import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Qualification } from '../Classes/qualification'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import DateRange from './DateRange'

interface Props {
  qualification: Qualification
}

export const QualificationTileComponent = ({ qualification }: Props) => {
  return (
    <div
      className='qualification-item hvr-grow-shadow rounded-lg lift mt-3 mb-2'
      title={qualification.name}
      style={qualification.imagestyle}
    >
      <div className='icon-holder mb-3'>
        {qualification.image ? (
          <img src={qualification.image} />
        ) : qualification.icon ? (
          qualification.icon
        ) : (
          <FontAwesomeIcon icon={faAward} size='6x' />
        )}
      </div>
      <h5 title={qualification.name}>{qualification.name}</h5>
      {qualification.location && (
        <span className='mb-2'>
          <FontAwesomeIcon className='mr-2' icon={faMapMarkerAlt} size='1x' />
          {qualification.location}
        </span>
      )}
      {(qualification.startdate || qualification.enddate) && (
        <div className='text-colour mb-2'>
          <DateRange
            startdate={qualification.startdate}
            enddate={qualification.enddate}
            current={qualification.current}
            yearOnly
          />
        </div>
      )}
      <h6 title={qualification.grade}>{qualification.grade}</h6>
    </div>
  )
}
