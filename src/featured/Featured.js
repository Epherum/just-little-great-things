import Title from "./Title2";
import "./featured.scss";
function Featured({ loco }) {
  return (
    <section className="featured-container" data-scroll-section>
      <Title loco={loco} />
    </section>
  );
}

export default Featured;
