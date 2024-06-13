import { Fragment, React } from "react";

import HomeBanner from "../components/PageComponents/HomePage/Banner/Banner";
import SoftSkills from "../components/PageComponents/HomePage/SoftSkills/SoftSkills";
import HumanAptitude from "../components/PageComponents/HomePage/HumanAptitude/HumanAptitude";
import SkillSets from "../components/PageComponents/HomePage/SkillSets/SkillSets";
import BrandCards from "../components/PageComponents/HomePage/BrandCards/BranCards";
import { SKILLS_ITEMS, SOFT_SKILLS_ITEMS, CARD_SLIDER_ITEMS } from "./Data";
import IeqVideo from "../components/PageComponents/HomePage/IeqVideo/IeqVideo";
import CardStackSlider from "../components/PageComponents/HomePage/CardStackSlider/CardStackSlider";

const HomePage = () => {
  return (
    <Fragment>
      <HomeBanner />
      {/* <DataDrivenPrecision items={DATA_DRIVEN_ITEMS} /> */}
      <SoftSkills items={SOFT_SKILLS_ITEMS} />
      <CardStackSlider items={CARD_SLIDER_ITEMS} />
      <HumanAptitude />
      {/* <Assessment items={(AssessmentItemsArray1, AssessmentItemsArray2)} /> */}
      <SkillSets items={SKILLS_ITEMS} />
      <IeqVideo />
      <BrandCards />
    </Fragment>
  );
};

export default HomePage;
