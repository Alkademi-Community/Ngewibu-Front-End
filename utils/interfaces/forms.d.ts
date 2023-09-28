import { FormFields, LoginFields } from "~/utils/types/forms"

export interface LoginInterface extends Omit<FormFields, "name"> {
  name: keyof LoginFields
}
