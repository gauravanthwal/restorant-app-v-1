export const routes = [
  {
    id: 1,
    name: "/login",
    auth: false,
    isNavShow: false,
  },
  {
    id: 2,
    name: "/register",
    auth: false,
    isNavShow: false,
  },
  {
    id: 3,
    name: "/menu",
    auth: false,
    isNavShow: true,
  },
  {
    id: 4,
    name: "/",
    auth: false,
    isNavShow: true,
  },
  {
    id: 5,
    name: "/cart",
    auth: true,
    isNavShow: true,
  },
  {
    id: 6,
    name: "/orders",
    auth: true,
    isNavShow: true,
  },
];

export const isNavBarShowing = (routeName: string) => {
  const routeFound = routes.find((x) => x.name == routeName);
  if (routeFound?.isNavShow) return true;
  return false;
};
