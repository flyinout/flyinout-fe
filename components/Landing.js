import Header from "./Header";
import { Illustration } from "./Illustration";
import ObjectiveSection from "./ObjectiveSection";
import Title from "./Title";
import Footer from "./Footer";
import Automations from "./Automations";
import Collaboration from "./Collaboration";
import EarlyBird from "./EarlyBird";
import Imports from "./Imports";
import Features from "./Features";

/* eslint-disable @next/next/no-img-element */
export default function Landing() {
  return (
    <>
        <Header />
        <Title />
        <Illustration />
        <Features />
        <ObjectiveSection />
        <Automations />
        {/* <Imports /> */}
        <Collaboration />
        <EarlyBird />
        <Footer />
    </>
  );
}
