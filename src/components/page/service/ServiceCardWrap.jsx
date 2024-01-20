import React from "react";
import ServiceCard from "./ServiceCard";

function ServiceCardWrap() {
  return (
    <>
      <div className="services-grid sec-mar">
        <div className="container">
          <div className="title-wrap">
            <div className="sec-title">
            <span>Sherbimet tona</span>
              <h2>Sherbimet</h2>
              <p>
                TCS DEV mund te ofroje për ju sherbime nga me te ndryshmet ne lidhje me zhvillimin e webfaqeve, rrjetet sociale, krijimin e programeve etj...
              </p>
            </div>
          </div>
          <div className="row g-4">
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={1} image="/img/icons/service-icon-1.png" title="Web Development" details="Ne si TCS DEV mund te krijojme për ju webfaqe unike dhe te personalizuar duke perdorur teknologjite me te fundit."/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={2} image="/img/icons/service-icon-2.png" title="Social Media Management" details="TCS DEV mund te ofroje për biznesin tuaj krijimin e nje permbajtje unike ne rrjetet sociale."/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={3}  image="/img/icons/service-icon-3.png" title="Desktop Programms" details="TCS DEV mund te krijoj për ju programe prej me te ndryshmeve qe ju nevojiten për biznesin tuaj."/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={4} image="/img/icons/service-icon-4.png" title="Video Editing" details="Ofrojm editimin e videove dhe realizimin e tyre ne menyre profesionale me pajisjet me te fundit."/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={5} image="/img/icons/service-icon-5.png" title="Graphic Design" details="Çdo biznes ka nevoje për krijimin e indentitetit (branding) e ne si TCS mund ta bejme me se miri."/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={6} image="/img/icons/service-icon-6.png" title="Mobile Applications" details="Ne ofrojme edhe krijimin e aplikacioneve IOS/Android nga nje ekipe profesionale ku perkujdeset për çdo detaj."/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCardWrap;
