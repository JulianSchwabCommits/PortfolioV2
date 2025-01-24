import { useState } from "react";

const Navbar = ({ onSectionChange }: { onSectionChange: (section: string) => void }) => {
  const [activeSection, setActiveSection] = useState("Work");
  const sections = ["Work", "About", "Play", "Contact"];

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    onSectionChange(section);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="flex gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full p-1">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleSectionChange(section)}
              className={`nav-link ${activeSection === section ? "active rounded-full" : "rounded-full"}`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;