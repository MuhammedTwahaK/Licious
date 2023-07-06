import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const City = [
    {
      Name: "Bengaluru",
    },
    {
      Name: "NCR",
    },
    {
      Name: "Hyderabad",
    },
    {
      Name: "Chandigarh",
    },
    {
      Name: "Panchkula",
    },
    {
      Name: "Mohali",
    },
    {
      Name: "Mumbai",
    },
    {
      Name: "Pune",
    },
    {
      Name: "Chennai",
    },

    {
      Name: "Coimbatore",
    },
    {
      Name: "Jaipur",
    },
    {
      Name: "Cochin",
    },
    {
      Name: "Vijayawada",
    },
    {
      Name: "Visakhapatnam",
    },
    {
      Name: "Kolkata",
    },
    {
      Name: "Lucknow",
    },
    {
      Name: "Kanpur",
    },
    {
      Name: "Nagpur",
    },
  ];
  return (
    <div>
      <div className="flexoffootercnt">
        <div className="backgroundpinkcolour">
          <hr className="hrlinewidthred" />
          <h6>We will sell only the meat that we would eat ourselves.</h6>
          <p className="forpsizecheck">
            At Licious, we’re big meat-lovers. And by big, we mean huge. So when
            it comes to the meat we put on your plate, we’re extremely picky.
            Every single product is handpicked by a team with years of
            experience.
          </p>
        </div>

        <div className="backgroundpinkcolour">
          <hr className="hrlinewidthred" />
          <h6>If it’s not fresh, we won’t sell it</h6>
          <p className="forpsizecheck">
            For meat to stay fresh and retain its natural juices, it needs to be
            stored at a temperature between 0° and 5°C. We maintain this
            temperature from the time we procure the product to cleaning,
            cutting and storing it, until it leaves for delivery. And even when
            it’s out for delivery, we keep it chilled right up to your
            doorstep.Did we mention that we’re obsessed?
          </p>
        </div>

        <div className="backgroundpinkcolour">
          <hr className="hrlinewidthred" />
          <h6>We will charge only for what you buy</h6>
          <p className="forpsizecheck">
            Doesn’t everyone do this? Not really. Most other places first weigh
            the meat, then cut up the pieces, and throw out the parts which
            aren’t fit to eat, such as offal, gizzard, wingtips, etc. But you
            still pay based on the original weight even though what you finally
            get is 10% to 30% less
          </p>
        </div>
      </div>

      <div className="TOtaLL">
        <div className="totalfooterone">
          <div className="whiteandhranu">
            <div className="logoandhr">
              <img
                className="sizeoflinkimg"
                src="https://www.licious.in/image/rebranding/png/logo-homepage.png"
                alt=""
              />
              <hr className="hrandblackwdhg" />
            </div>
          </div>

          <div className="bgandwhiteoflastfooter">
            <div className="divforalignlefttoright">
              <div className="classforbgandalign">
                <div>
                  <h6>EXPERIENCE LICIOUS APP ON MOBILE</h6>
                  <div className="justifyofgoogleandapp">
                    <Link
                      to={
                        "https://apps.apple.com/in/app/fresh-meat-online-licious/id1052440342"
                      }
                    >
                      <img
                        src="https://www.licious.in/image/rebranding/png/app-store-homepage.png"
                        alt=""
                      />
                    </Link>
                    <Link
                      to={
                        "https://play.google.com/store/apps/details?id=com.licious&hl=en"
                      }
                    >
                      <img
                        src="https://www.licious.in/image/rebranding/png/playstore-homepage.png"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>

                <div className="Logoofsocialandtext">
                  <h6>KEEP IN TOUCH</h6>
                  <div className="Socialmedialogolink">
                    <Link to={"https://twitter.com/LiciousFoods"}>
                      <img
                        src="https://www.licious.in/image/rebranding/png/twitter-homepage.png"
                        alt=""
                      />
                    </Link>
                    <Link to={"https://www.facebook.com/LiciousFoods"}>
                      <img
                        src="https://www.licious.in/image/rebranding/png/fb-homepage.png"
                        alt=""
                      />
                    </Link>
                    <Link to={"https://www.instagram.com/licious_foods/"}>
                      <img
                        src="https://www.licious.in/image/rebranding/png/insta-homepage.png"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="linksandspans">
                <h6>USEFUL LINKS</h6>
                <div className="ofwhyblogcareers">
                  <span>Why Licious?</span>
                  <span>Refer & Earn</span>
                  <span>Licious Cash & Cash+</span>
                  <span>Careers</span>
                  <span>BLOG</span>
                </div>
              </div>

              <div className="aboutudfaqta">
                <span>About Us</span>
                <span>Bug Bounty Guidelines</span>
                <span>T&C</span>
                <span>FAQ</span>
                <span>Privacy Policy</span>
                <span>FSSC 22000 Certification</span>
                <span>SA8000 Certification</span>
                <span>Sitemap</span>
              </div>

              <div className="conTactAs">
                <h6>CONTACT US</h6>
                <div className="addressandcontact">
                  <span>Call: 1800-4190-786</span>
                  <span>talktous@licious.com</span>
                  <span>REGISTERED OFFICE ADDRESS:</span>
                  <span>House of Licious, Zed Pearl, No 12, Domlur Layout</span>
                  <span>Bangalore, Karnataka - 560071</span>
                </div>
                <div className="visatolpo">
                  <img
                    className="widthofvisa"
                    src="https://www.licious.in/image/rebranding/png/3-dsecure.png"
                    alt=""
                  />
                </div>
                <div className="haveSEC">
                  <span className="HAVE">HAVE SECURITY CONCERN?</span>
                  <span className="mailusto">
                    Mail us to: security@licious.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Citiesandmap">
        <div className="servNDMAP">
          <h6>CITIES WE SERVE</h6>
        </div>

        <div className="mapmapMMMM">
          {City.map((item) => (
            <div>
              <p className="spanmapItEms">{item.Name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="onetwothree">
        <div className="ClAsSforpopo">
          <div>
            <h6>POPULAR SEARCHES</h6>
          </div>
          <div className="ChikenCHH">
            <h6 className="Chhhhh">Chicken</h6>
            <div className="ChikenitemsS">
              <p className="Oneeee">Chicken Breast (Boneless) |</p>
              <p className="OneeeeA">
                {" "}
                Chicken (Skinless) - Curry Cut (Large) |
              </p>
              <p className="OneeeeB"> Chicken Mince/Keema |</p>
              <p className="OneeeeC">
                {" "}
                Chicken Leg Curry Cut (Large - 4 pieces) |
              </p>
              <p className="OneeeeD"> Chicken Lollipop - 10 Pieces |</p>
              <p className="OneeeeE"> Tender Spring Chicken Curry Cut |</p>
            </div>
            <div className="ChikenitemsSS">
              <span className="OneeeeF"> Chicken - Whole with Skin |</span>
              <span className="OneeeeG">
                {" "}
                Chicken Curry Cut (Small - 13 to 16 Pieces)
              </span>
            </div>
          </div>

          <div className="ChikenCHH">
            <h6 className="Chhhhh EGGs">Eggs</h6>
            <div className="ChikenitemsS">
              <p className="OneeeeH">Classic Eggs - Pack Of 6</p>
            </div>
          </div>

          <div className="ChikenCHH">
            <h6 className="Chhhhh">Mutton</h6>
            <div className="ChikenitemsS">
              <p className="Oneeee">Chicken Breast (Boneless) |</p>
              <p className="OneeeeA">
                {" "}
                Chicken (Skinless) - Curry Cut (Large) |
              </p>
              <p className="OneeeeB"> Chicken Mince/Keema |</p>
              <p className="OneeeeC">
                {" "}
                Chicken Leg Curry Cut (Large - 4 pieces) |
              </p>
              <p className="OneeeeD"> Chicken Lollipop - 10 Pieces |</p>
              <p className="OneeeeE"> Tender Spring Chicken Curry Cut |</p>
            </div>
            <div className="ChikenitemsSS">
              <span className="OneeeeF"> Chicken - Whole with Skin |</span>
              <span className="OneeeeG">
                {" "}
                Chicken Curry Cut (Small - 13 to 16 Pieces)
              </span>
            </div>
          </div>

          {/* & Seafood */}
          <div className="ChikenCHH">
            <h6 className="Chhhhh">Fish</h6>
            <div className="ChikenitemsS">
              <p className="Oneeee">Chicken Breast (Boneless) |</p>
              <p className="OneeeeA">
                {" "}
                Chicken (Skinless) - Curry Cut (Large) |
              </p>
              <p className="OneeeeB"> Chicken Mince/Keema |</p>
              <p className="OneeeeC">
                {" "}
                Chicken Leg Curry Cut (Large - 4 pieces) |
              </p>
              <p className="OneeeeD"> Chicken Lollipop - 10 Pieces |</p>
              <p className="OneeeeE"> Tender Spring Chicken Curry Cut |</p>
            </div>
            <div className="ChikenitemsSS">
              <span className="OneeeeF"> Chicken - Whole with Skin |</span>
              <span className="OneeeeG">
                {" "}
                Chicken Curry Cut (Small - 13 to 16 Pieces)
              </span>
            </div>
          </div>

          {/* to Cook  */}
          <div className="ChikenCHH">
            <h6 className="Chhhhh">Ready</h6>
            <div className="ChikenitemsS">
              <p className="Oneeee">Chicken Breast (Boneless) |</p>
              <p className="OneeeeA">
                {" "}
                Chicken (Skinless) - Curry Cut (Large) |
              </p>
              <p className="OneeeeB"> Chicken Mince/Keema |</p>
              <p className="OneeeeC">
                {" "}
                Chicken Leg Curry Cut (Large - 4 pieces) |
              </p>
              <p className="OneeeeD"> Chicken Lollipop - 10 Pieces |</p>
              <p className="OneeeeE"> Tender Spring Chicken Curry Cut |</p>
            </div>
            <div className="ChikenitemsSS">
              <span className="OneeeeF"> Chicken - Whole with Skin |</span>
              <span className="OneeeeG">
                {" "}
                Chicken Curry Cut (Small - 13 to 16 Pieces)
              </span>
            </div>
          </div>

          {/* Meats */}
          <div className="ChikenCHH">
            <h6 className="Chhhhh">Exotic</h6>
            <div className="ChikenitemsS">
              <p className="Oneeee">Chicken Breast (Boneless) |</p>
              <p className="OneeeeA">
                {" "}
                Chicken (Skinless) - Curry Cut (Large) |
              </p>
              <p className="OneeeeB"> Chicken Mince/Keema |</p>
              <p className="OneeeeC">
                {" "}
                Chicken Leg Curry Cut (Large - 4 pieces) |
              </p>
              <p className="OneeeeD"> Chicken Lollipop - 10 Pieces |</p>
              <p className="OneeeeE"> Tender Spring Chicken Curry Cut |</p>
            </div>
            <div className="ChikenitemsSS">
              <span className="OneeeeF"> Chicken - Whole with Skin |</span>
              <span className="OneeeeG">
                {" "}
                Chicken Curry Cut (Small - 13 to 16 Pieces)
              </span>
            </div>
          </div>

          <div className="ChikenCHH">
            <h6 className="Chhhhh">Spreads</h6>
            <div className="ChikenitemsSKebab">
              <p className="OneeeeC">
                Chunky Butter Chicken Spread (Single Serve) |
              </p>
              <p className="OneeeeE"> Chunky Continental Chicken Spread |</p>
              <p className="OneeeeAAA">
                {" "}
                Chunky Shawarma Chicken Spread (Single Serve)
              </p>
            </div>
          </div>

          <div className="ChikenCHH">
            <h6 className="Chhhhh">Kebabs</h6>
            <div className="ChikenitemsSKebab">
              <p className="OneeeeAA"> Afghani Murgh Seekh Kebab |</p>
              <p className="OneeeeC"> Purani Dilli ki Mutton Seekh Kebab</p>
            </div>
          </div>

          {/* Masala */}

          <div className="ChikenCHH">
            <h6 className="Chhhhh">Meat</h6>
            <div className="ChikenitemsS">
              <p className="Oneeee">Chicken Breast (Boneless) |</p>
              <p className="OneeeeA">
                {" "}
                Chicken (Skinless) - Curry Cut (Large) |
              </p>
              <p className="OneeeeB"> Chicken Mince/Keema |</p>
              <p className="OneeeeC">
                {" "}
                Chicken Leg Curry Cut (Large - 4 pieces) |
              </p>
              <p className="OneeeeD"> Chicken Lollipop - 10 Pieces |</p>
              <p className="OneeeeE"> Tender Spring Chicken Curry Cut |</p>
            </div>
            <div className="ChikenitemsSS">
              <span className="OneeeeF"> Chicken - Whole with Skin |</span>
              <span className="OneeeeG">
                {" "}
                Chicken Curry Cut (Small - 13 to 16 Pieces)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="LAstSidefooterClass">
        <p className="Delightful">
          © 2021 Delightful Gourmet Pvt Ltd. All Rights Reserved.
        </p>
        <p className="LiciousBigfooterP">
          Licious is your one-stop fresh meat delivery shop. In here, you get
          nothing but the freshest meat & seafood, delivered straight to your
          doorstep. Now you can buy meat online anytime at your convenience.
          Indulge in our diverse selection: Chicken, Mutton, Seafood (Fish,
          Prawns, Crabs), Marinades & Cold Cuts. All our products are completely
          natural and healthy. Once you've experienced Licious, you'll never go
          back to the old way of buying meat and seafood.
        </p>
      </div>
    </div>
  );
};

export default Footer;
