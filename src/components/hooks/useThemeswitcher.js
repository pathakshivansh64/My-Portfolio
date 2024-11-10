import React, { useEffect, useState } from "react";

const useThemeswitcher = () => {
  const preferDarkquery = "(prefer-color-schema:dark)";
  const [mode, setmode] = useState("");

  useEffect(() => {
    const mediaquery = window.matchMedia(preferDarkquery);
    const userPref = window.localStorage.getItem("theme");
    const handlechange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setmode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaquery.matches ? "dark" : "light";
        setmode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    handlechange();

    mediaquery.addEventListener("change", handlechange);
    return () => mediaquery.removeEventListener("change", handlechange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } 
    
    if(mode==='light'){
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setmode];
};

export default useThemeswitcher;
