import React from "react";
import Combos from "./Combos";

const Fresh = () => {
  const freshs = [
    {
      img: "https://dao54xqhg9jfa.cloudfront.net/oms/9ddaf61c-4596-eaa1-4ea8-f580b65ad2d5/original/Meaty_Bites_copy.jpeg",
    },
    {
      img: "https://dao54xqhg9jfa.cloudfront.net/oms/21c18bb7-9960-1d85-2083-8d651c62557c/original/Perfect_Match.jpeg",
    },
  ];
  return (
    <div>
      <div className="bgbgbg">
        <div className="shopbyceg">
          <span className="bycg">Fresh at Licious!</span>
          <span>Handpicked assortment just for you</span>
        </div>
      </div>

      <div className="foralignalltwoimg">
        <div className="onlytwomapitems">
          {freshs.map((itemsf) => (
            <div>
              <img className="twobetimg" src={itemsf.img} alt="" />
            </div>
          ))}
        </div>
      </div>
      <Combos />
    </div>
  );
};

export default Fresh;
