import React from "react";
// import Five from '../Images/Todays_Deal_1.png'
import { Link } from "react-router-dom";
import Famous from "./Famous";

const ShopCategories = () => {
  const shopitems = [
    {
      img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/111d6147-b116-f51c-bd9d-dddfd923ba97/original/Todays_Deal_1.png",
      title: "Today's Deals",
      linkurl: "/card",
    },

    {
      img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d654ce6f-3b1a-efb1-ce66-64b3a4afb655/original/Chicken_(1)_(1).png",
      title: "Chicken",
    },

    {
      img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/52ed9676-ec28-711e-dd8a-55d4ea17c324/original/Fish_(1)_(1)_(1).png",
      title: "Fish & Seafood",
    },

    {
      img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/2119874c-38a6-df8c-22f1-5cd8a2eb4d80/original/Mutton_(1)_(1).png",
      title: "Mutton",
    },

    {
      img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cbcb49fd-0d91-0eaf-a23a-d78202b5c9db/original/All-Cat-Icon-Images_(1).png",
      title: "Ready to Cook",
    },

    {
      img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/82b8b842-3d62-955f-6076-c57ca8fdb4c5/original/Prawns.png",
      title: "Prawns",
    },

    {
      img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/544bddc9-5775-cd44-511c-8e7e78f75a10/original/Eggs.png",
      title: "Eggs",
    },

    {
      img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/2ecb2ebd-114c-7a9b-25eb-ece9dec68d2c/original/Coldcuts.png",
      title: "Cold Cuts",
    },

    {
      img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c36cb4a6-1751-bcff-81e6-1e2b5a0d0520/original/Kebabs_(1).png",
      title: "Kebab and Biryani",
    },

    {
      img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/94f02fac-266b-f1e6-b6af-4ba19dade1c9/original/spreads-transparent_(5).png",
      title: "Spreads",
    },

    {
      img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/da303776-1989-e6a8-2113-74cf19d314d8/original/Uncrave.png",
      title: "Plant Based Meat",
    },

    {
      img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4ad0a144-8830-a4b5-90ee-216753328bbd/original/Masala_1.png",
      title: "Meat Masala",
    },
  ];
  return (
    <div>
      <div className="bgbgbg">
        <div className="shopbyceg">
          <span className="bycg">Shop by categories</span>
          <span>Freshest meats and much more!</span>
        </div>
      </div>

      <div className="displayflexformap">
        {shopitems.map((item) => (
          <Link className="map-link" to={item.linkurl}>
            {/* <div className='foralignmap'> */}
            <div className="proitems">
              <img className="imgtwoandsix" src={item.img} alt="" />
              <p className="maptext">{item.title}</p>
            </div>
            {/* </div> */}
          </Link>
        ))}
      </div>

      <Famous />
    </div>
  );
};

export default ShopCategories;
