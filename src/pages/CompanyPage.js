import React, { Fragment } from "react";
import Hero from "../components/PageComponents/CompanyPage/Hero";
import SoftSkill from "../components/PageComponents/CompanyPage/SoftSkill";
import BusinessSimulation from "../components/PageComponents/CompanyPage/BusinessSimulation";
import LoaderComponent from "../components/UIComponents/Loader/Loader";

const CompanyPage = () => {
  return (
    <Fragment>
      <LoaderComponent />

      <Hero />
      <SoftSkill />
      <BusinessSimulation />
    </Fragment>
  );
};

export default CompanyPage;
