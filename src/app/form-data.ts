
export const FORM_LABELS = {
  name: 'Full Name',
  company: 'Company Name',
  phone: 'Phone',
  email: 'E-mail',
  message: 'Write Us Messages',
}

export const FORM_PLACEHOLDER = {
  name: 'Enter your full name...',
  company: 'Enter company...',
  phone: '+380...',
  email: 'myemail@gmail.com',
  message: ' ',
}

export const FORM_SUCCESS = {
  name: 'Accepted!',
  company: 'Accepted!',
  phone: 'Accepted!',
  email: 'Accepted!',
  message: 'Accepted!',
}

export const FORM_ERRORS = {
  name: '',
  company: '',
  phone: '',
  email: '',
  message: '',
}

export const FORM_VALIDATION_MESSAGES = {
  name: {
    required: 'Full Name is required.',
    minlength: 'The name must have at least 4 characters.',
    maxlength: 'The name must have no more than 20 characters.'
  },
  company: {
    required: 'Company is required.',
  },
  phone: {
    required: 'Phone is required.',
    phoneValidator: 'Invalid phone number'
  },
  email: {
    required: 'E-mail is required.',
    emailValidator: 'Incorrect email format.',
  },
  message: {
    required: 'Write Us Messages.',
  }
}
