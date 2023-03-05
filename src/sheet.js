let str = "dkosakd3oas";
let a = /\d/;
console.log(a.test(str));
let str2 =
  "carfsdlfsdfkdskfdskfdsflskfldskfldskfldskfldskfldskfldskfldklskflsdklsdfkldskfdlskfldskfldskflkflskfdslfkdlsfkdlsfkldfkdlsfklfkdfkldsfkdslkdlsfkdslkfdlsfkldsfksldfkldsfksdlfkdslkfskffffffflllllllllllllllllllllllllllla@gimail.com";
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log(regexEmail.test(str2));
