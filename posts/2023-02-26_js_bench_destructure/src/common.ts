
export const specialUser = {
  admin: "root",
  moderator: "sudo",
} as const

export type User = {
  username: string
  loggedIn: boolean
}
