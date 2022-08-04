import "./work.scss";
function Work(props) {
  const { number, date, title, photographer, model, image, last } = props;
  return (
    <>
      <article className="work-container" data-scroll-section>
        <img src={image} alt="" />
        <hr style={{ width: "90vw" }} />
        <div className="work-flex">
          <div className="work-date">
            <h2> {number}</h2>
            <p>{date}</p>
          </div>
          <div className="work-details">
            <h1>{title}</h1>
            <table>
              <tr>
                <td>Photograph:</td>
                <td>{photographer}</td>
              </tr>
              <tr>
                <td>Model:</td>
                <td>{model}</td>
              </tr>
            </table>
          </div>
        </div>
      </article>
      {last ? (
        <data-scroll-section>
          <hr style={{ width: "90vw", margin: "0px 100px" }} />
          <div className="work-aboutus">
            <div className="inside-about-us">
              <p className="inside-about-us-p1">
                <hr className="inside-about-us-hr" color="black" /> Get To Know
                Our
                <br /> Creative Team
              </p>
              <div>
                <p className="inside-about-us-p2">Read More</p>
                <h1>About Us</h1>
              </div>
            </div>
          </div>
        </data-scroll-section>
      ) : (
        <></>
      )}
    </>
  );
}

export default Work;
