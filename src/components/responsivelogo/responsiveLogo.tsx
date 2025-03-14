import { useState, useEffect } from "react";
import Image from "next/image";

const ResponsiveLogo = () => {
  const [logoSrc, setLogoSrc] = useState("/imgs/lgoooo.jpg"); // Default (large screen)

  useEffect(() => {
    // Function to update logo based on screen width
    const updateLogo = () => {
      setLogoSrc(window.innerWidth < 768 ? "/imgs/logoeli.png" : "/imgs/lgoooo.jpg");
    };

    updateLogo(); // Call once to set the initial state
    window.addEventListener("resize", updateLogo); // Listen for screen resize

    return () => window.removeEventListener("resize", updateLogo); // Cleanup
  }, []);

  
  return <Image src={logoSrc} width={130} height={100} alt="Logo" />;
};

export default ResponsiveLogo;
