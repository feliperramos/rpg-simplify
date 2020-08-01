export const schema = {
  email: {
    presence: {
      allowEmpty: false,
      message: "Obrigatório",
    },
    email: true,
    length: {
      maximum: 64,
    },
  },
  password: {
    presence: {
      allowEmpty: false,
      message: "Obrigatório",
    },
    length: {
      maximum: 128,
    },
  },
};
