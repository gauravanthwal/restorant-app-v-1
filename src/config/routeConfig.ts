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
  {
    id: 7,
    name: "/product/{id}",
    auth: true,
    isNavShow: true,
    isDynamicRoute: true,
  },
  {
    id: 8,
    name: "/payment/success",
    auth: true,
    isNavShow: false,
  },
  {
    id: 9,
    name: "/payment/cancel",
    auth: true,
    isNavShow: false,
  },
];

export const isNavBarShowing = (routeName: string) => {
  const routeFound = routes.find((x) => {
    if (x.isDynamicRoute) {
      const inCommingRouteArr = routeName.split("/"); // eg. ['', 'product', '6575bb3ab82dc18229fe697e']
      const routeArr = x.name.split("/"); // eg. ['', 'product', '{id}']
      if (
        inCommingRouteArr.length == routeArr.length &&
        inCommingRouteArr[1] == routeArr[1]
      ) {
        x.name = x.name.replace(
          "{id}",
          inCommingRouteArr[inCommingRouteArr.length - 1] // eg. /product/6575bb3ab82dc18229fe697e
        );
        return x;
      }
    }
    return x.name == routeName;
  });

  if (routeFound?.isNavShow) return true;
  return false;
};
