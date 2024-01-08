import React from 'react'
import "swiper/css/autoplay";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
} from "swiper";
SwiperCore.use([Navigation, Autoplay]);
function PartnarArea() {
    const partnarSlider={
        loop: true,
        slidesPerView: 5,
        spaceBetween: 20,
        speed: 1000,
        autoplay:{
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next-c',
            prevEl: '.swiper-button-prev-c',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    }
  return (
    <>
      <section className="our-partner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="sec-title white layout2">
                <span>Satisfied Client</span>
                <h2>Our Partner</h2>
                <div className="-partnerslider-navigator">
                  <div className="swiper-button-prev-c"><i className="bi bi-chevron-left" /></div>
                  <div className="swiper-button-next-c"><i className="bi bi-chevron-right" /></div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <Swiper {...partnarSlider} className="swiper partner-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="single-partner">
                      <img src={process.env.PUBLIC_URL + "/img/partner/partner-1.png"} alt="partnar-img" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="single-partner">
                      <img src={process.env.PUBLIC_URL + "/img/partner/partner-2.png"} alt="partnar-img" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="single-partner">
                      <img src={process.env.PUBLIC_URL + "/img/partner/partner-3.png"} alt="partnar-img" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="single-partner">
                      <img src={process.env.PUBLIC_URL + "/img/partner/partner-4.png"} alt="partnar-img" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="single-partner">
                      <img src={process.env.PUBLIC_URL + "/img/partner/partner-5.png"} alt="partnar-img" />
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default PartnarArea