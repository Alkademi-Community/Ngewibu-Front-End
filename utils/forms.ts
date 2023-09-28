import { LoginInterface } from "~/utils/interfaces/forms"

export const InputFormLogin: LoginInterface[] = [
  {
    name: "username",
    type: "text",
    label: "Username / Email",
    placeholder: "Username / Email",
    value: "",
    disabled: false
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Password",
    value: "",
    disabled: false
  }
]
