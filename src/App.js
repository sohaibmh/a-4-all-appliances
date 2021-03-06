import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./images/logo.png";
import {
  calendar,
  clock,
  approval,
  washingMachine,
  fridge,
  cooker,
  oven,
  dishwasher,
  microwave,
  poundCoins,
  repairTools,
  faulty,
} from "./svgs";
import PageLeaveModal from "./components/PageLeaveModal";
import ApplianceRepair from "./components/ApplianceRepair";

export const ApplianceRepairContext = createContext();

const homepage = () => {
  document.location.href = "/";
};

function App() {
  const [showPageLeaveModal, setShowPageLeaveModal] = useState(false);
  const [currentApplinace, setCurrentAppliance] = useState("");

  const mainSectionSvgs = () => {
    const svgs = [fridge, washingMachine, cooker, oven, dishwasher, microwave];

    return svgs.map((svg) => {
      return (
        <Link to={`/${svg.props.id}`} key={`/${svg.props.id}`}>
          <span
            onClick={() => {
              setCurrentAppliance(svg.props.id);
            }}
            key={svg.props.id}
          >
            {svg}
          </span>
        </Link>
      );
    });
  };

  return (
    <Router>
      <ApplianceRepairContext.Provider value={currentApplinace}>
        <div onMouseLeave={() => setShowPageLeaveModal(true)}>
          <PageLeaveModal show={showPageLeaveModal} />
          <div className="container">
            <div className="site-header sticky-top py-1" id="header">
              <div></div>
              <div className="py-2" id="logoContainer">
                <img
                  className="logo"
                  src={logo}
                  onClick={homepage}
                  alt="logo"
                />
              </div>
              <form
                action="https://a4allappliances.simplybook.it/v2/#book"
                id="headerButton"
              >
                <button type="submit" className="btn btn-warning btn-md">
                  Book Now
                </button>
              </form>
            </div>
            <div id="mainSection">
              <div className="repairInfo">
                <div className="container">
                  <div className="row">
                    <div className="serviceBox">
                      <div className="service-content">
                        {
                          <h1
                            style={{
                              fontSize: "40px",
                              textShadow: "0px 2px #aaa9ba",
                            }}
                          >
                            APPLIANCES REPAIR SERVICE
                          </h1>
                        }
                        <br />
                        We repair all kitchen appliances including fridge
                        freezers, washing machines, ovens, dishwashers, cookers,
                        and more.
                        <br /> <br />
                        <div>
                          <div className="mainSectionSvgs">
                            {mainSectionSvgs()}
                          </div>
                          <Route
                            path={`/${currentApplinace}`}
                            component={ApplianceRepair}
                          />
                        </div>
                        <br />
                        <div className="infoText">
                          We are dedicated to bringing our professionalism,
                          expertise, and technical knowledge in diagnosing and
                          rectifying your appliance.
                        </div>
                        <br />
                        Take advantage of our online repair booking service
                        which is directly integrated with our schedule system.
                      </div>
                      <a
                        className="read-more"
                        href="https://a4allappliances.simplybook.it/v2/#book"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
              <div
                className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
                id="service-1"
              >
                <div
                  className="my-3"
                  style={{
                    paddingTop: "0",
                    fontFamily: "Bangers, cursive",
                    letterSpacing: "4px",
                  }}
                >
                  <b className="display-5" id="sameDayService">
                    Same Day/Next Day Service
                  </b>
                </div>
              </div>
              <div
                className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
                id="service-2"
              >
                <div
                  className="my-3"
                  style={{
                    paddingTop: "0",
                    fontFamily: "Bangers, cursive",
                    letterSpacing: "4px",
                    paddingBottom: "30px",
                  }}
                >
                  <b className="display-5">Covering all London areas</b>
                </div>
                <div
                  className="bg-dark shadow-sm mx-auto"
                  styles="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
                ></div>
              </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
              <div
                className="mr-md-3  px-md-5 text-center overflow-hidden"
                id="icons"
              >
                {calendar}
                <p className="svgTags calendarTag">Flexible Scheduling</p>
                {clock}
                <p className="svgTags">Quick Service</p>
                {approval}
                <p className="svgTags approvalTag">Approved Quality Control</p>
              </div>
              <div
                className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
                id="brandsLogos"
              ></div>
            </div>

            <div className="faqs">
              {poundCoins}
              <div className="faqsText">
                <b style={{ fontSize: "24px", color: "black" }}>
                  How much will my appliance repair cost?
                </b>
                <br /> <br />
                <b>
                  We charge a fixed price of £79 + VAT + parts for a completed
                  repair (any day service). If you want same day/next day
                  service it will be £99 + VAT + parts. Reduced to £45 + VAT if
                  Beyond Economical Repair.
                </b>
                <br /> <br />
                <p>
                  We visit your property and diagnose the problem with your
                  appliance and tell you if it needs any parts. For this, we
                  will only charge you £45 + VAT. If we can repair your
                  appliance then the total charge will only be £79 + VAT +
                  parts. In case we need to visit your property more than once
                  there will be no extra charge for that. Also, in many cases,
                  no parts are required.
                </p>
              </div>
              {repairTools}
              <div className="faqsText">
                <b style={{ fontSize: "24px", color: "black" }}>
                  What if you can't repair my appliance?
                </b>
                <br /> <br />
                <p>
                  If you are not happy with the cost of the parts, or if your
                  appliance is Beyond Economical Repair, the charge is only £45
                  + VAT. This covers our admin costs, the engineer's time, as
                  well as travel costs.
                </p>
              </div>
              {faulty}
              <div className="faqsText">
                <b style={{ fontSize: "24px", color: "black" }}>
                  What if my appliance goes wrong again?
                </b>
                <br /> <br />
                <p>
                  If your appliance goes wrong again within 28 days of
                  completion of our repair, and the fault is the same as the one
                  we rectified, we will repair it back at no extra cost.
                </p>
              </div>
            </div>
            <footer className="container py-5">
              <div className="row text-muted" id={"footer"}>
                <img src={logo} alt="logo" className="footerLogo" />
                <div>
                  <b>Our Address</b>
                  <br />
                  East Lane Business Park <br />
                  Office 11 Silver Box House <br />
                  56 Magnet Road <br />
                  Wembley
                  <br />
                  HA9 7RG
                  <br />
                </div>
                <div>
                  <b>Contact Us</b>
                  <br />
                  020 7998 6900 <br />
                  079 5848 0832 <br />
                  a4allappliances@yahoo.co.uk
                </div>
              </div>
            </footer>
          </div>
        </div>
      </ApplianceRepairContext.Provider>
    </Router>
  );
}

export default App;
