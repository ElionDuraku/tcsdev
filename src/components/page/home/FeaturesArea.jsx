import React from 'react'
import CountUp from "react-countup";
function FeaturesArea() {
  
  return (
    <>
     <section className="features-area">
        <div className="container">
          <div className="title-wrap  wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="sec-title white">
              <span>TCS DEV</span>
              <h2>Features</h2>
              <p>Me poshte mund te shihni disa statistika rreth puneve tone qe kemi kryer deri me tani dhe puneve ne process.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="single-feature">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={process.env.PUBLIC_URL + "/img/icons/feature-icon-1.png"} alt="Feature-img" />
                  </div>
                  <CountUp end={120} delay={3} duration={5}  /> <sup>+</sup>
                  <h4>Project Completed</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="single-feature">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={process.env.PUBLIC_URL + "/img/icons/feature-icon-2.png"} alt="Feature-img" />
                  </div>
                  <CountUp end={500} delay={3} duration={5} /> <sup>+</sup>
                  <h4>Satisfied Clients</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow animate fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="single-feature">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={process.env.PUBLIC_URL + "/img/icons/feature-icon-3.png"} alt="Feature-img" />
                  </div>
                  <CountUp end={5} delay={1} duration={1} /> <sup>+</sup>
                  <h4>Expert Teams</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow animate fadeInUp" data-wow-delay="800ms" data-wow-duration="1500ms">
              <div className="single-feature">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={process.env.PUBLIC_URL + '/img/icons/feature-icon-1.png'} alt="Feature-img" />
                  </div>
                  <CountUp end={15} delay={3} duration={2} /> <sup>+</sup>
                  <h4>In Progress</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default FeaturesArea