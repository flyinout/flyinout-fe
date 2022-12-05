import Header from "./Header";
import { Illustration } from "./Illustration";
import ObjectiveSection from "./ObjectiveSection";
import Title from "./Title";
import Footer from "./Footer";
import Automations from "./Automations";
import Collaboration from "./Collaboration";
import EarlyBird from "./EarlyBird"
/* eslint-disable @next/next/no-img-element */
export default function Landing() {
  return (
    <div className="m-0">
      <div className="flex flex-col items-center w-full lg:max-w-4xl mx-4 sm:mx-5 md:mx-2 lg:mx-auto">
        <Header />
        <Title />
        <Illustration />
        {/* primary obj */}
        <ObjectiveSection />
        {/* Automations */}
        <Automations />
        {/* imports */}
        {/* collaborations */}
        <Collaboration />
        <EarlyBird />
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}
