import { useEffect, useState } from "react";
import MediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import DotGroup from "./components/DotGroup";
import Landing from "./components/Landing";
import LinearGradient from "./components/LinearGradient";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfTheScreen, setIsTopOfTheScreen] = useState(true);
  const isAboveMediumScreens = MediaQuery("(min-width: 1070px)");

  useEffect(() => {
    const handler = () => {
      if (window.scrollY === 0) setIsTopOfTheScreen(true);
      if (window.scrollY !== 0) setIsTopOfTheScreen(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="App bg-deep-blue">
      <Navbar
        isTopOfTheScreen={isTopOfTheScreen}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LinearGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills setSelectedPage={setSelectedPage} />
      </div>
      <LinearGradient />
      <div className="w-5/6 mx-auto">
        <Projects setSelectedPage={setSelectedPage} />
      </div>
      <LinearGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Testimonials setSelectedPage={setSelectedPage} />
      </div>
      <LinearGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Contact setSelectedPage={setSelectedPage} />
      </div>
      <div className="mx-auto md:h-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
