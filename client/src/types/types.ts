import { HTMLInputTypeAttribute } from "react"

export interface ICategory {
  _id: string
  name: string
}

export interface ICreator {
  _id: string
  email: string
  roles: any[]
  skills: any[]
  favorite: any[]
  userRole: string
  username: string
}

export interface IProject {
  _id: string
  name: string
  category: ICategory[]
  tags: string[]
  shortDescription: string
  longDescription: string
  investments: number
  coverUrl: any
  presentationUrl: string
  screenShotsUrl: Blob[]
  teamMembers: string[]
  moderated: boolean
  creator: ICreator
  demoUrl: string
  walletAddress: string
  trendIndex: number
  freeCashFlow: number
  realisation: string
}

export interface ISignUpLogin {
  email: string
  password: string
}

export interface Country {
  _id: string
  name: string
}

export interface Location {
  country: Country
  city: string
}

export interface Socials {
  twitter: string
  telegram: string
  github: string
  linkedin: string
}

export interface Role {
  _id: string
  name: string
}

export interface IUser {
  location: Location
  socials: Socials
  _id: string
  email: string
  roles: Role[]
  skills: string[]
  favorite: any[]
  userRole: string
  username: string
  bio: string
  cvUrl: string
  firstName: string
  secondName: string
  avatarUrl: string
  coverUrl: string
}

export interface IDropdown<T> {
  activeOption: string
  placeholder: string
  options: T[] | undefined
  onChange: React.Dispatch<React.SetStateAction<string>>
  selection?: string
  optionSelection?: string
  border?: boolean
}

export interface ITextInput {
  value: string
  setValue: any
  placeholder: string
  type: HTMLInputTypeAttribute | undefined
  name?: string
  error?: any
}
