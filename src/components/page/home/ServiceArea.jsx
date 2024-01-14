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
              <span>Sherbimet tona</span>
              <h2>Sherbimet</h2>
              <p>
                TCS DEV mund te ofroje për ju sherbime nga me te ndryshmet ne lidhje me zhvillimin e webfaqeve, rrjetet sociale, krijimin e programeve etj...
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
                  <h4>Web Development</h4>
                  <p>
                    Ne si TCS DEV mund te krijojme për ju webfaqe unike dhe te personalizuar duke perdorur teknologjite me te fundit.
                  </p>
                  <div className="read-btn">
                    <Link
                      to={`${process.env.PUBLIC_URL}/service-details`}
                      onClick={scrollTop}
                    >
                      Meso me shumë
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
                  <h4>Social Media Managment</h4>
                  <p>
                    TCS DEV mund te ofroje për biznesin tuaj krijimin e nje permbajtje unike ne rrjetet sociale.
                  </p>
                  <div className="read-btn">
                    <Link
                      to={`${process.env.PUBLIC_URL}/service-details`}
                      onClick={scrollTop}
                    >
                      Meso me shumë
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
                  <h4>Desktop Programs</h4>
                  <p>
                    TCS DEV mund te krijoj për ju programe prej me te ndryshmeve qe ju nevojiten për biznesin tuaj.
                  </p>
                  <div className="read-btn">
                    <Link
                      to={`${process.env.PUBLIC_URL}/service-details`}
                      onClick={scrollTop}
                    >
                      Meso me shumë
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
