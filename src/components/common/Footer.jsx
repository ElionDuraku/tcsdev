import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  const scrollTop=()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
      <footer className={props.footerAddclass} >
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link scrollTo={scrollTop} to={"/"}>
                      <img src={process.env.PUBLIC_URL +"/img/logo.svg"} alt="FooterImg" />
                    </Link>
                  </div>
                  <p>
                  TCS DEV jemi nje kompani ku merremi me krijimin e webfaqeve, perveq webfaqeve merremi edhe me menaxhimin e rrjeteve sociale, krijimin e desktop porgrams etj
                  </p>
                  <ul className="social-media-icons">
                    <li>
                      <a href="https://www.instagram.com/tcs.dev/">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/tcsdevv">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.tiktok.com/@tcs.dev?lang=en">
                        <i className="fab fa-tiktok" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/86207256/admin/feed/posts/">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>Sherbimet Tona</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service-details`} onClick={scrollTop}>Web Development</Link>
                    </li>
                    <li>
                    <Link to={`${process.env.PUBLIC_URL}/service-details`} onClick={scrollTop}>Social Media Managment</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service-details`} onClick={scrollTop}>Desktop Application</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service-details`} onClick={scrollTop}>Digital Merketing</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service-details`} onClick={scrollTop}>Mobile App Development</Link>
                    </li>
                    <li>
                      {/* <Link to={`${process.env.PUBLIC_URL}/service-details`} onClick={scrollTop}>App Design</Link> */}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>Links</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/about`} onClick={scrollTop}>Rreth Nesh</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service`} onClick={scrollTop}>Shërbimet</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>Projektet</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/blog`} onClick={scrollTop}>Blog</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/contact`} onClick={scrollTop}>Career</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service`} onClick={scrollTop}>Pricing Plan</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>Contacts</h4>
                  <div className="number">
                    <div className="num-icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="phone">
                    <a href="tel:+38344644022">+383 44 644 022</a>
                      <a href="tel:+38349246606">+383 49 246 606</a>
                    </div>
                  </div>
                  <div className="office-mail">
                    <div className="mail-icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="email">
                    <a href="tell:contact@tcs-dev.com">contact@tcs-dev.com</a>
                    </div>
                  </div>
                  <div className="address">
                    <div className="address-icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <p>Pristina, Kosovo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-12 col-md-4 col-lg-4 col-xl-5">
                <div className="copy-txt">
                  <span>
                    Copyright 2024 | All rights reserved by{" "}
                    <Link to={"www.tcs-dev.com"}>TCS DEV</Link>
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-8 col-xl-7">
                <ul className="footer-bottom-menu">
                  <li>
                    <Link to={"#"}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Terms of Use</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
