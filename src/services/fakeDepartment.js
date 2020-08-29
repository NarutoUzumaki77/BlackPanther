const departments = [
	{
		"id": "1598405854890",
		"title": "Engineering",
		"managerId": ""
	},
	{
		"id": "1598405936478",
		"title": "Accounting",
		"managerId": ""
	},
	{
		"id": "1598405936478",
		"title": "Supply and Logistics",
		"managerId": ""
	}
]

function getAllDepartments() {
	return departments;
}

function getDepartment(id) {
	return departments.find(d => d.id === id);
}

function deleteDepartment(id) {
	let departInDB = departments.find(d => d.id === id);
  departments.splice(departments.indexOf(departInDB), 1);
  return departments;
}

