/** @format */

import React, { useEffect } from "react";
import Hero2 from "../Component/Hero2";
import "./Baby.css";
import Mask2 from "../Assets/Mask Group 5.png";
import Cam from "../Assets/Comotomo 8 Ounce Baby Bottle, Pack of 2 (Green).png";
import Carioke from "../Assets/Chicco Natural Sensation Face Cream, Mother’s Womb Like Care, 0m+ (50 ml).png";
import Watch from "../Assets/Chicco Baby Moments Soft Cleansing Baby Wipes, Ideal for Nappy, Face and Hand, Dermatologically Tested, Paraben Free, Fliptop Pack.png";
import Bud from "../Assets/Cetaphil Baby Daily Moisturizing Lotion 400ml with Organic Calendula for Face & Body, Moisturizer for Kids.png";

import Lady from "../Assets/Lady.png";

import Milton from "../Assets/Milton Bradley Classic Operation Skill Game.png";
import Toy from "../Assets/Webby Soft Animal Plush Elephant Toy 20cm, Grey.png";
import Chair from "../Assets/StarAndDaisy Galaxy Star Multifunction 6 in 1 Baby High Chair  Foldable Feeding Chair Strong Dining Chair for Baby with Height Adjustment.png";
import Chair2 from "../Assets/71aMFEP0GjL._SL1500_.png";
import Reviews from "../Component/Reviews";
import Kid from "../Assets/Banner.png";
import img1 from "../Assets/Game.png";
import img3 from "../Assets/1.png";
import img4 from "../Assets/3.png";
import img5 from "../Assets/5.png";
import img6 from "../Assets/7.png";
import img7 from "../Assets/4.png";
import img8 from "../Assets/6.png";
import Oil from "../Assets/Oil.png";
import Hair from "../Assets/New 10.png";
import some from "../Assets/Chicco Baby Moments Soft Cleansing Baby Wipes, Ideal for Nappy, Face and Hand, Dermatologically Tested, Paraben Free, Fliptop Pack.png";
import clock from "../Assets/clock.png";
import Apple from "../Assets/Apple Watch Series 7 (GPS, 45mm) Midnight.png";
import adi from "../Assets/adidas Stadium 750 ML (26oz) Plastic Water Bottle.png";
import gel from "../Assets/618-39BSrgL._SL1500_.png";
import newImg12 from "../Images/GET ME THIS Desktop.jpg";
import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";

const Baby = () => {
  const navigate = useNavigate();

  const allProductNavigation = () => {
    navigate("/allProduct");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Hero2 />
      <div className="NewP">
        <h1>BABY & MOM</h1>
        <p>
          Allow notifications for tailored new arrivals ,
          <br />
          exciting launches and promotions
        </p>
      </div>

      <div className="two-sec">
        <div className="left">
          <img src={Mask2} alt="" />
        </div>
        <div className="right">
          <h1>BABY ESSENTIALS </h1>
          <p>
            Allow notifications for tailored new arrivals,
            <br />
            exciting launches and promotions.
          </p>
          <button>Explore More</button>
        </div>
      </div>

      <h1
        style={{
          textAlign: "center",
          marginTop: "5%",
          fontFamily: "MonumentMineMine",
        }}
      >
        SHOP BY
      </h1>
      <div className="child">
        <div className="month">0 - 6 MONTHS</div>
        <div className="month">6 - 12 MONTHS</div>
        <div className="month">12 - 18 MONTHS</div>
        <div className="month">18 - 24 MONTHS</div>
      </div>

      <div className="Give" id="GiveR">
        <h1>Share your child's birthdate and get exclusive offers*</h1>
        <h2>
          <input type={"date"} />
        </h2>
        <button>SUBMIT</button>
      </div>

      <div className="pro">
        <h1>PEDIATRICIAN RECOMENDED</h1>
        <button onClick={() => allProductNavigation()}>View all</button>
      </div>

      <div className="NewProductS">
        <div className="item">
          <div className="imgeOuter">
            <img src={Cam} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
            <img src={Carioke} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
            <img src={Watch} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
            <img src={Bud} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
      </div>

      <div className="two-sec">
        <div className="left">
          <img src={Lady} alt="" />
        </div>
        <div className="right">
          <h2>
            ITS AWESOME
            <br />
            <span>TO BE MOM</span>
          </h2>
          <p>
            Allow notifications for tailored new arrivals <br />
            exicting launches and promotions
          </p>
          <button>Explore More</button>
        </div>
      </div>

      <div className="pro">
        <h1>WHAT'S TRENDING</h1>
        <button onClick={() => allProductNavigation()}>View all</button>
      </div>

      <div className="NewProductS">
        <div className="item">
          <div className="imgeOuter">
            <img src={Chair2} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
            <img src={Chair} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
            <img src={Milton} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
            <img src={Toy} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
      </div>

      <p
        style={{
          textAlign: "center",
          fontSize: "2.2rem",
          fontFamily: "MonumentMineMine",
        }}
      >
        CUSTOMER REVIEWS
      </p>
      <Reviews />

      <div className="pro">
        <h1>BEST DEAL'S</h1>
        <button onClick={() => allProductNavigation()}>Shop Now</button>
      </div>

      <div className="myNewOldSec">
        <div className="left">
          <img src={Kid} alt="" />
        </div>
        <div className="right">
          <div className="group">
            <div className="dives">
              <div className="imageDiv">
                <img src={img3} alt="" />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB ₹31,970.00
              </p>
            </div>

            <div className="dives">
              <div className="imageDiv">
                <img src={img1} alt="" />
              </div>

              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB ₹31,970.00
              </p>
            </div>
          </div>
          <div className="group">
            <div className="dives">
              <div className="imageDiv">
                <img src={img4} alt="" />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB ₹31,970.00
              </p>
            </div>

            <div className="dives">
              <div className="imageDiv">
                <img src={img3} alt="" />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB ₹31,970.00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pro">
        <h1>INTERNATIONAL BEST SELLERS</h1>
        <button onClick={() => allProductNavigation()}>View all</button>
      </div>

      <div className="NewProductS">
        <div className="item">
          <div className="imgeOuter">
            <img src={img5} alt="" style={{ width: "50%" }} />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
            <img src={img6} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
            <img src={img7} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
            <img src={img8} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
      </div>

      <h1 style={{ textAlign: "center", fontFamily: " MonumentMineMine" }}>
        RECENTLY VIEWED
      </h1>

      <div className="many">
        <div>
          <img src={Hair} alt="" />
        </div>
        <div>
          <img src={some} alt="" />
        </div>
        <div>
          <img src={Apple} alt="" id="app" />
        </div>
        <div>
          <img src={clock} alt="" id="clock" />
        </div>
        <div>
          <img src={Oil} alt="" />
        </div>
        <div>
          <img src={adi} alt="" />
        </div>
        <div>
          <img src={gel} alt="" />
        </div>
      </div>

      <div className="BanImage">
        <img src={newImg12} alt="" />
      </div>

      <h1
        style={{ textAlign: "center", fontFamily: "MonumentMineMine" }}
        className="forRes"
      >
        TALK TO HUMAN
      </h1>
      <table
        style={{
          margin: "auto",
          width: "700px",
          textAlign: "center",
          marginTop: "3%",
          marginBottom: "3%",
          fontSize: "23px",
        }}
      >
        <tr>
          <td style={{ borderRight: "1px solid black", width: "33%" }}>
            {" "}
            <img src={phone} alt="" style={{ width: "80px" }} />
          </td>
          <td style={{ borderRight: "1px solid black", width: "33%" }}>
            {" "}
            <img src={Mail} alt="" style={{ width: "80px" }} />
          </td>
          <td style={{ width: "33%" }}>
            {" "}
            <img src={Whatsapp} alt="" style={{ width: "80px" }} />
          </td>
        </tr>
        <tr>
          <td style={{ fontFamily: "FuturaMine" }}>PHONE</td>
          <td style={{ fontFamily: "FuturaMine" }}>EMAIL US</td>
          <td style={{ fontFamily: "FuturaMine" }}>WHATSAPP US</td>
        </tr>
      </table>

      <Footer />
    </>
  );
};

export default Baby;
