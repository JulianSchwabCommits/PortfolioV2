import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ExperienceTimeline from "../components/ExperienceTimeline";
import About from "../components/About";
import Play from "../components/Play";
import Contact from "../components/Contact";
import MouseShadow from "../components/ui/MouseShadow";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("Work");

  const renderSection = () => {
    switch (currentSection) {
      case "Work":
        return (
          <>
            <Hero />
            <ExperienceTimeline />
          </>
        );
      case "About":
        return <About />;
      case "Play":
        return <Play />;
      case "Contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <MouseShadow />
      <Navbar onSectionChange={setCurrentSection} />
      {renderSection()}
    </div>
  );
};

export default Index;