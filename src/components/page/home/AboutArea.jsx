import React, { useState } from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

function AboutArea(props) {
  const [isOpen, setOpen]=useState(false)
  return (
    <>
      <section className="about-area sec-mar-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 or-2 wow animate fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className={`${"sec-title layout2"} ${props.white}`}>
                <span>Get To Know</span>
                <h2>About Us</h2>
              </div>
              <div className={`${"about-left"} ${props.layoutClass}`}>
                <h3>We do design, code &amp; develop Software finally launch.</h3>
                <p>Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. Class onlin aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec lacinia placerat felis non aliquam.</p>
                <div className={`${"company-since"} ${props.layoutClass}`}>
                  <div className="company-logo">
                    <img src={`${process.env.PUBLIC_URL} ${props.image}`} alt="about-images" />
                  </div>
                  <strong>#1</strong>
                  <h4>Best Creative IT Agency And Solutions <span>Since 2005.</span></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 or-1 wow animate fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="about-right">
                <div className="banner-1">
                  <img src={process.env.PUBLIC_URL + '/img/about-baner-1.jpg'} alt="about-images" />
                </div>
                <div className="banner-2">
                  <img src={process.env.PUBLIC_URL + '/img/about-baner-2.jpg'}  alt="about-images" />
                  <div className="banner2-inner">
                    <div className="play">
                      <div className="video-popup" onClick={()=>setOpen(true)} ><i className="fas fa-play" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="IUN664s7N-c"
          autoplay = {1}
          onClose={() => setOpen(false)}
        />
      </React.Fragment> 
    </>
  )
}

export default AboutArea