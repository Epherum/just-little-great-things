import "./socials.scss";
function Socials() {
  return (
    <div className="socials-container" data-scroll-section>
      <ul className="socials-links">
        <li>Instagram</li>
        <li>Dribble</li>
        <li>Behance</li>
        <li>Pinterest</li>
      </ul>
      <img className="socials-img1" src="4.jpg" alt="" />
      <p className="socials-p1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt eos
        dolorem consectetur ducimus! Debitis maxime officia fugit odit nobis
        temporibus ratione
      </p>
      <p className="socials-p2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, saepe
        beatae! Aut accusamus cupiditate quam illum laudantium porro, veniam
        facere, aperiam corrupti error impedit sunt saepe perspiciatis expedita
        quo delectus?
      </p>
      <img className="socials-img2" src="3.jpg" alt="" />
      <img className="socials-img3" src="2.jpg" alt="" />
      <img className="socials-img4" src="1.jpg" alt="" />
      <img className="socials-img5" src="4.jpg" alt="" />
      <p className="socials-p3">
        <hr
          style={{ width: "5vw", marginBottom: "20px", marginTop: "120px" }}
        />
        we're working <br />
        since 2023
      </p>
    </div>
  );
}

export default Socials;
