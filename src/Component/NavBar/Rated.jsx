import React from "react";
import Footer from "./Footer";

const Rated = () => {
  const Famousitem = [
    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fc0a07db3-763d-a743-5ad2-ce6408b7cc4b%2Foriginal%2Fchicken_Relevance_PDP_Chicken_Breast_470_X_320_PDP_(1).jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Chicken Breast - Boneless",
      gram: "450 gms",
      price: "₹285",
      //   percentage:'8% off',
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F4181d78e-1d5d-f2c6-c5d3-20f94b4acd1c%2Foriginal%2FPDP_20._Chicken_Mince.jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Peppery Chicken Salami",
      gram: "450 gms",
      price: "₹299",
      //   percentage:'15% off',
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F018d4866-6252-8f4d-84c7-dee09b295691%2Foriginal%2FUCOOKED_(1).jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Afghani Murgh Seekh Kebab",
      gram: "4 Pieces",
      price: "₹269",
      //   percentage:'11% off',
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F5f6b9a45-6cc0-2103-a44c-4c98aaaa62c8%2Foriginal%2Fchicken_Relevance_PDP_Chicken_Tangdi_Biryani_Cut_(3).jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Premium Chicken Tangdi Biryani Cut",
      gram: "550 gms",
      price: "₹326",
      percentage: "13% off",
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F233fa0d5-e6d8-fb39-85b5-959871c2f2c6%2Foriginal%2Fp0_tile_images-07_(1).jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Basa (Pungus/Vaalla Meen) - Boneless Cubes",
      gram: "400 gms",
      price: "₹479",
      //   percentage:'12% off',
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },
  ];
  return (
    <div>
      <div className="bgbgbgoo">
        <div className="shopbyceg">
          <span className="bycg">Top Rated</span>
          <span>by meat-lovers like you!</span>
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
      {/* <Footer/> */}
    </div>
  );
};

export default Rated;
