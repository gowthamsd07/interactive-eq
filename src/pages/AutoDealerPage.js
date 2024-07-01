import { Fragment } from "react";
import AutoDealerBanner from "../components/PageComponents/AutoDealerPage/AutoDealerBanner/AutoDealerBanner";
import StereoType from "../components/PageComponents/AutoDealerPage/StereoType/StereoType";
import DealerCardSlider from "../components/PageComponents/AutoDealerPage/CardSlider/CardSlider";
import { AUTO_DEALER_SLIDER_ITEMS } from "./Data";

const AutoDealerPage = () => {
  return (
    <Fragment>
      <AutoDealerBanner />
      <StereoType />
      <DealerCardSlider items={AUTO_DEALER_SLIDER_ITEMS} />
    </Fragment>
  );
};

export default AutoDealerPage;
