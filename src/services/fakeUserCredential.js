const credentials = [
  {
    id: "1598315436667",
    username: "john@gmail.com",		
    password: "password"
  },
  {
    id: "1598315516158",
    username: "tom@gmail.com",		
    password: "password"
  },
  {
    id: "1598315595030",
    username: "mary@gmail.com",		
    password: "password"
  },
  {
    id: "1598315629452",
    username: "elaine@gmail.com",		
    password: "password"
  },
 	{
    id: "1598315656239",
    username: "navi@gmail.com",		
    password: "password"
  }
]

export function getCredentials() {
	return credentials;
}

export function signIn(username, password) {
	return credentials.find(user => user.username === username && user.password === password);
}

