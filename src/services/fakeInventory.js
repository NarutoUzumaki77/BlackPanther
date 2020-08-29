
const inventory = [
  {
    "product": "iPhone",
    "type": "Phone",
    "manufacturer": "Apple",
    "Name": "iPhone X",
    "color": "Black",
    "details": "6.5-inch (diagonal) all-screen OLED Multi‑Touch display, Super Retina XDR display, HDR display, 2688-by-1242-pixel resolution at 458 ppi",
    "purchase_date": "2019-08-21",
    "location": {"id": "1598692204147", "name": "Toronto"},
    "status": "Available",
    "id": "dUze4lyo9s397kioAZ3SHn"
  },
  {
    "product": "iMac",
    "type": "Laptop",
    "manufacturer": "Apple",
    "Name": "iMac 2019",
    "color": "White",
    "details": "6.5-inch (diagonal) all-screen OLED Multi‑Touch display, Super Retina XDR display, HDR display, 2688-by-1242-pixel resolution at 458 ppi",
    "purchase_date": "2019-08-21",
    "location": {"id": "1598692204147", "name": "Toronto"},
    "status": "Available",
    "id": "dUze4lyo9s397kirAZ3SHn"
  },
  {
    "product": "XPS",
    "type": "Laptop",
    "manufacturer": "Dell",
    "Name": "Dell XPS",
    "color": "Grey",
    "details": "6.5-inch (diagonal) all-screen OLED Multi‑Touch display, Super Retina XDR display, HDR display, 2688-by-1242-pixel resolution at 458 ppi",
    "purchase_date": "2019-08-21",
    "location": {"id": "1598692204147", "name": "Toronto"},
    "status": "Available",
    "id": "dUze4lyo9s397kirAZ3SHu"
  },
  {
    "product": "Civic",
    "type": "Vehicle",
    "manufacturer": "Honda",
    "Name": "Honda Civic touring",
    "color": "Black",
    "details": "6.5-inch (diagonal) all-screen OLED Multi‑Touch display, Super Retina XDR display, HDR display, 2688-by-1242-pixel resolution at 458 ppi",
    "purchase_date": "2019-08-21",
    "location": {"id": "1598692204247", "name": "Waterloo"},
    "status": "Available",
    "id": "dUze4lyo9s397kidAZ3SHu"
  },
  {
    "product": "Prius",
    "type": "Vehicle",
    "manufacturer": "Toyota",
    "Name": "Prius 2017",
    "color": "Blue",
    "details": "6.5-inch (diagonal) all-screen OLED Multi‑Touch display, Super Retina XDR display, HDR display, 2688-by-1242-pixel resolution at 458 ppi",
    "purchase_date": "2019-08-21",
    "location": {"id": "1598692204147", "name": "Toronto"},
    "status": "Available",
    "id": "dUze4lyo9s397kidAZ3SHu"
  }
]

const assignInventory = [
  {
    "userId": "dUze4lyo9s397kioAZ3SHn",
    "inventoryId": "dUze4lyo9s397kidAZ3SHu",
    "status": "recieved",
    "from_user": "",
    "dateAssigned": "2017-08-21",
    "id": "dUze4lyo9s397"
  },
  {
    "userId": "dUze4lyo9s397kioAZ3SHn",
    "inventoryId": "dUze4lyo9s397kirAZ3SHu",
    "status": "recieved",
    "from_user": "",
    "dateAssigned": "2017-08-21",
    "id": "dUze4lyo4s397"
  },
  {
    "userId": "dUze4lyo9s347kioAZ3SHt",
    "inventoryId": "dUze4lyo9s397kioAZ3SHn",
    "status": "recieved",
    "from_user": "",
    "dateAssigned": "2017-08-21",
    "id": "dUze4g3o4s397"
  }
]

export function assignItemToUser(item_id, user_id) {
	ItemInDB = inventory.find(i => i.id === item.id)
	
	const d = new Date()
	dateAssigned = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()
}

export function getAllInventoryItems() {
	return inventory;
}

export function getInventoryItem(id) {
	return inventory.find(i => i.id === id);
}

export function saveInventoryItem(item) {
	let ItemInDB = inventory.find(i => i.id === item.id) || {};
	ItemInDB.product = user.product
	ItemInDB.type = user.type
	ItemInDB.manufacturer = user.manufacturer
	ItemInDB.color = user.color
	ItemInDB.detail = user.detail
	ItemInDB.purchase_date = user.purchase_date
	
	if (!ItemInDB.id) {
    	ItemInDB.id = Date.now().toString();
    	inventory.push(ItemInDB);
  	}
  	
  	return ItemInDB;
}

export function deleteInventoryItem(id) {
	let ItemInDB = inventory.find(i => i.id === id);
	inventory.splice(inventory.indexOf(ItemInDB), 1)
	return inventory
}