import { useEffect, useState } from "react";

const useMedia = (media) => {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    setMatches(true);
    function changeMatches() {
      const { matches } = window.matchMedia(media);
      setMatches(matches);
    }
    window.addEventListener("resize", changeMatches);
    return () => {
      window.removeEventListener("resize", changeMatches);
    };
  }, [media]);

  return matches;
};

export default useMedia;
