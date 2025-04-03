import React from 'react';
import './AboutUs.css';
import ourMission from "../../../assets/ourMission.jpg";
import OurVision from "../../../assets/OurVision.jpg";
import OurStory from '../../../assets/OurStory.jpg';
import HowItWorks from '../../../assets/HowItWorks.jpg';
import Face1 from '../../../assets/Face1.jpg';
import Face2 from '../../../assets/Face2.jpg';
import Face3 from '../../../assets/Face3.jpg';

const AboutUs = () => {
  return (
    
    <>
      <section className="p-3">
        <section className="heading d-flex flex-column align-items-start justify-content-center px-5 fw-bold">
          <section className="w-50">
            <h1 className="text-white">"Instant Access, Endless Hope Your Virtual Blood Lifeline."</h1>
            <p className="text-white pt-2 fs-6">"Empowering lives through quick and easy access to blood. A virtual blood bank that ensures help is always just a click away."</p>
          </section>
        </section>

        {/* Mission and Vision */}
        <section className="mission-vision d-flex flex-row p-4 justify-content-evenly">
          <section className="mission-vision1 col-6 d-flex flex-column justify-content-center text-danger">
            <h2>Our Mission</h2>
            <p className="fs-5">
              "Our mission is to bridge the gap between blood donors and those in need by creating a seamless, reliable, and accessible platform that saves lives through the power of technology and community support."
            </p>
          </section>
          <section className="mission-vision1">
            <img src={ourMission} alt="our mission" />
          </section>
        </section>

        <section className="mission-vision d-flex flex-row justify-content-evenly p-4" style={{ backgroundColor: "#F08080" }}>
          <section className="col-5 d-flex flex-column justify-content-center">
            <h2>Our Vision</h2>
            <p className="fs-5">
              "Our vision is to revolutionize blood donation by building a connected community, empowering life-saving contributions through technology, and ensuring timely support for those in need."
            </p>
          </section>
          <section className="mission-vision1">
            <img src={OurVision} alt="our vision" />
          </section>
        </section>

        <section className="mission-vision d-flex flex-row p-4 justify-content-evenly">
          <section className="mission-vision1">
            <img src={OurStory} alt="our story" />
          </section>
          <section className="mission-vision1 col-6 d-flex flex-column justify-content-center text-danger">
            <h2>Our Story</h2>
            <p className="fs-5">
              "We created our virtual blood bank web-application to ensure that finding blood during emergencies is simple and fast, saving precious time and lives through technology and community support."
            </p>
          </section>
        </section>

        <section className="mission-vision d-flex flex-row justify-content-evenly p-4 text-white" style={{ backgroundColor: "#8B0000" }}>
          <section className="col-6 d-flex flex-column justify-content-center">
            <h2>How It Works</h2>
            <p className="fs-5">
              "With our Virtual Blood Bank, accessing blood is simple and efficient."
            </p>
            <ul>
              <li>Get started</li>
              <li>Search for available blood based on type and location</li>
              <li>Submit your request with necessary details.</li>
            </ul>
            <p>Our platform connects you to nearby hospitals or blood banks, providing real-time updates and tracking to ensure a smooth and reliable process.</p>
          </section>
          <section className="mission-vision1">
            <img src={HowItWorks} alt="how it works" />
          </section>
        </section>

        {/* Feedback Section */}
        <section className="feedback p-3 justify-content-center mt-3">
          <h2>
            <i className="fa fa-heartbeat" aria-hidden="true"></i>
            <div className="mx-3">Words From the Heart</div>
            <i className="fa fa-heartbeat" aria-hidden="true"></i>
          </h2>
          <section className="review d-flex flex-row col-11">
            <section className="d-flex flex-column">
              {/* First Review Card */}
              <section className="card d-flex flex-row justify-content-center mb-4 align-content-center gap-2">
                <img src={Face1} alt="smiling face" />
                <section className="content align-content-center">
                  <span>
                    <i className="ri-double-quotes-l"></i>
                  </span>
                  <section className="details">
                    <p>
                      "During a medical emergency in my family, finding blood was urgent and stressful. Virtual Blood Bank helped me locate the right resources quickly, making a tough situation a bit easier to handle."
                    </p>
                  </section>
                </section>
              </section>

              {/* Second Review Card */}
              <section className="card d-flex flex-row justify-content-center mb-4 align-content-center gap-2">
                <img src={Face2} alt="face2" />
                <section className="content align-content-center">
                  <span>
                    <i className="ri-double-quotes-l"></i>
                  </span>
                  <section className="details">
                    <p>
                      "When I was in urgent need of blood for a relative, I was overwhelmed with uncertainty. Virtual Blood Bank connected me with the right resources fast, making a difficult situation more manageable."
                    </p>
                  </section>
                </section>
              </section>

              {/* Third Review Card */}
              <section className="card d-flex flex-row justify-content-center mb-4 align-content-center gap-2">
                <img src={Face3} alt="face3" />
                <section className="content align-content-center">
                  <span>
                    <i className="ri-double-quotes-l"></i>
                  </span>
                  <section className="details">
                    <p>
                      "In a crisis, time is everything. Virtual Blood Bank made it easier to find the blood needed in a short time, reducing the pressure and making the whole process a little less overwhelming."
                    </p>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default AboutUs;
