import React from "react";
import "./Hrm.scss";
import HrmTileCard from "./HrmTile";

const Hrm = (props) => {
  const { items } = props;
  return (
    <section className="hrm-sec section-padding-y">
      <div className="container">
        <div className="flex-all-center flex-column">
          {items.map((tileData) => (
            <HrmTileCard tileData={tileData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hrm;
