// uses useEffect to scroll to top whenever a route is changed

// https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}