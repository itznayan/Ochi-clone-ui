import About from "./components/About";
import Eyes from "./components/Eyes";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import Project from "./components/Project";
import StickyFooter from "./components/Sticky_Footer/StickyFooter";
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white ">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Project />
      <StickyFooter />
    </div>
  );
}

export default App;
