export type FormFields = {
  name: string
  label: string
  placeholder: string
  type: string
  value: string | number
  disabled: boolean
  checked?: boolean
}

export type LoginFields = {
  username: string
  password: string
}

export type RegisterFields = {
  name: string
  username: string
  email: string
  password: string
}
