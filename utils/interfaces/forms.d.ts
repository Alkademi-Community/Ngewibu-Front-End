import { EventFields, FormFields, LoginFields, RegisterFields } from "~/utils/types/forms"

export interface LoginInterface extends Omit<FormFields, "name"> {
  name: keyof LoginFields
}

export interface RegisterInterface extends Omit<FormFields, "name"> {
  name: keyof RegisterFields
}

export interface EventInterface extends Omit<FormFields, "name"> {
  name: keyof EventFields
}
