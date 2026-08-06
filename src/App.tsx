import { Navbar } from "./components/site/Navbar";
import { Hero } from "./components/site/Hero";
import { DeveloperMarquee } from "./components/site/DeveloperMarquee";
import { FeaturedProjects } from "./components/site/FeaturedProjects";
import { SearchRequirement } from "./components/site/SearchRequirement";
import { Services } from "./components/site/Services";
import { Process } from "./components/site/Process";
import { About } from "./components/site/About";
import { Verification } from "./components/site/Verification";
import { Faq } from "./components/site/Faq";
import { Contact } from "./components/site/Contact";
import { Footer } from "./components/site/Footer";
import { FloatingButtons } from "./components/site/FloatingButtons";
import { LeadSuccessPopup } from "./components/common/LeadSuccessPopup";
import { OfflineBanner } from "@/components/common/OfflineBanner";

import "./index.css";
import "./styles/animations.css";

function App() {
  return (
    <>
      <OfflineBanner />
      <Navbar />

      <main>
        <Hero />
        <DeveloperMarquee />
        <FeaturedProjects />
        <SearchRequirement />
        <Services />
        <Process />
        <About />
        <Verification />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
      <LeadSuccessPopup />
    </>
  );
}

export default App;
