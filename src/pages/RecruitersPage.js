import React, { Fragment } from "react";
import HeroPage from "../components/PageComponents/RecruitersPage/HeroPage";
import Features from "../components/PageComponents/RecruitersPage/Features";
import BusinessSimulation from "../components/PageComponents/RecruitersPage/BusinessSimulation";
import Agency from "../components/PageComponents/RecruitersPage/Agency/Agency";

const RecruitersPage = () => {
  return (
    <Fragment>
      <HeroPage />
      <Features />
      <BusinessSimulation />
      <Agency />
    </Fragment>
  );
};

export default RecruitersPage;
