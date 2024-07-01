import React, { Fragment } from "react";
import Hero from "../components/PageComponents/CompanyPage/Hero";
import SoftSkill from "../components/PageComponents/CompanyPage/SoftSkill";
import BusinessSimulation from "../components/PageComponents/CompanyPage/BusinessSimulation";

const CompanyPage = () => {
  return (
    <Fragment>
      <Hero />
      <SoftSkill />
      <BusinessSimulation />
    </Fragment>
  );
};

export default CompanyPage;
