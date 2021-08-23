import React from "react";
import "../css/matter.css";

const Matter = () => {
  return (
    <div className="matter-holder">
      <div className="matter-container">
        <div className="description-holder">
          <div className="description-container">
            <div className="description-title">Some Thing for Everyone</div>
            <div className="description-content">
              <p>
                AAKANKSHA is registered under the Indian Government MSME
                E-commerce platform. We are an India-based start-up.
              </p>
              <p>
                Our platform helps the customer with Certified Online Education
                with Top educational partners, we also provide online shopping &
                Home delivery of local Food delights and medicine with online
                doctor consultation. Also, giving Home services to highly
                skilled professionals. We provide a community platform called
                Social spotlight where all like-minded people can discuss and
                share their thoughts with 24*7 customer services. No need to
                hassle around different apps and websites. We provide daily
                needs on a single platform.
              </p>
              <p>AAKANSHA is for every online consumer.</p>
            </div>
          </div>
        </div>
        <div className="services-holder">
          <div className="services-container">
            <div className="service-offered">
              <div className="service-logo">
                <img src="trophy.png" alt="trophy" />
              </div>
              <div className="service-matter">
                <div className="service-title">High Quality</div>
                <div className="service-desc">Crafted from top materials</div>
              </div>
            </div>
            <div className="service-offered">
              <div className="service-logo">
                <img src="guarantee.png" alt="guarantee" />
              </div>
              <div className="service-matter">
                <div className="service-title">Warranty Protection</div>
                <div className="service-desc">Over 2 years</div>
              </div>
            </div>
            <div className="service-offered">
              <div className="service-logo">
                <img src="shipping.png" alt="shipping" />
              </div>
              <div className="service-matter">
                <div className="service-title">Free Shipping</div>
                <div className="service-desc">Order over 150 $</div>
              </div>
            </div>
            <div className="service-offered">
              <div className="service-logo">
                <img src="customer-support.png" alt="cs" />
              </div>
              <div className="service-matter">
                <div className="service-title">24 / 7 Support</div>
                <div className="service-desc">Dedicated support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matter;
