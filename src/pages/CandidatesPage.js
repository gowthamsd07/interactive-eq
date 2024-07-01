import { Fragment } from "react";
import CandidatesBanner from "../components/PageComponents/CandidatesPage/CandidateBanner/CandidateBanner";
import { CANDIDATES_SLIDER_ITEMS } from "./Data";
import CandidatesSlider from "../components/PageComponents/CandidatesPage/CandidatesSlider/CandidatesSlider";

const CandidatesPage = () => {
  return (
    <Fragment>
      <CandidatesBanner />
      <CandidatesSlider items={CANDIDATES_SLIDER_ITEMS} />
    </Fragment>
  );
};

export default CandidatesPage;
