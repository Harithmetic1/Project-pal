import React from "react"

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

interface AuthContextValue {
  userDetails: registerDetails,
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type {
    registerDetails, 
    AuthContextValue
}