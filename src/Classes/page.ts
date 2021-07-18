export interface Page {
  id?: number
  coverUrl?: string
  logoUrl?: string
  textColour?: string
  bgColour?: string
  sections: Section[]
  externalLinks?: Link[]
  hideFooter?: boolean
  footerLContent?: any
  footerCContent?: any
  footerRContent?: any
  footerEnd?: any
}
export interface Section {
  id?: number
  systemUse?: string
  identifier?: string
  linkedIdentifier?: string
  title?: string
  subTitle?: string
  bgColour?: string
  textColour?: string
  content?: any
  className?: string
  tileClassName?: string
}
export interface Link {
  id?: number
  title?: string
  url?: string
}
