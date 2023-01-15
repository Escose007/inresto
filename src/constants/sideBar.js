export const sideMenu = [
  {
    label: 'Dashboard',
    to: 'restoinfo',
  },
  {
    label: 'Menu',
    children: [
      {
        label: 'Brekafast',
        to: 'restomenu/breakfast',
      },
      {
        label: 'Lunch',
        to: 'restomenu/lunch',
      },
      {
        label: 'Dinner',
        to: 'restomenu/dinner',
      },
    ],
  },
  {
    label: 'Services',
    to: 'restoinfo',
  },
  {
      label: 'Orders',
      children: [
            {
              label: 'Todays',
              to: 'restoinfo',
            },
            {
              label: 'Yesterday',
              to: 'restoinfo',
            },
            {
              label: 'History',
              to: 'restoinfo',
            },
          ],
    },

];
