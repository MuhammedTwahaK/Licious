import React from "react";
import BreakFast from "./BreakFast";

const RsLower = () => {
  const Famousitem = [
    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F0d6cb916-dcc3-5634-dc77-5850211c7096%2Foriginal%2Fchicken_Relevance_PDP_Chicken_Curry_Cut_Small)_470_X_320_PDP_(1).jpg&w=1920&q=75",
      title: "Goat Mince - Combo",
      gram: "500 gms",
      price: "₹165",
      percentage: "8% off",
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F0a6cc926-9ccf-3cf2-c9a4-2a3ffbceeccb%2Foriginal%2FPDP_2._Classic_Eggs_-_Pack_of_12.jpg&w=1920&q=75",
      title: "Chicken Curry Cut(Small Pcs)- 500 gms and Chicken",
      gram: "12 Pieces",
      price: "₹145",
      percentage: "15% off",
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F40bf830a-93b1-1e2e-7679-d80785cc1059%2Foriginal%2Fchicken_Relevance_PDP_Chicken_Curry_Cut_Large_470_X_320_PDP_(1).jpg&w=1920&q=75",
      title: "Assorted Kebab Platter | Ready to Cook",
      gram: "500 gms",
      price: "₹165",
      percentage: "8% off",
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F9b41ff57-e7b0-476d-7f50-29fc2d27fb41%2Foriginal%2FPDP_1._Classic_Eggs_-_Pack_of_6.jpg&w=1920&q=75",
      title: "Chicken Kebab & Biriyani Combo",
      gram: "6 Pieces",
      price: "₹75",
      percentage: "12% off",
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F62524818-1102-db74-c230-2a3f95e32d97%2Foriginal%2FPDP_5._Country_Eggs_-_Pack_of_6.jpg&w=1920&q=75",
      title: "Chicken Curry Cut (Small Pcs) - 500 gms and Chicken",
      gram: "6 Pieces",
      price: "₹105",
      percentage: "12% off",
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },
  ];
  return (
    <div>
      <div className="bgbgbgo">
        <div className="shopbyceg">
          <span className="bycg">Rs 199 or lower!</span>
          {/* <span>Savour the savings!</span> */}
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
      <BreakFast />
    </div>
  );
};

export default RsLower;
