import {AbstractControl} from "@angular/forms";

export function emailValidator(control: AbstractControl): {[key: string]: any} | null {
  const emailRegex = /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})$/
  const value = control.value
  const result = emailRegex.test(value)

  if(!result) {
    return {emailValidator: {value}}
  }
  return null
}

export function phoneValidator(control: AbstractControl):any {
  const phoneRegex = /^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/
  const value = control.value
  const result = phoneRegex.test(value)

  if (!result) {
    return {phoneValidator: {value}}
  }

  return null
}
