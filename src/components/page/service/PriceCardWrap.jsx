import React from "react";
import PriceCard from "./PriceCard";

function PriceCardWrap(props) {
  return (
    <>
      <div className="priceing-plan sec-mar">
        <div className="container">
          <div className="title-wrap">
            <div className={`${"sec-title"}`}>
              <span>TCS DEV </span>
              <h2>Plani i çmimeve</h2>
              <p>
                Ketu mund te shihni çmimet për pakot për Social Media Managment dhe Web Development.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="price-table-tab">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Social Media Management
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Web Development
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade active show"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row g-4">
                <div
                  className="col-md-6 col-lg-4 wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <PriceCard
                    cartTitle="Small Business"
                    priceCatagory="Single Business"
                    layoutClass="layout2"
                    price={149.99}
                    time="Per Month"
                    responsive={10}
                    ppc={5}
                    seo={10}
                    facebook={5}
                    video={2}
                  />
                </div>
                <div
                  className="col-md-6 col-lg-4 wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <PriceCard
                    cartTitle="Professional"
                    priceCatagory="Small team"
                    layoutClass="layout2"
                    price={199.5}
                    time="Per Month"
                    responsive={10}
                    ppc={5}
                    seo={10}
                    facebook={5}
                    video={2}
                  />
                </div>
                <div
                  className="col-md-6 col-lg-4 wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <PriceCard
                    cartTitle="Enterprice"
                    priceCatagory="Large Team"
                    layoutClass="layout2"
                    price={249.99}
                    time="Per Month"
                    responsive={10}
                    ppc={5}
                    seo={10}
                    facebook={5}
                    video={2}
                  />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="row g-4">
                <div
                  className="col-md-6 col-lg-4 wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <PriceCard
                    cartTitle="Small Business"
                    priceCatagory="Single Business"
                    layoutClass="layout2"
                    price={90.99}
                    time="Per Year"
                    responsive={10}
                    ppc={8}
                    seo={12}
                    facebook={5}
                    video={2}
                  />
                </div>
                <div
                  className="col-md-6 col-lg-4 wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <PriceCard
                    layoutClass="layout2"
                    cartTitle="Professional"
                    priceCatagory="Small team"
                    price={150.5}
                    time="Per Year"
                    responsive={10}
                    ppc={8}
                    seo={12}
                    facebook={5}
                    video={2}
                  />
                </div>
                <div
                  className="col-md-6 col-lg-4 wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <PriceCard
                    layoutClass="layout2"
                    cartTitle="Enterprice"
                    priceCatagory="Large Team"
                    price={456.99}
                    time="Per Year"
                    responsive={10}
                    ppc={8}
                    seo={12}
                    facebook={5}
                    video={2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceCardWrap;
