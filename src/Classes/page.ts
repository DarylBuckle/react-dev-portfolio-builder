// eslint-disable-next-line no-unused-vars
import { User } from './user'

export interface Page {
  user: User
  coverUrl?: string
  logoUrl?: string
  textColour?: string
  bgColour?: string
  sections: Section[]
  externalLinks: Link[]
}
export interface Section {
  systemuse?: number
  identifier?: string
  linkedIdentifier?: string
  title?: string
  subTitle?: string
  bgColour?: string
  textColour?: string
  content?: any
}
export interface Link {
  title?: string
  url?: string
}
