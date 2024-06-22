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
                <h2>Rreth Nesh</h2>
              </div>
              <div className={`${"about-left"} ${props.layoutClass}`}>
                <h3>Kush është TCS DEV?</h3>
                <p>Mirë se vini në TCS, ku inovacioni takohet me përsosmërinë në fushën dixhitale. Si një kompani dinamike dhe që mendon përpara, ne krenohemi me krijimin e përvojave gjithëpërfshirëse në internet që lartësojnë markën tuaj dhe krijojnë lidhje domethënëse me audiencën tuaj. E krijuar me një pasion për teknologjinë dhe një përkushtim ndaj suksesit të klientit, TCS qëndron si një fener kreativiteti, ekspertize dhe rezultatesh.</p>
                <div className={`${"company-since"} ${props.layoutClass}`}>
                  
                  <strong>#1</strong>
                  <h4>Technology Computing and Solution <span>Since 2022.</span></h4>
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