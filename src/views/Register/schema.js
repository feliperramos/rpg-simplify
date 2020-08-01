export const schema = {
  email: {
    presence: {
      allowEmpty: false,
      message: "é obrigatório!",
    },
    length: {
      maximum: 32,
    },
  },
  name: {
    presence: {
      allowEmpty: false,
      message: "é obrigatório!",
    },
    length: {
      maximum: 64,
    },
  },
  password: {
    presence: {
      allowEmpty: false,
      message: "é obrigatório!",
    },
    length: {
      maximum: 128,
    },
  },
  terms: {
    presence: {
      allowEmpty: false,
      message: "é obrigatório",
    },
    checked: true,
  },
};
