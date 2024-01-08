import React from "react";
import { Link } from "react-router-dom";
import "swiper/css/autoplay";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
} from "swiper";
SwiperCore.use([Navigation, Autoplay]);

function ServiceArea(props) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const serviceSlider= {
    loop: true,
    speed: 1000,
    autoplay:{
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
  }
  return (
    <>
      <section className={`${"services-area sec-mar"} ${props.layoutClass}`}>
        <div className="container">
          <div
            className="title-wrap wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className={`${"sec-title"} ${props.white}`}>
              <span>Our Solutions</span>
              <h2>Services</h2>
              <p>
                Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                convallis sapien, quis commodo libero.
              </p>
            </div>
          </div>
          <Swiper {...serviceSlider} className="swiper services-slider">
            <div className="swiper-wrapper">
              <SwiperSlide
                className="swiper-slide wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className={`${"single-service"} ${props.layoutClass}`}>
                  <span>01</span>
                  <div className="icon">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/img/icons/service-icon-1.png"
                      }
                      alt="service-icon"
                    />
                  </div>
                  <h4>Web Design</h4>
                  <p>
                    Integer purus odio, placerat nec rhoncu in, ullamcorper nec
                    dolor.
                  </p>
                  <div className="read-btn">
                    <Link
                      to={`${process.env.PUBLIC_URL}/service-details`}
                      onClick={scrollTop}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className={`${"single-service"} ${props.layoutClass}`}>
                  <span>02</span>
                  <div className="icon">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/img/icons/service-icon-2.png"
                      }
                      alt="service-icon"
                    />
                  </div>
                  <h4>UI/UX Design</h4>
                  <p>
                    Integer purus odio, placerat nec rhoncu in, ullamcorper nec
                    dolor.
                  </p>
                  <div className="read-btn">
                    <Link
                      to={`${process.env.PUBLIC_URL}/service-details`}
                      onClick={scrollTop}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide wow animate fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className={`${"single-service"} ${props.layoutClass}`}>
                  <span>03</span>
                  <div className="icon">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/img/icons/service-icon-3.png"
                      }
                      alt="service-icon"
                    />
                  </div>
                  <h4>Software Development</h4>
                  <p>
                    Integer purus odio, placerat nec rhoncu in, ullamcorper nec
                    dolor.
                  </p>
                  <div className="read-btn">
                    <Link
                      to={`${process.env.PUBLIC_URL}/service-details`}
                      onClick={scrollTop}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </section>
    </>
  );
}

export default ServiceArea;
