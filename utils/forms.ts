import { EventInterface, LoginInterface, RegisterInterface } from "~/utils/interfaces/forms"

export const InputFormLogin: LoginInterface[] = [
  {
    name: "username",
    type: "text",
    label: "Username / Email",
    placeholder: "Username / Email",
    value: "",
    disabled: false,
    required: true
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Password",
    value: "",
    disabled: false,
    required: true
  }
]

export const InputFormRegister: RegisterInterface[] = [
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Name",
    value: "",
    disabled: false,
    required: true
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Email",
    value: "",
    disabled: false,
    required: true
  },
  {
    name: "username",
    type: "text",
    label: "Username",
    placeholder: "Username",
    value: "",
    disabled: false,
    required: true
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Password",
    value: "",
    disabled: false,
    required: true
  }
]

export const InputFormEvent: EventInterface[] = [
  {
    name: "image",
    type: "file",
    label: "Event Image",
    placeholder: "Event Image",
    value: "",
    disabled: false,
    required: true
  },
  {
    name: "name",
    type: "text",
    label: "Event Name",
    placeholder: "Enter event name...",
    value: "",
    disabled: false,
    required: true
  },
  {
    name: "description",
    type: "textarea",
    label: "Event Description",
    placeholder: "Event Description",
    value: "",
    disabled: false,
    required: true
  },
  {
    name: "type",
    type: "radio",
    label: "Event Type",
    placeholder: "Event Type",
    value: "",
    disabled: false,
    required: true
  },
  {
    name: "url",
    type: "text",
    label: "",
    placeholder: "",
    value: "",
    disabled: false,
    required: true
  },
  {
    name: "startDate",
    type: "datetime-local",
    label: "Event Start-End",
    placeholder: "Event Start-End",
    value: "",
    disabled: false,
    required: true
  },
  {
    name: "endDate",
    type: "datetime-local",
    label: "Event Start-End",
    placeholder: "Event Start-End",
    value: "",
    disabled: false,
    required: true
  },
  {
    name: "city",
    type: "text",
    label: "Event City",
    placeholder: "Event City",
    value: "",
    disabled: false,
    required: true
  },
  {
    name: "address",
    type: "text",
    label: "Event Address",
    placeholder: "Event Address",
    value: "",
    disabled: false,
    required: true
  }
]
