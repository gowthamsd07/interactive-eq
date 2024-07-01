import React, { Fragment } from "react";
import SaasAog from "../components/PageComponents/SolutionsPage/SaasAog";
import TopCandidate from "../components/PageComponents/SolutionsPage/TopCandidate";
import Hrm from "../components/PageComponents/SolutionsPage/Hrm/Hrm";
import { HRM_TILE_ITEMS, TOP_CANDIDATE_PERCENTAGE_ANIMATION_ITEMS } from "./Data";
import LoaderComponent from "../components/UIComponents/Loader/Loader";

const SolutionsPage = () => {
  return (
    <Fragment>
      <SaasAog />
      <TopCandidate items={TOP_CANDIDATE_PERCENTAGE_ANIMATION_ITEMS}/>
      <Hrm items={HRM_TILE_ITEMS} />
    </Fragment>
  );
};

export default SolutionsPage;
