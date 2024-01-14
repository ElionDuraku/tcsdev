import React from 'react'

function HistoryArea() {
  return (
    <>
     <section className="history-area sec-mar">
        <div className="container">
          <div className="title-wrap">
            <div className="sec-title">
              <span>History</span>
              <h2>TCS DEV History</h2>
            </div>
          </div>
          <div className="single-history">
            <div className="history wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="circle">
                <div className="inner" />
              </div>
              <div className="history-thumb">
                <img src={process.env.PUBLIC_URL + '/img/timeline-1.jpg'} alt="history-img" />
              </div>
            </div>
            <div className="history wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="circle">
                <div className="inner" />
              </div>
              <div className="history-cnt">
                <div className="history-cnt-inner">
                    <span>Genesis</span>
                    <h4>Inception and Vision</h4>
                    <p>In the first step of our journey, TCS was born with a clear vision and a commitment to redefine the digital landscape. Grounded in a passion for technology and a desire to provide exceptional web development and social media management services, our founders set out to create a company that would blend innovation with client-centric values.</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="single-history">
            <div className="history wow animate fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="circle">
                <div className="inner" />
              </div>
              <div className="history-cnt">
                <div className="history-cnt-inner">
                    <span>Formation</span>
                    <h4>Building Foundations</h4>
                    <p>During the initial six months, TCS focused on laying strong foundations. We assembled a team of talented professionals, each bringing unique skills and perspectives to the table. Collaborative work environments and a commitment to staying abreast of industry trends became the cornerstones of our culture. Simultaneously, we began forging relationships with our first clients, laying the groundwork for what would become long-lasting partnerships.</p>
                  </div>    
              </div>
            </div>
            <div className="history wow animate fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="circle">
                <div className="inner" />
              </div>
              <div className="history-thumb">
                <img src={process.env.PUBLIC_URL + '/img/timeline-2.jpg'} alt="history-img" />
              </div>
            </div>
          </div>
          <div className="single-history">
            <div className="history wow animate fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="circle">
                <div className="inner" />
              </div>
              <div className="history-thumb">
                <img src={process.env.PUBLIC_URL + '/img/timeline-3.jpg'} alt="history-img" />
              </div>
            </div>
            <div className="history wow animate fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="circle">
                <div className="inner" />
              </div>
              <div className="history-cnt">
                <div className="history-cnt-inner">
                    <span>Achievement</span>
                    <h4>Delivering Excellence</h4>
                    <p>As TCS entered its second half-year, the focus shifted to delivering excellence in every project. Our web development team created visually stunning and technologically advanced websites, while our social media managers engaged audiences with strategic campaigns. The positive feedback from satisfied clients fueled our determination to continuously improve and innovate.</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="single-history">
            <div className="history wow animate fadeInLeft" data-wow-delay="500ms" data-wow-duration="1500ms">
              <div className="circle">
                <div className="inner" />
              </div>
              <div className="history-cnt">
                <div className="history-cnt-inner">
                    <span>Momentum</span>
                    <h4>Celebrating Milestones</h4>
                    <p>Now, having completed our first year, TCS proudly celebrates significant milestones. From successfully launching websites that resonate with clients' brands to managing impactful social media campaigns, each project has been a testament to our dedication. As we reflect on our journey so far, we express gratitude to our clients, partners, and the TCS team for making the inaugural year one of growth, learning, and achievement.</p>
                  </div>
              </div>
            </div>
            <div className="history wow animate fadeInRight" data-wow-delay="500ms" data-wow-duration="1500ms">
              <div className="circle">
                <div className="inner" />
              </div>
              <div className="history-thumb">
                <img src={process.env.PUBLIC_URL + '/img/timeline-4.jpg'} alt="history-img" />
              </div>
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default HistoryArea