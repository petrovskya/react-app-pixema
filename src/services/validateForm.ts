const validateEmail = () => {
  return {
    required: "Field is required",
    pattern: {
      value:
        // eslint-disable-next-line max-len
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Write a valid email",
    },

    minLength: {
      value: 4,
      message: "Not enough characters.",
    },

    maxLength: {
      value: 40,
      message: "Max - 15 characters.",
    },
  };
};

const validateName = () => {
  return {
    required: "Field is required",
    minLength: {
      value: 3,
      message: "Not enough characters.",
    },

    maxLength: {
      value: 30,
      message: "Max - 15 characters.",
    },
    pattern: {
      value: /[A-Za-z]/,
      message: "The field contain only letters.",
    },
  };
};

const validatePassword = () => {
  return {
    required: "Field is required",
    pattern: {
      value: /^(?=.*[a-zA-Z0-9])(?!.*\s).{4,15}$/,
      message: "Password must contain at least 6 or more characters",
    },
    minLength: {
      value: 4,
      message: "Not enough characters.",
    },

    maxLength: {
      value: 15,
      message: "Max - 15 characters.",
    },
  };
};

const validateNewPassword = () => {
  return {
    required: "Field is required",
    pattern: {
      value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,15}$/,
      message: "Password must contain atleast one number, one letter and one special character",
    },
    minLength: {
      value: 4,
      message: "Not enough characters.",
    },

    maxLength: {
      value: 15,
      message: "Max - 15 characters.",
    },
  };
};

const validateTitle = () => {
  return {
    required: "Field is required",
    minLength: {
      value: 3,
      message: "Not enough characters.",
    },

    maxLength: {
      value: 30,
      message: "Max - 15 characters.",
    },
  };
};

const validateYear = () => {
  return {
    required: "Field is required",
    pattern: {
      value: /[0-9]/,
      message: "The field contain only numbers. You should enter a year.",
    },
    minLength: {
      value: 4,
      message: "Not enough characters.",
    },

    maxLength: {
      value: 4,
      message: "Max - 15 characters.",
    },
  };
};

export {
  validateEmail,
  validateName,
  validatePassword,
  validateYear,
  validateTitle,
  validateNewPassword,
};
