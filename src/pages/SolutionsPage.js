import React, { Fragment } from "react";
import SaasAog from "../components/PageComponents/SolutionsPage/SaasAog";
import TopCandidate from "../components/PageComponents/SolutionsPage/TopCandidate";
import Hrm from "../components/PageComponents/SolutionsPage/Hrm/Hrm";
import { HRM_TILE_ITEMS } from "./Data";
import LoaderComponent from "../components/UIComponents/Loader/Loader";

const SolutionsPage = () => {
  return (
    <Fragment>
      <LoaderComponent />

      <SaasAog />
      <TopCandidate />
      <Hrm items={HRM_TILE_ITEMS} />
    </Fragment>
  );
};

export default SolutionsPage;
