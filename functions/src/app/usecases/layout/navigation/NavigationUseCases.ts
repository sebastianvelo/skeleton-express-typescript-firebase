import { NavigationProps } from "../../../model/layout/common/Props";

const getActions = () => [
  {
    content: "Home",
    route: "/home"
  },
];

const getMenu = () => ({
  options: [
    {
      route: "/profile",
      content: "Profile"
    },
    {
      route: "/account",
      content: "Account"
    }
  ],
  toggler: {
    alt: "https://picsum.photos/200",
    src: "https://picsum.photos/200"
  }
});

const getNavigation = (): NavigationProps => ({
  header: "Template!",
  actions: getActions(),
  menu: getMenu()
});

export default getNavigation;
