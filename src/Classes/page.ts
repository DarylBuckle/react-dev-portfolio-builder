export interface Page {
  id?: number
  coverUrl?: string
  logoUrl?: string
  textColour?: string
  bgColour?: string
  sections: Section[]
  externalLinks: Link[]
}
export interface Section {
  id?: number
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
  id?: number
  title?: string
  url?: string
}
