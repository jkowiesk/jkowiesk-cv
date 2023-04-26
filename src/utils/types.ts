export type Skill = {
  name: string
  displayName: string
  description: string
  color: string
  link: string
  rating: 1 | 2 | 3 | 4 | 5
  customTexture?: boolean
  projects: string[]
}

export type Message = {
  fullName: string
  lastName: string
  email: string
  message: string
}

export type ReturnCode = {
  code: number
  message: string
}
