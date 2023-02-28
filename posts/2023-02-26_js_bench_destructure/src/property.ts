import { specialUser, User } from "./common.ts"
import { match } from "npm:ts-pattern"

function access(user: User) {
  return match(user)
    .with(
      { username: specialUser.admin, loggedIn: true },
      () => "logged in as admin",
    )
    .with(
      { username: specialUser.moderator, loggedIn: true },
      () => "you're mod",
    )
    .with({ loggedIn: true }, () => "logged in")
    .otherwise(() => "You're not logged in")
}
