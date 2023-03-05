const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPasswordConteinNumber = /\d/;
export default function validation(userData, setErrors, errors) {
  const errors1 = {};

  //?    VALIDACION DE EMAIL
  if (!regexEmail.test(userData.username) || userData.username.length > 35) {
    errors1.username =
      "Invalid username the username must be an email and must have 35 characters or less";
  }

  // ?   VALIDACION DE PASSWORD
  if (!regexPasswordConteinNumber.test(userData.password)) {
    errors1.password =
      "Invalid password the password must be between 6 and 10 characters and must have at least 1 number";
  }
  setErrors({
    ...errors,
    username: errors1.username,
    password: errors1.password,
  });
}

// Invalid username the username must be an email and must have 35 characters or less

//       "Invalid password the password must be between 6 and 10 characters and must have at least 1 number",
