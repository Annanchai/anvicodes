import React from "react";
import "../styles/homePage.scss";
import NavMenu from "../components/nav";
import sideBanner from "../images/sideBanner.png";
import Lottie from "react-lottie";
import data from "../lotties/development.json";
import responsive from "../images/responsive.svg";
import section2 from "../images/section2.png";
import webdesign from "../images/webdesign.svg";
import logodesign from "../images/logodesign.svg";

export default function HomePage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  let url = "";
  return (
    <div>
      <div className="section1">
        <NavMenu />
        <div className="section1Content">
          <img src={sideBanner} alt="sideBanner" className="sideBanner" />
          <div className="contentContainer">
            <div className="headingContainer">
              <h2>WE ARE A</h2>
              <h1>CREATIVE</h1>
              <h3>DEVELOPMENT AGENCY</h3>
              <p>
                We're a team of prefessionals who build result-oriented
                experiences. Our aim is to give you creative design and
                development services which helps your brand grow.
              </p>
            </div>
            <div className="lottieContainer">
              <Lottie options={defaultOptions} height={450} width={450} />
              <a className="button" href={url}>
                GET STARTED
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className="section2" id="about">
        <div className="contentContainer">
          <div className="headingContainer">
            <h1>STRATEGIC DESIGNS</h1>
            <h3>THAT ARE MORE COMPLETE AND RESILIENT</h3>
            <p>
              We are commited in focussing on designing and development. Our
              proficient approach we help our clients optimise their innovative
              brands by providing them with result oriented designs which can
              perform dynamically in this rapidly evolving world. We expertise
              in providing products that takes your business to the next level.
            </p>
          </div>
          <div>
            <img src={responsive} alt="" />
          </div>
        </div>
        <div className="imgContainer">
          <img src={section2} alt="" />
        </div>
      </div>
      <div className="section3">
        <div className="headingContainer">
          <h1>Services</h1>
        </div>
        <div className="contentContainer">
          <div className="service1">
            <div className="content">
              <h3>Web Design</h3>
              <h3>And Development</h3>
              <p>
                Right designs which are well planned and creatively conceived
                websites are an integral part of the success of your brand.
                AnviCodes is the right place where we build for you beautiful
                and interactive custom websites that engage your visitors.
              </p>
            </div>
            <div className="imageContainer">
              <img className="webdesign" src={webdesign} alt="webdesign" />
            </div>
          </div>
          <div className="service2">
            <div className="content">
              <h3>Custom</h3>
              <h3>Logo Design</h3>
              <p>
                Right designs which are well planned and creatively conceived
                websites are an integral part of the success of your brand.
                AnviCodes is the right place where we build for you beautiful
                and interactive custom websites that engage your visitors.
              </p>
            </div>
            <div className="imageContainer">
              <img className="logodesign" src={logodesign} alt="webdesign" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
