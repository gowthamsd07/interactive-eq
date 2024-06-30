import { Fragment } from "react";
import CandidatesBanner from "../components/PageComponents/CandidatesPage/CandidateBanner/CandidateBanner";
import { CANDIDATES_SLIDER_ITEMS } from "./Data";
import CandidatesSlider from "../components/PageComponents/CandidatesPage/CandidatesSlider/CandidatesSlider";
import LoaderComponent from "../components/UIComponents/Loader/Loader";

const CandidatesPage = () => {
  return (
    <Fragment>
      <LoaderComponent />

      <CandidatesBanner />
      <CandidatesSlider items={CANDIDATES_SLIDER_ITEMS} />
    </Fragment>
  );
};

export default CandidatesPage;
