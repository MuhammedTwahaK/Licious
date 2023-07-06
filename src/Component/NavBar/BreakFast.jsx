import React from "react";
import Delicious from "./Delicious";

const BreakFast = () => {
  const Famousitem = [
    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F4f9c5ce8-cd46-b4eb-a0b1-8c7fa8d4280d%2Foriginal%2Fbutterchicken.png%3Fformat%3Dwebp&w=1920&q=75",
      title: "Chunky Butter Chicken Spread",
      gram: "1 Pieces",
      price: "₹219",
      //   percentage:'8% off',
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fd1cefc93-72ba-d484-5c1a-71b04e00c51f%2Foriginal%2FCOOKED_(58).jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Peppery Chicken Salami",
      gram: "200 gms",
      price: "₹325",
      //   percentage:'15% off',
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F9b41ff57-e7b0-476d-7f50-29fc2d27fb41%2Foriginal%2FPDP_1._Classic_Eggs_-_Pack_of_6.jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Classic (Farm Fresh) Eggs - Pack of 6",
      gram: "6 Pieces",
      price: "₹76",
      percentage: "11% off",
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fc0f6f978-0dd8-d825-7386-0d1f593153c0%2Foriginal%2FShawarma-Chicken.png%3Fformat%3Dwebp&w=1920&q=75",
      title: "Chunky Shawarma Chicken Spread",
      gram: "1 Pieces",
      price: "₹219",
      //   percentage:'12% off',
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F36c60289-829d-830f-d4c7-c62675adb323%2Foriginal%2FFrank---Chorizo-unCooked%2Bnew.jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Chicken Chorizo Frankfurter",
      gram: "4 Pieces",
      price: "₹299",
      //   percentage:'12% off',
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },
  ];
  return (
    <div>
      <div className="bgbgbg">
        <div className="shopbyceg">
          <span className="bycg">Your go-to breakfast meat</span>
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
      <Delicious />
    </div>
  );
};

export default BreakFast;
