import s from "./Form.module.css";
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPasswordConteinNumber = /\d/;
export default function validation(userData, setErrors, errors) {
  const errors1 = {};

  //?    VALIDACION DE EMAIL
  if (!regexEmail.test(userData.username) || userData.username.length > 35) {
    errors1.username =
      "username must be an email and must have 35 characters or less";
    // (
    //   <div className={s.conteinerError}>
    //     <ul>
    //       <li>
    //         <h4>Invalid username</h4>
    //       </li>
    //       <li>Must be an email</li>
    //       <li>Must have 35 characters or less</li>
    //     </ul>
    //   </div>
    // );
    // //
  }

  // ?   VALIDACION DE PASSWORD
  if (!regexPasswordConteinNumber.test(userData.password)) {
    errors1.password =
      "password must be between 6 and 10 characters and must have at least 1 number";
    //  (
    //   <div className={s.conteinerError}>
    //     <ul>
    //       <li>
    //         <h4>Invalid password</h4>
    //       </li>
    //       <li>must be between 6 and 10 characters long</li>
    //       <li>must have at least 1 number</li>
    //     </ul>
    //   </div>
    // );
    //
  }
  setErrors({
    ...errors,
    username: errors1.username,
    password: errors1.password,
  });
}

// Invalid username the username must be an email and must have 35 characters or less

//       "Invalid password the password must be between 6 and 10 characters and must have at least 1 number",
