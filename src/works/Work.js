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
    </>
  );
}

export default Work;
