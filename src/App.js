import "./app.scss";
import "./reset.css";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import Inside from "./inside-look/Inside";
import Featured from "./featured/Featured";
import Work from "./works/Work";
import MoreWorks from "./more-works/MoreWorks";
import Socials from "./socials/Socials";
import useLocoScroll from "./hooks/useLocoScroll";

function App() {
  const locoscroll = useLocoScroll();

  return (
    <div id="main-container" data-scroll-container>
      <Navbar />
      <Hero loco={locoscroll} />
      <Inside />
      <Featured loco={locoscroll} />
      <Work
        number="01"
        date="Dec. 2019"
        title="New York, 1974"
        photographer="some chic"
        model="some other chic"
        image="1.jpg"
      />
      <Work
        number="01"
        date="Dec. 2019"
        title="New York, 1974"
        photographer="some chic"
        model="some other chic"
        image="1.jpg"
      />
      <Work
        number="01"
        date="Dec. 2019"
        title="New York, 1974"
        photographer="some chic"
        model="some other chic"
        image="1.jpg"
        last="true"
      />
      <MoreWorks />
      <Socials />
    </div>
  );
}

export default App;
