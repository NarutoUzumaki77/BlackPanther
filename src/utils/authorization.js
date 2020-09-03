import jwtDecode from "jwt-decode";

export function isAuthorized(action) {
  const user = decode_token();
  const permissions = user.permissions;
  const auth = permissions.find((p) => p.action === action);
  if (auth) return true;
  return false;
}

export function decode_token() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {}
}
