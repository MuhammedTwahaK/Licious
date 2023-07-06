import React from "react";
import Rated from "./Rated";

const Delicious = () => {
  const Famousitem = [
    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Ff44dc17f-5b95-4c57-4b13-462d248caf62%2Foriginal%2FChicken_Mini_Bites_-_Asian_Chicken_Stir_Fry_(2).jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Chicken Boneless - Mini Bites",
      gram: "250 gms",
      price: "₹199",
      //   percentage:'8% off',
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F51d10851-3391-d44c-48c9-d2641a55ccd1%2Foriginal%2FPDP_19._Goat_Boneless-04.jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Goat Boneless",
      gram: "500 gms",
      price: "₹833",
      percentage: "3% off",
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F233fa0d5-e6d8-fb39-85b5-959871c2f2c6%2Foriginal%2Fp0_tile_images-07_(1).jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Basa (Pungus/Vaalla Meen) - Boneless Cubes",
      gram: "400 gms",
      price: "₹479",
      //   percentage:'11% off',
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fc0a07db3-763d-a743-5ad2-ce6408b7cc4b%2Foriginal%2Fchicken_Relevance_PDP_Chicken_Breast_470_X_320_PDP_(1).jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Chicken Breast - Boneless",
      gram: "450 gms",
      price: "₹285",
      //   percentage:'12% off',
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Ff6e3b784-e68c-2ef0-b6d7-2483255721b8%2Foriginal%2Fp2_tile_images_7th_folder-41.jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Yellowfin Tuna (Kera) Medium - Cubes",
      gram: "300 gms",
      price: "₹525",
      //   percentage:'12% off',
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },
  ];
  return (
    <div>
      <div className="bgbgbgooo">
        <div className="shopbyceg">
          <span className="bycg">Delicious boneless cuts</span>
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
      <Rated />
    </div>
  );
};

export default Delicious;
