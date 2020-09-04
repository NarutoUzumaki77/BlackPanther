import { getUserProfileById } from "./fakeUserProfile";

const inventory = [
  {
    product: "iPhone",
    type: "Phone",
    manufacturer: "Apple",
    name: "iPhone X",
    color: "Black",
    details:
      "6.5-inch (diagonal) all-screen OLED Multi‑Touch display, Super Retina XDR display, HDR display, 2688-by-1242-pixel resolution at 458 ppi",
    purchase_date: "2019-08-21",
    location: { id: "1598692204147", name: "Toronto" },
    status: "Active",
    id: "dUze4lyo9s397kioAZ3SHn",
  },
  {
    product: "iMac",
    type: "Laptop",
    manufacturer: "Apple",
    name: "iMac 2019",
    color: "White",
    details:
      "6.5-inch (diagonal) all-screen OLED Multi‑Touch display, Super Retina XDR display, HDR display, 2688-by-1242-pixel resolution at 458 ppi",
    purchase_date: "2019-08-21",
    location: { id: "1598692204147", name: "Toronto" },
    status: "Active",
    id: "dUze4lyo9s397kirAZ3SHn",
  },
  {
    product: "XPS",
    type: "Laptop",
    manufacturer: "Dell",
    name: "Dell XPS",
    color: "Grey",
    details:
      "6.5-inch (diagonal) all-screen OLED Multi‑Touch display, Super Retina XDR display, HDR display, 2688-by-1242-pixel resolution at 458 ppi",
    purchase_date: "2019-08-21",
    location: { id: "1598692204147", name: "Toronto" },
    status: "Active",
    id: "dUze4lyo9s397kirAZ3SHu",
  },
  {
    product: "Civic",
    type: "Vehicle",
    manufacturer: "Honda",
    name: "Touring",
    color: "Black",
    details:
      "6.5-inch (diagonal) all-screen OLED Multi‑Touch display, Super Retina XDR display, HDR display, 2688-by-1242-pixel resolution at 458 ppi",
    purchase_date: "2019-08-21",
    location: { id: "1598692204247", name: "Waterloo" },
    status: "Active",
    id: "dUze4lyo9s397kidAZ3SHu",
  },
  {
    product: "Prius",
    type: "Vehicle",
    manufacturer: "Toyota",
    name: "Prius 2017",
    color: "Blue",
    details:
      "6.5-inch (diagonal) all-screen OLED Multi‑Touch display, Super Retina XDR display, HDR display, 2688-by-1242-pixel resolution at 458 ppi",
    purchase_date: "2019-08-21",
    location: { id: "1598692204147", name: "Toronto" },
    status: "Active",
    id: "dUze4lyo9s397kudAZ3SHu",
  },
];

const assignInventory = [
  {
    userId: "dUze7lyo9s347kioAZ3FHt",
    inventoryId: "dUze4lyo9s397kioAZ3SHn",
    status: "recieved",
    from_user: "",
    new_user: "",
    dateAssigned: "2020-08-21",
    id: "dUze4lyo9s397",
  },
  {
    userId: "dUze4lyo9s347kioAZ3FHt",
    inventoryId: "dUze4lyo9s397kudAZ3SHu",
    status: "recieved",
    from_user: "",
    new_user: "",
    dateAssigned: "2020-08-21",
    id: "dUze4lyo4s397",
  },
  {
    userId: "dUze7lyo9s347kioAZ3FHt",
    inventoryId: "dUze4lyo9s397kidAZ3SHu",
    status: "recieved",
    from_user: "",
    new_user: "",
    dateAssigned: "2019-08-21",
    id: "dUze4g3o4s397",
  },
];

export function assignItemToUser(item_id, user_id) {
  const d = new Date();
  const dateAssigned = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();

  const assigned = assignInventory.find((item) => item.inventoryId === item_id);
  assigned.dateAssigned = dateAssigned;
  assigned.status = "pending";
  assigned.new_user = user_id;

  return assigned;
}

export function isItemAssignedToUser(item_id, user_id) {
  const isAssigned = assignInventory.find(
    (item) =>
      item.inventoryId === item_id &&
      item.userId === user_id &&
      item.status === "recieved"
  );
  return isAssigned ? true : false;
}

export function getAllItems() {
  return inventory.map((i) => {
    const assigned = getAssignedUser(i.id);
    if (!assigned) {
      i.assigned = { id: "", name: "-" };
      return i;
    }

    const userProfile = getUserProfileById(assigned.userId);
    i.assigned = {
      id: assigned.userId,
      name: `${userProfile.firstName} ${userProfile.lastName}`,
      status: assigned.status,
    };
    return i;
  });
}

function getAssignedUser(inventoryId) {
  return assignInventory.find((a) => a.inventoryId === inventoryId);
}

export function getItem(id) {
  const item = inventory.find((i) => i.id === id);
  const assigned = getAssignedUser(item.id);
  if (!assigned) {
    item.assigned = { id: "", name: "-" };
    return item;
  }

  const userProfile = getUserProfileById(assigned.userId);
  item.assigned = {
    id: assigned.userId,
    name: `${userProfile.firstName} ${userProfile.lastName}`,
    status: assigned.status,
  };
  return item;
}

export function saveItem(item) {
  let ItemInDB = inventory.find((i) => i.id === item.id) || {};
  ItemInDB.name = item.name;
  ItemInDB.status = item.status;
  ItemInDB.product = item.product;
  ItemInDB.type = item.type;
  ItemInDB.manufacturer = item.manufacturer;
  ItemInDB.color = item.color;
  ItemInDB.details = item.details;
  ItemInDB.purchase_date = item.purchase_date;
  ItemInDB.location = item.location;

  if (!ItemInDB.id) {
    ItemInDB.id = Date.now().toString();
    inventory.push(ItemInDB);
  }

  return ItemInDB;
}

export function deleteItem(id) {
  let ItemInDB = inventory.find((i) => i.id === id);
  inventory.splice(inventory.indexOf(ItemInDB), 1);
  return inventory;
}
