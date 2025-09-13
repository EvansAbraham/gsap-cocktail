import gsap from "gsap";
import Art from "./components/Art";
import Hero from "./components/Hero";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Cocktails from "./components/Cocktails";
import { ScrollTrigger, SplitText } from "gsap/all";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
        <NavBar/>
        <Hero/>
        <Cocktails/>
        <About/>
        <Art/>
        <Menu/>
        <Contact/>
    </main>
  )
}

export default App
