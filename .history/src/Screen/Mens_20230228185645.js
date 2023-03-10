/** @format */

import React, { useEffect } from "react";
import MensCarousel from "../Component/MensCarousel";
import Reviews from "../Component/Reviews";

// Images
import img from "../Assets/76.png";

import img3 from "../Assets/78.png";
import img4 from "../Assets/79.png";
import img5 from "../Assets/80.png";
import img6 from "../Assets/04.png";

import img7 from "../Assets/81.png";

import img8 from "../Assets/82.png";
import img9 from "../Assets/83.png";
import img10 from "../Assets/84.png";
import img11 from "../Assets/85.png";

import img12 from "../Assets/86.png";
import img13 from "../Assets/87.png";
import img14 from "../Assets/88.png";
import img15 from "../Assets/89.png";
import img16 from "../Assets/90.png";

import img17 from "../Assets/91.png";
import img18 from "../Assets/92.png";
import img19 from "../Assets/93.png";
import img20 from "../Assets/94.png";

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

import New from "../Assets/200.png";

import { useNavigate } from "react-router-dom";

const Mens = () => {
  const navigate = useNavigate();

  const allProductNavigation = () => {
    navigate("/allProduct");
  };

  useEffect(() => {
    window.sc
  })


  return (
    <>
      <MensCarousel />

      <div className="NewP">
        <h2>MEN’S GROOMING ESSENTIALS</h2>
        <p>
          Allow notifications for tailored new arrivals ,
          <br />
          exciting launches and promotions
        </p>
      </div>

      <div className="two-sec">
        <div className="left">
          <img src={img} alt="" />
        </div>
        <div className="right">
          <h1>KITCHEN ESSENTIALS </h1>
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
          marginTop: "3%",
          fontFamily: "MonumentMineMine",
        }}
      >
        SHOP BY
      </h1>
      <div className="child">
        <div className="month" style={{ minWidth: "200px" }}>
          GLOBAL SALE
        </div>
        <div className="month" style={{ minWidth: "200px" }}>
          NEW ARRIVALS
        </div>
      </div>

      <div className="men-b">
        <div className="left">
          <p>
            Shop for <strong>$100</strong> <br />
            and stand a chance
            <br />
            to win a customized
            <br />
            Satchel bag.
          </p>
          <h1>ENTER CONTEST</h1>
          <input type="text" placeholder="RAHUL KHANNA" />
          <br />
          <br />
          <button>SUBMIT</button>
          <br />
          <button className="nap">NAPPA DORI</button>
        </div>
        <div className="right">
          <img src={New} alt="" />
        </div>
      </div>

      <div className="pro">
        <h1>MEN’S MUST’HAVES</h1>
        <button onClick={() => allProductNavigation()}>View all</button>
      </div>

      <div className="NewProductS">
        <div className="item">
          <div className="imgeOuter">
            <img src={img3} alt="" />
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
            <img src={img5} alt="" />
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
            <img src={img4} alt="" />
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
            <img src={img6} alt="" style={{ width: "40%" }} />
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
          <img src={img7} alt="" />
        </div>
        <div className="right">
          <h1>
            KITCHEN
            <br />
            ESSENTIALS{" "}
          </h1>
          <p>
            Allow notifications for tailored new arrivals,
            <br />
            exciting launches and promotions.
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
        <div className="item">
          <div className="imgeOuter">
            <img src={img9} alt="" />
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
            <img src={img10} alt="" />
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
            <img src={img11} alt="" />
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
          <img src={img12} alt="" />
        </div>
        <div className="right">
          <div className="group">
            <div className="dives">
              <div className="imageDiv">
                <img src={img13} alt="" />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
              </p>
            </div>

            <div className="dives">
              <div className="imageDiv">
                <img src={img14} alt="" />
              </div>

              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
              </p>
            </div>
          </div>
          <div className="group">
            <div className="dives">
              <div className="imageDiv">
                <img src={img15} alt="" />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
              </p>
            </div>

            <div className="dives">
              <div className="imageDiv">
                <img src={img16} alt="" />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
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
            <img src={img17} alt="" style={{ width: "50%" }} />
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
            <img src={img18} alt="" />
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
            <img src={img19} alt="" />
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
            <img src={img20} alt="" />
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

      <h1 style={{ textAlign: "center", fontFamily: "MonumentMineMine" }}>
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

export default Mens;
