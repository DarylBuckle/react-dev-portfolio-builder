export interface Qualification {
  id?: number
  name: string // The name/title of the qualifcation.
  location?: string // The place of study.
  grade?: string // Grade obtained.
  image?: string // The url of an image to show instead of an icon. This can be the url of a public image or the path of a local asset.
  icon?: any // An icon to use in place of an image
  imagestyle?: object // If image is set you can use this to apply custom styles to the image.
  startdate?: Date // When you started studying. Must have either 'enddate' set or 'current' === true.
  enddate?: Date // When you finished/gained the qualifcation. If 'startdate' is not set only the enddate will show.
  current?: boolean // Whether you are still studying for this qualification.
  info?: string // Additional details. Shows on modal screen only. Accepts html.
}
