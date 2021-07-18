import PortfolioPage from './PortfolioPage'

import { Page } from './Classes/page'
import { User } from './Classes/user'
import { Project } from './Classes/project'
import { Qualification } from './Classes/qualification'
import { Role } from './Classes/role'
import { Skill } from './Classes/skill'

import { NavComponent } from './Components/Nav'
import {
  HeaderSectionComponent,
  SectionComponent,
  FooterComponent
} from './Components/Section'
import { ProjectTileComponent } from './Components/ProjectTile'
import { RoleTileComponent } from './Components/RoleTile'
import { QualificationTileComponent } from './Components/QualificationTile'
import { SkillGroupComponent, SkillBarComponent } from './Components/SkillBar'
import { ProjectModalComponent } from './Components/ProjectModal'
import { QualificationModalComponent } from './Components/QualificationModal'

import './style.css'

export {
  PortfolioPage,
  NavComponent,
  HeaderSectionComponent,
  SectionComponent,
  FooterComponent,
  ProjectTileComponent,
  RoleTileComponent,
  QualificationTileComponent,
  SkillGroupComponent,
  SkillBarComponent,
  ProjectModalComponent,
  QualificationModalComponent
}

export type { Page, User, Project, Qualification, Role, Skill }
