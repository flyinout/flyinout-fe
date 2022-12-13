import Header from "./Header";
import { Illustration } from "./Illustration";
import ObjectiveSection from "./ObjectiveSection";
import Title from "./Title";
import Footer from "./Footer";

/* eslint-disable @next/next/no-img-element */
export default function Landing() {
  return (
    <>
        <Header />
        <Title />
        <Illustration />
        <ObjectiveSection />

        {/* automations */}
        {/* imports */}
        {/* collaborations */}
        {/* early bird */}
        <Footer />
    </>
  );
}
