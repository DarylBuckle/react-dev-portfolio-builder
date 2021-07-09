// eslint-disable-next-line no-unused-vars
import { User } from './user'

export interface Page {
  user: User
  coverUrl?: string
  logoUrl?: string
  textColour?: string
  bgColour?: string
  sections: Section[]
}

export interface Section {
  use?: number
  identifier?: string
  title?: string
  subTitle?: string
  bgColour?: string
  textColour?: string
}
