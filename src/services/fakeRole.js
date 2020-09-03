const role = [
  {
    id: 1,
    title: "admin",
    roles: [{ id: 2 }],
    permissions: [
      {
        action: "post:device",
        description: "create device",
      },
      {
        action: "patch:device",
        description: "update device",
      },
      {
        action: "delete:device",
        description: "delete device",
      },
    ],
  },
  {
    id: 2,
    title: "staff",
    permissions: [
      {
        action: "get:device",
        description: "get device",
      },
    ],
  },
];

export function getPermissions(role_id) {
  const user_role = role.find((r) => r.id === role_id);
  return user_role.permissions;
}



