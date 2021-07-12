import { faAward, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Qualification } from '../Classes/qualification'
import DateRange from './DateRange'

interface Props {
  qualification: Qualification
}

export const QualificationModalComponent = ({ qualification }: Props) => {
  return (
    <div
      className='modal-body qualification-modal'
      style={{ padding: '1rem 0' }}
    >
      <div className='text-center icon-holder mt-1 mb-3'>
        {qualification.image ? (
          <img src={qualification.image} />
        ) : qualification.icon ? (
          qualification.icon
        ) : (
          <FontAwesomeIcon icon={faAward} size='6x' />
        )}
      </div>
      <div className='container mt-2 mb-3 text-center'>
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
        <div className='mt-2 mb-2'>
          <span className='font-weight-bold'>{`Grade: ${qualification.grade}`}</span>
        </div>
      </div>
      <div className='container'>
        {qualification.info && (
          <div
            className='details'
            dangerouslySetInnerHTML={{ __html: qualification.info }}
          />
        )}
      </div>
    </div>
  )
}
