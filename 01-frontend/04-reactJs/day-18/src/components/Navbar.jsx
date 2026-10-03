import { useState } from "react";

const Navbar = ({ changeTheme }) => {
  const [theme, setTheme] = useState("");
  return (
    <div>
      <h1>Navbar</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          changeTheme(theme);
          setTheme("");
        }}
      >
        <input
          type="text"
          placeholder="Enter theme"
          value={theme}
          onChange={(e) => {
            setTheme(e.target.value);
          }}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Navbar;
