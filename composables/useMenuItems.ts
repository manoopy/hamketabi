export const useMenuItems = () => {
  const MenuItems = [
    {
      title: "خانه",
      route: "/",
      icon: "i-solar-home-2-broken"
    },
    {
      title: "پویش ها",
      route: "/campaigns",
      icon: "i-solar-box-minimalistic-broken"
    },
    {
      title: "درباره ما",
      route: "/about-us",
      icon: "i-solar-smartphone-rotate-angle-bold-duotone"
    },
  ];

  return {
    MenuItems,
  };
};
