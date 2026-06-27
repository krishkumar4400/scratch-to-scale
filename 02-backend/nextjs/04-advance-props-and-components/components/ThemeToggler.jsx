/*
 Context API:
    - Context API: Global state without prop drilling.
    - Custom Hooks: Reusable login (use theme).
    - Component composition: Themed components work together.
    - Conditional Styling: Classes change based on Theme.

  This global transfer of information is known as context API.

  --- foundation of state management libraries

  State management libraries: redux-toolkit, zustand, react bydefault: context API.

  context api is simplest form of state management.
  it gives us a whole global context and whenever there is a state changed we can pass the state to global context and anybody wants to see what the state is you get the state value from here. 
  
  context keeps the application aware.

  it saves us from prop drilling as well as make the application seemless as we grow more in the component. 

  Context API:
    first we will create theme context (it can be another context as well like - createAuthContext, createCardContext)
    second we will create theme provider component (it might be create authProviderComponent, createCardComponent).


        export
    (provider == wrapper -> children)


    hook -> hook is just a function 


 */

import { createContext, useContext, useState } from "react";

// create theme context
const ThemeContext = createContext(); // this is the container - there could be anything in this container.
const AuthContext = createContext(); // we can create as many as we like contexts

// theme provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// Custom hook to use theme
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within Themeprovider");
  }
  return context;

  // now next thing is how to use custom hook and context.
}

function ThemeToggleButton() {
  const { theme, toggleTheme, isDark } = useTheme();
  return <button onClick={toggleTheme}>{isDark ? "🌙" : "☀️"}</button>;
}

function ThemedCard({ title, children }) {
  const { isDark } = useTheme();
  return (
    <div
      className={`${isDark ? "bg-gray-950 text-white" : "bg-white text-gray-950"}`}
    >
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

// Themed Button Component
function ThemedButton({ children, variant = "primary" }) {
  const { isDark } = useTheme();
  const getButtonClasses = () => {
    if (variant === "primary") {
      return isDark
        ? "bg-blue-600 hover:bg-blue-700 text-white"
        : "bg-orange-500 hover:bg-blue-600 text-white";
    }
    if (variant === "secondary") {
      return isDark
        ? "bg-gray-700 hover:bg-gray-600 text-white"
        : "bg-gray-200 hover:bg-gray-300 text-gray-800";
    }
  };
}

// Main Theme Demo Component
const ThemeToggler = () => {
    const { isDark } = useTheme();
    const [clickCount, setClickCount] = useState(0);
  return <div><ThemeToggleButton/>
  </div>;
};

export default ThemeToggler;
