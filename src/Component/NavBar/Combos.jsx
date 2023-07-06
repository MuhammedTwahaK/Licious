import React from "react";
import RsLower from "./RsLower";

const Combos = () => {
  const Famousitem = [
    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F8b51398b-b07f-1a84-cce2-0c3ec19b153e%2Foriginal%2FGoat---Mince.jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Goat Mince - Combo",
      gram: "900 gms",
      price: "₹966",
      percentage: "12% off",
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FProductMerchantdising%2F60f91ea4-e9c9-9ac0-9825-3ce4cb507515%2Foriginal%2F1598881046.5939--2020-08-3119_07_26--472.jpeg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Chicken Curry Cut(Small Pcs)- 500 gms and Chicken",
      //   gram: "450 gms",
      price: "₹315",
      percentage: "12% off",
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fd2407na1z3fc0t.cloudfront.net%2FprodDev%2Fpr_15ckn5pzo5x%2F1%2Fprod_display_image%2F1634616842.1144--2021-10-1909%3A44%3A02--1818&w=1920&q=75",
      title: "Assorted Kebab Platter | Ready to Cook",
      gram: "720 gms",
      price: "₹939",
      percentage: "10% off",
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "tomorrow 6AM",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F467fc795-de40-e455-e8b2-2270b039dd5c%2Foriginal%2Fcombo.jpg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Chicken Kebab & Biriyani Combo",
      gram: "5 Pieces",
      price: "₹412",
      percentage: "12% off",
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },

    {
      img: "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FProductMerchantdising%2F1ebe21bf-dd69-7194-a13d-ab0e85704d1b%2Foriginal%2F1598524707.9636--2020-08-2716_08_27--472.jpeg%3Fformat%3Dwebp&w=1920&q=75",
      title: "Chicken Curry Cut (Small Pcs) - 500 gms and Chicken",
      gram: "4 Pieces",
      price: "₹441",
      percentage: "5% off",
      Time: "https://www.licious.in/image/rebranding/svg/express-del.svg ",
      imgtwo: "https://www.licious.in/image/rebranding/svg/express-del.svg",
      imgtext: "Today in 90 min",
    },
  ];
  return (
    <div>
      <div className="bgbgbgo">
        <div className="shopbyceg">
          <span className="bycg">Combos for you</span>
          <span>Savour the savings!</span>
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
      <RsLower />
    </div>
  );
};

export default Combos;
