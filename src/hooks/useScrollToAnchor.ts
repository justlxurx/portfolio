import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToAnchor = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
};

export default useScrollToAnchor;
