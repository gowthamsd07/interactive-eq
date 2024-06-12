import { Fragment, React } from "react";

import HomeBanner from "../components/PageComponents/HomePage/Banner/Banner";
import SoftSkills from "../components/PageComponents/HomePage/SoftSkills/SoftSkills";
import DataDrivenPrecision from "../components/PageComponents/HomePage/DataDrivenPrecision/DataDrivenPrecision";
import HumanAptitude from "../components/PageComponents/HomePage/HumanAptitude/HumanAptitude";
// import Assessment from "../components/PageComponents/HomePage/Assessment/Assessment";
import SkillSets from "../components/PageComponents/HomePage/SkillSets/SkillSets";
import BrandCards from "../components/PageComponents/HomePage/BrandCards/BranCards";
import { DATA_DRIVEN_ITEMS, SKILLS_ITEMS, SOFT_SKILLS_ITEMS } from "./Data";
import IeqVideo from "../components/PageComponents/HomePage/IeqVideo/IeqVideo";
// import ScrollSequence from "../components/PageComponents/HomePage/Banner/sample";

const HomePage = () => {
  // const SkillItemsArray1 = SKILLS_ITEMS.slice(0, 4);
  // const SkillItemsArray2 = SKILLS_ITEMS.slice(4, 8);
  // const AssessmentItemsArray1 = ASSESSMENT_ITEMS.slice(0, 3);
  // const AssessmentItemsArray2 = ASSESSMENT_ITEMS.slice(3, 6);
  return (
    <Fragment>
      {/* <ScrollSequence /> */}
      <HomeBanner />
      <DataDrivenPrecision items={DATA_DRIVEN_ITEMS} />
      <SoftSkills items={SOFT_SKILLS_ITEMS} />
      <HumanAptitude />
      {/* <Assessment items={(AssessmentItemsArray1, AssessmentItemsArray2)} /> */}
      <SkillSets items={SKILLS_ITEMS} />
      <IeqVideo />
      <BrandCards />
    </Fragment>
  );
};

export default HomePage;
