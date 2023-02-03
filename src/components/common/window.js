import { useEffect } from "react";

export const SCREEN = {
  DESKTOP: "DESKTOP",
  TABLET: "TABLET",
  MOBILE: "MOBILE",
};

export const BREAKPOINT = {
  XL: { label: "XL", minWidth: 1200 },
  LG: { label: "LG", minWidth: 992 },
  MD: { label: "MD", minWidth: 768 },
  SM: { label: "SM", minWidth: 576 },
};

/**
 * Check the screen width to get the current breakpoint label.
 * @param {number} width the screen width number.
 * @returns the label of current breakpoint.
 */
export const getCurrentBreakpoint = (width) => {
  if (checkSM(width)) {
    return BREAKPOINT.SM.label;
  } else if (checkMD(width)) {
    return BREAKPOINT.MD.label;
  } else if (checkLG(width)) {
    return BREAKPOINT.LG.label;
  } else {
    return BREAKPOINT.XL.label;
  }
};

/**
 * Check the screen width is Small.
 * @param {number} width the screen width number.
 * @returns true if it's match with Small screen.
 */
export const checkSM = (width) =>
  width >= BREAKPOINT.SM.minWidth && width < BREAKPOINT.MD.minWidth;

/**
 * Check the screen width is Medium.
 * @param {number} width the screen width number.
 * @returns true if it's match with Medium screen.
 */
export const checkMD = (width) =>
  width >= BREAKPOINT.MD.minWidth && width < BREAKPOINT.LG.minWidth;

/**
 * Check the screen width is Large.
 * @param {number} width the screen width number.
 * @returns true if it's match with Large screen.
 */
export const checkLG = (width) =>
  width >= BREAKPOINT.LG.minWidth && width < BREAKPOINT.XL.minWidth;

/**
 * Check the screen width is mobile.
 * @param {number} width the screen width number.
 * @returns true if it's match with mobile screen.
 */
export const checkMobile = (width) => width < BREAKPOINT.LG.minWidth;

/**
 * Check the screen width is phone.
 * @param {number} width the screen width number.
 * @returns true if it's match with phone screen.
 */
export const checkPhone = (width) => width < BREAKPOINT.MD.minWidth;

/**
 * Customized hook to observe the screen size.
 * It's toggle the screen between Desktop and mobile.
 * @param {function} handler set screen to Desktop and mobile.
 * @param {string} id id of element.
 */
export const useResizeScreen = (handler, id) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScreen = function () {
        const element = document.getElementById(id);
        if (element) {
          if (checkMobile(element.offsetWidth)) {
            handler(SCREEN.MOBILE);
          } else {
            handler(SCREEN.DESKTOP);
          }
        }
      };
      handleScreen();
      window.addEventListener("resize", handleScreen);
      return () => {
        /* Clean up function. Remove event before component unmount. */
        window.removeEventListener("resize", handleScreen);
      };
    }
  }, []);
};
export const useResizeScreenModifile = (handler) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScreen = function () {
        if (window.innerWidth) {
          if (window.innerWidth <= 992) {
            handler(SCREEN.TABLET);
          } else {
            handler(SCREEN.DESKTOP);
          }
        }
      };
      handleScreen();
      window.addEventListener("resize", handleScreen);
      return () => {
        /* Clean up function. Remove event before component unmount. */
        window.removeEventListener("resize", handleScreen);
      };
    }
  }, []);
};
/**
 * Customized hook to observe the screen size check for phone size.
 * It's toggle the screen between Desktop and mobile.
 * @param {function} handler set screen to Desktop and mobile.
 * @param {string} id id of element.
 */
export const useResizePhone = (handler, id) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScreen = function () {
        const element = document.getElementById(id);
        if (element) {
          if (checkPhone(element.offsetWidth)) {
            handler(SCREEN.MOBILE);
          } else {
            handler(SCREEN.DESKTOP);
          }
        }
      };
      handleScreen();
      window.addEventListener("resize", handleScreen);
      return () => {
        /* Clean up function. Remove event before component unmount. */
        window.removeEventListener("resize", handleScreen);
      };
    }
  }, []);
};

/**
 * Set click outside menu by customized hook.
 * @param {reference} ref connect jsx reference.
 * @param {function} handler set the new state to close the menu.
 */
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(null);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      /* Clean up function. Remove event before component unmount. */
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

/**
 * Set click outside menu by customized hook for header.
 * @param {reference} refNav connect jsx navbar reference.
 * @param {reference} refMenu connect jsx menu reference.
 * @param {function} handler set the new state to close the menu.
 */
export const useOnHeaderClickOutside = (refNav, refMenu, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!refNav.current || refNav.current.contains(event.target)) {
        return;
      }
      if (!refMenu.current || refMenu.current.contains(event.target)) {
        return;
      }
      handler(null);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      /* Clean up function. Remove event before component unmount. */
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refNav, refMenu, handler]);
};
