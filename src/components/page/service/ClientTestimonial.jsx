import React from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Link } from "react-router-dom";
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);
function ClientTestimonial() {
    const testimonial={
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 30,
        slideToClickedSlide: true,

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
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 2,
            },
            1800: {
                slidesPerView: 2,
            }
        }
    }
  return (
    <>
      <div className="testimonial-area">
        <div className="container-fluid p-0">
          <div className="title-wrap">
            <div className="sec-title white">
              <span>Reviews</span>
              <h2>Klienti thonë për ne</h2>
              <p>
                Me poshtë mund te shihni disa reviews se çfarë thonë disa nga klientet për ne TCS
              </p>
            </div>
          </div>
          <Swiper {...testimonial} className="swiper testimonial-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="single-testimonial">
                  <div className="quote">
                    <i className="fas fa-quote-right" />
                  </div>
                  <h5>Jona Bytyqi</h5>
                  {/* <span>Executive Chairman</span> */}
                  <div className="stars">
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                  </div>
                  <p>
                  Impressed by TCS DEV social media management expertise! They have a knack for enhancing brands' online presence and driving engagement. Highly recommended for effective and reliable social media solutions.
                  </p>
                  <div className="reviewer">
                    <img src={process.env.PUBLIC_URL +"/img/reivewer.png"} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-testimonial">
                  <div className="quote">
                    <i className="fas fa-quote-right" />
                  </div>
                  <h5>Leart Lajqi</h5>
                  {/* <span>Director</span> */}
                  <div className="stars">
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                  </div>
                  <p>
                  It’s a serious company that helps small businesses get big. These guys opened my way of success.
                  </p>
                  <div className="reviewer">
                    <img src={process.env.PUBLIC_URL + "/img/reivewer.png"} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-testimonial">
                  <div className="quote">
                    <i className="fas fa-quote-right" />
                  </div>
                  <h5>Bleona Kosumi</h5>
                  {/* <span>Executive Chairman</span> */}
                  <div className="stars">
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                  </div>
                  <p>
                  The best page for social medias management. Amazing staff and service.
                  </p>
                  <div className="reviewer">
                    <img src={process.env.PUBLIC_URL +"/img/reivewer.png"} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-testimonial">
                  <div className="quote">
                    <i className="fas fa-quote-right" />
                  </div>
                  <h5>Deaa Buduri</h5>
                  {/* <span>Director</span> */}
                  <div className="stars">
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                    <Link to={"#"}>
                      <i className="fas fa-star" />
                    </Link>
                  </div>
                  <p>
                  The bestttt
                  </p>
                  <div className="reviewer">
                    <img src={process.env.PUBLIC_URL + "/img/reivewer.png"} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ClientTestimonial;
