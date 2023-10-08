export type FormFields = {
  name: string
  label: string
  placeholder: string
  type: string
  value: string | number
  disabled: boolean
  required: boolean
  checked?: boolean
}

export type LoginFields = {
  username: string
  password: string
}

export type RegisterFields = {
  name: string
  email: string
  username: string
  password: string
}

export type EventFields = {
  image: any
  name: string
  description: string
  type: string
  url: string
  startDate: string | Date
  endDate: string | Date
  city: number
  address: string
}
