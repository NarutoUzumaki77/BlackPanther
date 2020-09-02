import CryptoJS from "crypto-js";
import { getPermissions } from "./fakeRole";

const credentials = [
  {
    id: "1598315436667",
    username: "john@gmail.com",
    password: "password",
  },
  {
    id: "1598315516158",
    username: "tom@gmail.com",
    password: "password",
  },
  {
    id: "1598315595030",
    username: "mary@gmail.com",
    password: "password",
  },
  {
    id: "1598315629452",
    username: "elaine@gmail.com",
    password: "password",
  },
  {
    id: "1598315656239",
    username: "navi@gmail.com",
    password: "password",
  },
  {
    id: "1598314636239",
    username: "admin@gmail.com",
    password: "password",
    roleId: 1,
    change_password: false,
  },
];

export function getCredentials() {
  return credentials;
}

export function signIn(username, password) {
  let data = credentials.find(
    (user) => user.username === username && user.password === password
  );
  const permissions = getPermissions(data.roleId);
  data.permissions = permissions;
  if (data) return generateJWT(data);
}

function generateJWT(data) {
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const secret = "My very confidential secret!";

  const stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
  const encodedHeader = base64url(stringifiedHeader);

  const stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
  const encodedData = base64url(stringifiedData);

  var token = encodedHeader + "." + encodedData;

  let signature = CryptoJS.HmacSHA256(token, secret);
  signature = base64url(signature);

  return token + "." + signature;;
}

function base64url(source) {
  // Encode in classical base64
  let encodedSource = CryptoJS.enc.Base64.stringify(source);

  // Remove padding equal characters
  encodedSource = encodedSource.replace(/=+$/, "");

  // Replace characters according to base64url specifications
  encodedSource = encodedSource.replace(/\+/g, "-");
  encodedSource = encodedSource.replace(/\//g, "_");

  return encodedSource;
}
