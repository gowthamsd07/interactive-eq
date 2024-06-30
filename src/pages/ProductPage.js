import { React, Fragment } from "react";
import HeroBanner from "../components/PageComponents/ProductPage/Herobanner/HeroBanner";
import Excellence from "../components/PageComponents/ProductPage/Excellence/Excellence";
import FeatureSlider from "../components/PageComponents/ProductPage/FeatureSlider/FeatureSlider";
import AITech from "../components/PageComponents/ProductPage/AITech/AITech";
import BusinessSimulation from "../components/PageComponents/ProductPage/BusinessSimulation/BusinessSimulation";
import { PRODUCT_SLIDER_ITEMS } from "./Data";
import LoaderComponent from "../components/UIComponents/Loader/Loader";

const ProductPage = () => {
  return (
    <Fragment>
      <LoaderComponent />

      <HeroBanner />
      <Excellence />
      <FeatureSlider items={PRODUCT_SLIDER_ITEMS} />
      <AITech />
      <BusinessSimulation />
    </Fragment>
  );
};

export default ProductPage;
