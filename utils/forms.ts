import { LoginInterface, RegisterInterface } from "~/utils/interfaces/forms"

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

export const InputFormRegister: RegisterInterface[] = [
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Name",
    value: "",
    disabled: false
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Email",
    value: "",
    disabled: false
  },
  {
    name: "username",
    type: "text",
    label: "Username",
    placeholder: "Username",
    value: "",
    disabled: false,
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Password",
    value: "",
    disabled: false,
  }
]
