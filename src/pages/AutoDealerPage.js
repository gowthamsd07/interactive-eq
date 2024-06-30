import { Fragment } from "react";
import AutoDealerBanner from "../components/PageComponents/AutoDealerPage/AutoDealerBanner/AutoDealerBanner";
import StereoType from "../components/PageComponents/AutoDealerPage/StereoType/StereoType";
import DealerCardSlider from "../components/PageComponents/AutoDealerPage/CardSlider/CardSlider";
import { AUTO_DEALER_SLIDER_ITEMS } from "./Data";
import LoaderComponent from "../components/UIComponents/Loader/Loader";

const AutoDealerPage = () => {
  return (
    <Fragment>
      <LoaderComponent />

      <AutoDealerBanner />
      <StereoType />
      <DealerCardSlider items={AUTO_DEALER_SLIDER_ITEMS} />
    </Fragment>
  );
};

export default AutoDealerPage;
