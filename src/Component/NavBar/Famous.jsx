import React from "react";
import Fresh from "./Fresh";

const Famous = () => {
  const Famousitem = [
    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F0d6cb916-dcc3-5634-dc77-5850211c7096%2Foriginal%2Fchicken_Relevance_PDP_Chicken_Curry_Cut_Small)_470_X_320_PDP_(1).jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Chicken Curry Cut - Small Pieces",
      gram: "500 gms",
      price: "₹166",
      percentage: "7% off",
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },
    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fc0a07db3-763d-a743-5ad2-ce6408b7cc4b%2Foriginal%2Fchicken_Relevance_PDP_Chicken_Breast_470_X_320_PDP_(1).jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Chicken Breast - Boneless",
      gram: "450 gms",
      price: "₹285",
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F0a6cc926-9ccf-3cf2-c9a4-2a3ffbceeccb%2Foriginal%2FPDP_2._Classic_Eggs_-_Pack_of_12.jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Classic (Farm Fresh) Eggs - Pack of 12",
      gram: "12 Pieces",
      price: "₹146",
      percentage: "14% off",
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Ffeedc98d-42e1-0e0a-7da0-0072fa84977c%2Foriginal%2Fp2_tile_images_6th_folder-09_(1).jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Rohu (Rui/Kannadi Kendai) Medium - Bengali Cut, No",
      gram: "500 gms",
      price: "₹269",
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F018d4866-6252-8f4d-84c7-dee09b295691%2Foriginal%2FUCOOKED_(1).jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Afghani Murgh Seekh Kebab",
      gram: "4 Pieces",
      price: "₹269",
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },
  ];
  return (
    <div>
      <div className="bgbgbg">
        <div className="shopbyceg">
          <span className="bycg">Bestsellers</span>
          <span>Most popular products near you!</span>
        </div>
      </div>

      <div className="bgclfromainandmain">
        <div className="fivemapinone">
          {Famousitem.map((item) => (
            <div className="classforcloume">
              <img className="imgtwofivee" src={item.img} alt="" />
              <span className="fontsizesecondmap"> {item.title} </span>
              <p className="gramcalss"> {item.gram} </p>

              <div className="percentage">
                <span className="priceclass">{item.price}</span>
                <span className="percentagecolor">{item.percentage} </span>
              </div>

              <div className="forpaddingdivmapin">
                <img className="flashimgsmall" src={item.imgtwo} alt="" />
                <span className="fontofflashtext">{item.imgtext}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Fresh />
    </div>
  );
};

export default Famous;
