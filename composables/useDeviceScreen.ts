import { useMediaQuery } from "@vueuse/core";
/*
  sm	640px
  md	768px
  lg	1024px
  xl	1280px
  2xl	1536px
  3xl	1920px

  TVScreen > 1920px
*/

export function useDeviceScreen() {
  const isSM = useMediaQuery("(max-width: 639.99px)");
  const isMD = useMediaQuery("(min-width: 640px) and (max-width: 767.99px)");
  const isLG = useMediaQuery("(min-width: 768px) and (max-width: 1023.99px)");
  const isXL = useMediaQuery("(min-width: 1024px) and (max-width: 1279.99px)");
  const is2XL = useMediaQuery("(min-width: 1280px) and (max-width: 1535.99px)");
  const is3XL = useMediaQuery("(min-width: 1536px) and (max-width: 1919.99px)");

  const isTVScreen = useMediaQuery("(min-width: 1920px)");
  const isLandscape = useMediaQuery("(orientation: landscape)");

  return {
    isSM,
    isMD,
    isLG,
    isXL,
    is2XL,
    is3XL,
    isTVScreen,
    isLandscape,
  };
}
