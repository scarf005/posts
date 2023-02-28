import { specialUser, User } from "./common.ts"
import { match } from "npm:ts-pattern"

function destructure(user: User) {
  const { admin, moderator } = specialUser
  return match(user)
    .with({ username: admin, loggedIn: true }, () => "logged in as admin")
    .with({ username: moderator, loggedIn: true }, () => "you're mod")
    .with({ loggedIn: true }, () => "logged in")
    .otherwise(() => "You're not logged in")
}
