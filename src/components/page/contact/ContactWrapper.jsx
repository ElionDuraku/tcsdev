import React from 'react'

function ContactWrapper() {
  return (
    <>
     <section className="contact-area sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5">
              <div className="contact-left">
                <div className="sec-title layout2">
                  <span>Get in touch</span>
                  <h2>Na kontaktoni nese keni me shumë pyetje.</h2>
                </div>
                <ul className="social-follow">
                  <li><a rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100090631771965"><i className="fab fa-facebook-f" /></a></li>
                  {/* <li><a rel="noopener noreferrer" href="https://www.twitter.com/"><i className="fab fa-twitter" /></a></li> */}
                  {/* <li><a rel="noopener noreferrer" href="https://www.pinterest.com/"><i className="fab fa-pinterest-p" /></a></li> */}
                  <li><a rel="noopener noreferrer" href="https://www.instagram.com/tcs.dev/"><i className="fab fa-instagram" /></a></li>
                </ul>
                <div className="informations">
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="info">
                      <h3>Location</h3>
                      <p>Pristina, Kosovo</p>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="info">
                      <h3>Phone</h3>
                      <a href="tel:+38344644022">+383 44 644 022</a>
                      <a href="tel:+38349246606">+383 49 246 606</a>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="info">
                      <h3>Email</h3>
                      <a href="tell:contact@tcs-dev.com">contact@tcs-dev.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-7">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe src="https://maps.google.com/maps?q=dhaka%20bangladesh&t=&z=9&ie=UTF8&iwloc=&output=embed" />
                </div>
              </div>
            </div>
          </div>
          <div className="getin-touch">
            <div className="row">
              <div className="col-md-6 col-lg-7">
                <div className="contact-form wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <h3>Have Any Questions</h3>
                  <form action="#" method="post">
                    <div className="row">
                      <div className="col-12">
                        <input type="text" name="name" placeholder="Enter your name" />
                      </div>
                      <div className="col-md-6">
                        <input type="email" name="email" placeholder="Enter your email" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" name="subject" placeholder="Subject" />
                      </div>
                      <div className="col-12">
                        <textarea name="message" cols={30} rows={10} placeholder="Your message" defaultValue={""} />
                        <input type="submit" defaultValue="Send Message" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="call-banner">
                  <img src={process.env.PUBLIC_URL + "/img/call-center.png"} alt="images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default ContactWrapper