import React from "react";
import { useAppStore } from "../store/appStore.js";

const Navbar = () => {
  const user = useAppStore((state) => state.user);
  const theme = useAppStore((state) => state.theme);
  const logout = useAppStore((state) => state.logout);
  const toggleTheme = useAppStore((state) => state.toggleTheme);

  return (
    <div>
      <nav>
        <span>Theme: {theme}</span>
        <button onClick={toggleTheme}>Toggle Theme</button>
        {user ? (
          <>
            <span>
              HI,
              {user.name}
            </span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <span>Guest</span>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
