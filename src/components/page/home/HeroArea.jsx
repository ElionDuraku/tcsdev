import React from 'react'
import { Link } from 'react-router-dom'

function HeroArea() {
    const scrollTop =()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
     <section className="hero-area">
        <div className="ken-burns-slideshow">
          <img src={process.env.PUBLIC_URL + "/img/hero-banner.jpg"} alt="HeroBanner" />
        </div>
        <div className="verticale-social">
          <ul className="vertical-media">
            <li><a href="https://www.facebook.com/">Facebook</a></li>
            <li><a href="https://www.instagram.com/tcs.dev/">Instagram</a></li>
            <li><a href="https://www.linkedin.com/">Linkedin</a></li>
          </ul>
        </div>
        <div className="hero-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero-content">
                  <h1>TCS DEVELOPMENT<span>It Agency.</span></h1>
                  <p>Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. ol Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero. Donec nec dui luctus, pellentesque lacus sed, mollis leo.</p>
                  <div className="buttons">
                    <div className="cmn-btn">
                      <div className="line-1" />
                      <div className="line-2" />
                      <Link to={`${process.env.PUBLIC_URL}/about`} onClick={scrollTop}>About Us</Link>
                    </div>
                    <div className="cmn-btn layout-two">
                      <div className="line-1" />
                      <div className="line-2" />
                      <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>See Project</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" />
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default HeroArea