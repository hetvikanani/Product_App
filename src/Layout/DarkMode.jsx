import React, { useState } from "react";
import { Tw, ColorMode } from "twin.macro";
const StyledCard = Tw.div`
  background: linear-gradient(to right, #4b6cb7, #182848);
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  padding: 1rem;
`;
function DarkMode({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <ColorMode value={isDarkMode ? "dark" : "light"}>
      <Tw.Button onClick={toggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </Tw.Button>
      {children}
    </ColorMode>
  );
}

export default DarkMode;
