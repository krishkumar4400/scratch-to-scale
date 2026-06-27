import React from "react";

import BasicProps from "../components/BasicProps.jsx";
import ChildrenProps from "../components/ChildrenProps.jsx";
import ComplexProps from "../components/ComplexProps.jsx";
import RefProps from "../components/RefProps.jsx";
import ThemeToggler, {ThemeProvider, useTheme} from "../components/ThemeToggler.jsx";

function Navigation() {
  const sections = [
    { id: "basic", label: "basic props", icon: "📦" },
    { id: "basic", label: "basic props", icon: "🔗" },
    { id: "basic", label: "basic props", icon: "👶" },
    { id: "basic", label: "basic props", icon: "🧩" },
    { id: "basic", label: "basic props", icon: "🎨" },
  ];

  return (
    <nav className={`sticky top-0 z-50 shadow-md p-4 flex justify-center items-center`}>
      <div>
        <div>
          {sections.map((section) => (
            <button
              className={`px-5 py-1.5 bg-blue-600 mr-2 mb-2 rounded text-white text-center hover:bg-blue-700`}
              key={section.id}
            >
              <span>{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  // const isDark = true;
  const isDark = useTheme();
  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'} `}>
      <Navigation />
      <div className="w-full mx-auto px-4 py-8">
        <header className="mb-4">
          <h1 className="text-center pb-4 font-semibold text-4xl text-white">
            React props explained
          </h1>
          <div className="text-center">
            <p className="text-gray-300 text-sm pb-6">
              A comprehensive guide to understanding props in React
            </p>
          </div>
          <div className="text-center ">
            <p className="text-white font-semibold">
              Built with Bun + Vite + React + Tailwind CSS
            </p>
          </div>
        </header>

        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200"></div>
          <BasicProps />
        </div>

        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200"></div>
          <ChildrenProps />
        </div>

        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200"></div>
          <ComplexProps />
        </div>

        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200"></div>
          <RefProps />
        </div>

        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200"></div>
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};  

export default App;
