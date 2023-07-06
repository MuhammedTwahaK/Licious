import React from "react";
import Four from "../Images/Breast_web_NEW_50.jpeg";
import ShopCategories from "./ShopCategories";

const ImgHome = () => {
  return (
    <div>
      <div className="imgallbg">
        <img className="fourimg" src={Four} alt="" />
      </div>
      <ShopCategories />
    </div>
  );
};

export default ImgHome;
