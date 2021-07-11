import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { Project } from '../Classes/project'
// eslint-disable-next-line no-unused-vars
import { Skill } from '../Classes/skill'
// eslint-disable-next-line no-unused-vars
import { User } from '../Classes/user'

interface GroupProps {
  skills: Skill[]
  showProjects?: boolean
  user?: User
}

export const SkillGroupComponent = ({
  skills,
  showProjects,
  user
}: GroupProps) => {
  const skillgroups = []
  if (skills) {
    if (showProjects) {
      // Uncomment below to sort skills by level
      // skills.sort((a,b) => (a.level > b.level) ? -1 : ((b.level > a.level) ? 1 : 0));
    }

    for (const skill of skills) {
      let groupindex = -1
      for (let i2 = 0; i2 < skillgroups.length; i2++) {
        if (skillgroups[i2].name === skill.group) {
          groupindex = i2
          break
        }
      }
      if (groupindex > -1) {
        skillgroups[groupindex].skills.push(skill)
      } else {
        skillgroups.push({
          name: skill.group,
          skills: [skill]
        })
      }
    }
  }

  return (
    <div
      className={`mt-5 mb-4 ${showProjects ? 'skills-large' : 'skills-small'}`}
    >
      {skillgroups.map((s, i) => (
        <div key={'skillgroup-' + i} className='skill-group mt-3 mb-3'>
          <h6>{s.name}</h6>
          {s.skills.map((skill) => (
            <SkillBarComponent
              key={'skillbar-' + i}
              skill={skill}
              showProjects={showProjects}
              user={user}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

interface SkillProps {
  skill: Skill
  showProjects?: boolean
  user?: User
}

export const SkillBarComponent = ({
  skill,
  showProjects,
  user
}: SkillProps) => {
  function addProjects(projects: Project[]) {
    const newProjects: Project[] = []
    for (const project of projects) {
      if (project.skills) {
        for (const s of project.skills) {
          if (s.name === skill.name) {
            newProjects.push(project)
          }
        }
      }
    }
    return newProjects
  }

  function getBarColour() {
    let pct = skill.level ? skill.level : 0
    if (pct == null) {
      pct = 0
    }
    pct = pct / 100

    const percentColors = [
      { pct: 0, color: { r: 211, g: 49, b: 21 } },
      { pct: 0.5, color: { r: 252, g: 196, b: 0 } },
      { pct: 1.0, color: { r: 104, g: 188, b: 0 } }
    ]

    let i = 0
    for (i = 1; i < percentColors.length - 1; i++) {
      if (pct < percentColors[i].pct) {
        break
      }
    }
    const lower = percentColors[i - 1]
    const upper = percentColors[i]
    const range = upper.pct - lower.pct
    const rangePct = (pct - lower.pct) / range
    const pctLower = 1 - rangePct
    const pctUpper = rangePct
    const color = {
      r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
      g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
      b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    }
    return 'rgb(' + [color.r, color.g, color.b].join(',') + ')'
  }

  function getSkillLevel() {
    let text = ''
    if (skill && skill.level) {
      if (skill.level > 80) {
        text = 'Excellent'
      } else if (skill.level > 60) {
        text = 'Good'
      } else if (skill.level > 40) {
        text = 'Competent'
      } else if (skill.level > 20) {
        text = 'Learning'
      } else {
        text = 'Basic'
      }
    }
    return text
  }

  const [expanded, setExpanded] = useState(false)
  const barColour = getBarColour()
  const skillLevel = getSkillLevel()
  const level = skill.level ? skill.level : 0

  const projects: Project[] = []
  if (showProjects) {
    if (user) {
      if (user.projects) {
        projects.concat(addProjects(user.projects))
      }
      if (user.roles) {
        for (const role of user.roles) {
          if (role.projects) {
            projects.concat(addProjects(role.projects))
          }
        }
      }
    }
  }

  if (skill && skill.level) {
    return (
      <div className='skill text-left mt-3 mb-3'>
        <div
          className={`${projects.length > 0 ? 'selectable' : ''} small`}
          onClick={() => setExpanded(!expanded)}
        >
          <span className='skill-label font-weight-bold text-right mr-3'>
            {skill.name}
          </span>
          <div className='perc-bar' style={{ color: barColour }}>
            <div
              className='perc-bar-progress'
              style={{ width: `${level}%`, backgroundColor: barColour }}
            >
              {projects.length > 0 && (
                <span>
                  {projects.length}{' '}
                  {projects.length === 1 ? 'Project' : 'Projects'}
                </span>
              )}
            </div>
            <span className='skill-level ml-2'>{skillLevel}</span>
          </div>
        </div>
        {expanded && (
          <div className='text-center mt-2 mb-2'>
            {projects.map((p, i) => (
              <button
                key={'skill-project-' + i}
                className='btn badge badge-primary text-primary-text m-2'
              >
                {p.name}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  } else {
    return <span className='badge badge-tertiary m-2'>{skill.name}</span>
  }
}
