import { Component, OnInit } from '@angular/core';
import {FORM_ERRORS, FORM_LABELS, FORM_PLACEHOLDER, FORM_SUCCESS, FORM_VALIDATION_MESSAGES} from "../form-data";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {User} from "../users";
import {emailValidator, phoneValidator} from "../custome-validators";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formLabels = FORM_LABELS
  formErrors: any = FORM_ERRORS
  formPlaceholder = FORM_PLACEHOLDER
  formSuccess = FORM_SUCCESS
  validationMessages: any = FORM_VALIDATION_MESSAGES
  userForm!: FormGroup

  submitted!: boolean;
  user: User = new User(1, null, null, null, null, null)

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm()
  }

  onSubmit(): void {
    console.log(this.userForm.valid)
    console.log(this.userForm.value)
  }

  get form(): { [key: string]: AbstractControl } {
    return this.userForm.controls
  }

  public onValueChanged(): void {
    const form = this.userForm

    Object.keys(this.formErrors).forEach(field => {
      this.formErrors[field] = ''

      const control = form.get(field)

      if ((control?.dirty || control?.touched) && control.invalid) {
        const messages = this.validationMessages[field]

        Object.keys(control.errors as ValidationErrors).some(key => this.formErrors[field] = messages[key])
      }
    })
  }


  private buildForm(): void {
    this.userForm = this.fb.group({
      name: [this.user.name, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      company: [this.user.company, [Validators.required]],
      phone: [this.user.phone, [Validators.required, phoneValidator]],
      email: [this.user.email, [Validators.required, emailValidator]],
      message: [this.user.message, [Validators.required]]
    })
    this.userForm.valueChanges.subscribe((data) => this.onValueChanged())
  }

}
