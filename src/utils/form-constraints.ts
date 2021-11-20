const presence = {
  allowEmpty: false,
  message: 'Por favor, completa este campo.',
}

const email = {
  message: 'Por favor, utiliza un formato de correo válido.',
}

const formConstraints = {
  email: {
    presence,
    email,
  },
}

export default formConstraints
