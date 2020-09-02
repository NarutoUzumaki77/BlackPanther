const role = [
  {
    id: 1,
    title: admin,
    roles: [{ id: 2 }],
    permissions: [
      {
        title: "post:device",
        description: "create device",
      },
      {
        title: "patch:device",
        description: "update device",
      },
      {
        title: "delete:device",
        description: "delete device",
      },
    ],
  },
  {
    id: 2,
    title: "staff",
    permissions: [
      {
        title: "get:device",
        description: "get device",
      },
    ],
  },
];
