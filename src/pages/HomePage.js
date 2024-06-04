import { Fragment, React } from "react";

import HomeBanner from "../components/PageComponents/HomePage/Banner/Banner";
import SoftSkills from "../components/PageComponents/HomePage/SoftSkills/SoftSkills";
import DataDrivenPrecision from "../components/PageComponents/HomePage/DataDrivenPrecision/DataDrivenPrecision";
import HumanAptitude from "../components/PageComponents/HomePage/HumanAptitude/HumanAptitude";
import Assessment from "../components/PageComponents/HomePage/Assessment/Assessment";
import SkillSets from "../components/PageComponents/HomePage/SkillSets/SkillSets";
import BrandCards from "../components/PageComponents/HomePage/BrandCards/BranCards";
import {
  ASSESSMENT_ITEMS,
  DATA_DRIVEN_ITEMS,
  SKILLS_ITEMS,
  SOFT_SKILLS_ITEMS,
} from "./Data";
import IeqVideo from "../components/PageComponents/HomePage/IeqVideo/IeqVideo";

const HomePage = () => {
  return (
    <Fragment>
      <HomeBanner />
      <SoftSkills items={SOFT_SKILLS_ITEMS} />
      <DataDrivenPrecision items={DATA_DRIVEN_ITEMS} />
      <HumanAptitude />
      <Assessment items={ASSESSMENT_ITEMS} />
      <IeqVideo />
      <SkillSets items={SKILLS_ITEMS} />
      <BrandCards />
    </Fragment>
  );
};

export default HomePage;
