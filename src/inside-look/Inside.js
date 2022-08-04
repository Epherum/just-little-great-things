import React from "react";
import "./inside.scss";
function Inside() {
  return (
    <section className="inside-container" data-scroll-section>
      <h1
        className="inside-title"
        data-scroll
        data-scroll-speed="2"
        data-scroll-direction="vertical"
      >
        The Inside Look
      </h1>
      <div className="inside-photos">
        <div>
          <img src="2.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            officiis, ullam iusto id quae suscipit illum sapiente tempora minima
            quos tenetur, eaque deleniti eum dicta ad cupiditate velit in
            voluptates.
          </p>
        </div>
        <div>
          <img src="3.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            officiis
          </p>
        </div>
      </div>
      <div className="inside-about-us">
        <p className="inside-about-us-p1">
          <hr className="inside-about-us-hr" color="black" /> Get To Know Our
          <br /> Creative Team
        </p>
        <div>
          <p className="inside-about-us-p2">Read More</p>
          <h1>About Us</h1>
        </div>
      </div>
    </section>
  );
}

export default Inside;
