import React, { ReactElement } from "react"

interface ComponentWithChild {
  children: ReactElement
}

interface registerDetails {
    email: string,
  username: string,
  first_name: string,
  last_name: string,
  bio: string,
  title: string,
  github: string,
  twitter: string,
  linkedIn: string,
  password: string
}

interface validPasswordState {
  lowerCasePattern: boolean,
  upperCasePattern: boolean,
  digitPattern: boolean,
  tenCharPattern: boolean,
  confirmAllPattern: boolean
}

interface AuthContextValue {
  userDetails: registerDetails,
  validPassword: validPasswordState,
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleValidPassword: () => void,
}

export type {
    ComponentWithChild,
    registerDetails, 
    AuthContextValue,
    validPasswordState
}