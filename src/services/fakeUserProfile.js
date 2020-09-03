
const userProfile = [
  {
    "address": "850 Main Street",
    "city": "London",
    "state": "London",
    "country": "UK",
    "dob": "1980-05-03",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@gmail.com",
    "mobilePhone": "+442079460780",
    "zipCode": "WC2N",
    "dateCreated": "2015-08-21T13:15:31",
    "dateUpdated": "2015-08-24T14:21:15",
    "id": "dUze4lyo9s397kioAZ3SHn"
  },
  {
    "address": "125 West Street",
    "city": "Thunder Bay",
    "state": "Ontario",
    "country": "Canada",
    "dob": "1982-07-13",
    "firstName": "Tom",
    "lastName": "Piscali",
    "email": "tom@gmail.com",
    "mobilePhone": "+18073452347",
    "zipCode": "N3RT7U",
    "dateCreated": "2017-08-21T13:15:31",
    "dateUpdated": "2017-08-24T14:21:15",
    "id": "dUze4lyo9s397kioAZ3SHt"
  },
  {
    "address": "12 College Common Blv",
    "city": "Waterloo",
    "state": "Ontario",
    "country": "Canada",
    "dob": "1982-07-13",
    "firstName": "Mary",
    "lastName": "Nwokoma",
    "email": "mary@gmail.com",
    "mobilePhone": "+18073459087",
    "zipCode": "N2G1G4",
    "dateCreated": "2017-08-21T13:15:31",
    "dateUpdated": "2017-08-24T14:21:15",
    "id": "dUze4lyo9s347kioAZ3SHt"
  },
  {
    "address": "15-16 High Street",
    "city": "Kitchener",
    "state": "Ontario",
    "country": "Canada",
    "dob": "1987-10-13",
    "firstName": "Elaine",
    "lastName": "Beckham",
    "email": "elaine@gmail.com",
    "mobilePhone": "+18071239087",
    "zipCode": "N2K3N7",
    "dateCreated": "2017-08-21T13:15:31",
    "dateUpdated": "2017-08-24T14:21:15",
    "id": "dUze7lyo9s347kioAZ3SHt"
  },
  {
    "address": "22 Church Street",
    "city": "Peckham",
    "state": "Ontario",
    "country": "Canada",
    "dob": "1987-12-13",
    "firstName": "Navi",
    "lastName": "Johnson",
    "email": "navi@gmail.com",
    "mobilePhone": "+18071739087",
    "zipCode": "N2J6E5",
    "dateCreated": "2017-08-21T13:15:31",
    "dateUpdated": "2017-08-24T14:21:15",
    "id": "dUze7lyo9s347kioAZ3FHt"
  },
  {
    "address": "16-83 Gage Street",
    "city": "Kitchener",
    "state": "Ontario",
    "country": "Canada",
    "dob": "1989-12-13",
    "firstName": "Gilbert",
    "lastName": "Awesome",
    "email": "admin@gmail.com",
    "mobilePhone": "+18071739087",
    "zipCode": "N2J6E5",
    "dateCreated": "2017-08-21T13:15:31",
    "dateUpdated": "2017-08-24T14:21:15",
    "id": "dUze7lyo9s347kioAZ3FHt"
  }
]

export function getAllUser() { 
	return userProfile;
}

export function getUserProfile(email) {
	return userProfile.find(user => user.email === email);
}

export function createUser(user) {
	let userInDb = userProfile.find(u => u.email === user.email) || {};
	userInDb.address = user.address
	userInDb.city = user.city
	userInDb.state = user.state
	userInDb.country = user.country
	userInDb.dob = user.dob
	userInDb.firstName = user.firstName
	userInDb.lastName = user.lastName
	userInDb.mobilePhone = user.mobilePhone
	userInDb.zipCode = user.zipCode
	
	
	if (!userInDb.id) {
    	userInDb.id = Date.now().toString();
    	userProfile.push(userInDb);
    	
    	// Todo add to login info too
  	}
  	
  	return userInDb;
}

export function deleteUser(id) {
  let userInDb = userProfile.find(m => m.id === id);
  userProfile.splice(userProfile.indexOf(userInDb), 1);
  return userInDb;
}
