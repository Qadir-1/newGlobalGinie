/** @format */

import React from "react";
import img from "../Assets/04.png";

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

const Status = () => {
  return (
    <>
      <div className="StatusRefund">
        <h2>Return/Refund Status</h2>
      </div>
      <hr
        className="myHr"
        style={{
          border: "2px solid black",
          maxWidth: "1400px",
          margin: "auto",
          marginTop: "1%",
        }}
      />

      <div className="StatusRefundTwoSec">
        <img src={img} alt="" />
        <p>
          {" "}
          Solgar B-Complex "100", 100 Vegetable Capsules - Heart Health Nervous
          System <br />
          Support - Supports Energy Metabolism - Non GMO, Vegan, Gluten Free,
          Dairy Free, <br />
          Kosher, Halal - 100 Servings.
        </p>
      </div>

      <div className="StatusRefundBox">
        <div className="left">
          <div className="first">
            <img
              src="https://cdn.pixabay.com/photo/2016/01/20/18/59/confirmation-1152155_960_720.png"
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
            <div>
              <h2
                style={{
                  color: "#43a047",
                  fontFamily: "MonumentMine",
                  fontWeight: "bolder",
                }}
              >
                Replacement Requested
              </h2>
              <p
                style={{
                  fontFamily: "Munument",
                  fontWeight: "lighter",
                  fontSize: "1.4rem",
                }}
              >
                Replacement Order : 1287459321
              </p>
            </div>
          </div>

          <div className="second">
            <div className="Fir">
              <div
                style={{
                  width: "30px",
                  marginTop: "5px",
                  height: "30px",
                  backgroundColor: "#ffbb00",
                  borderRadius: "100%",
                }}
              ></div>
              <div className="Second">
                <h2>Replacement Initiated</h2>{" "}
                <span style={{ fontSize: "1.4rem", marginTop: "1%" }}>
                  Fri, 26th Apr-11:59am
                </span>
              </div>
            </div>
            <div className="New">
              <div
                style={{
                  width: "5px",
                  height: "200px",
                  backgroundColor: "#ffbb00",
                }}
              ></div>
              <p style={{ color: "grey" }}> 1245789654</p>
            </div>
          </div>

          <div className="second" style={{ marginTop: "5px" }}>
            <div className="Fir">
              <div
                style={{
                  width: "30px",
                  marginTop: "5px",
                  height: "30px",
                  backgroundColor: "#ffbb00",
                  borderRadius: "100%",
                }}
              ></div>
              <div className="Second">
                <h2>Picked up</h2>{" "}
                <span style={{ fontSize: "1.4rem", marginTop: "1%" }}>
                  Fri, 26th Apr-11:59am
                </span>
              </div>
            </div>
            <div className="New">
              <div
                style={{
                  width: "5px",
                  height: "200px",
                  backgroundColor: "#000000",
                }}
              ></div>
              <p style={{ color: "grey" }}> 1245789654</p>
            </div>
          </div>

          <div className="second" style={{ marginTop: "5px" }}>
            <div className="Fir">
              <div
                style={{
                  width: "30px",
                  marginTop: "5px",
                  height: "30px",
                  backgroundColor: "#000000",
                  borderRadius: "100%",
                }}
              ></div>
              <div className="Second">
                <h2>Replacement complete</h2>{" "}
              </div>
            </div>
            <div className="New">
              <p style={{ color: "grey", marginLeft: "5%" }}> 1245789654</p>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="boxs">
            <h2>Address Info :</h2>
            <div>
              <h3>Tanmay</h3>
              <p>
                400069 ,jamaica , S.V Road , Mumbai <br />
                Mob No:- +91123456790
              </p>
            </div>
          </div>
          <div className="boxs2">
            <h2>Order Info :</h2>
            <div>
              <h3>View Order Details</h3>
            </div>
          </div>
        </div>
      </div>

      <h1
        style={{
          textAlign: "center",
          fontFamily: "MonumentMineMine",
          marginTop: "5%",
        }}
      >
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

export default Status;
