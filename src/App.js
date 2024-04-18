import React, { useRef } from "react";
import "./App.css";
import Home from "./componets/home";
import Navbar from "./componets/navbar";
import UpcomingMarkets from "./componets/upcomingMarkets";
import PopularMarkets from "./componets/poppularMarkets";
import RecentMarkets from "./componets/recentMarkets";
import HowItWorks from "./componets/howItWorks";
import RoadMap from "./componets/roadMap";
import TokenDetails from "./componets/tokenDetails";
import Footer from "./componets/footer";

function App() {
    const upComingRef = useRef(null);
    const popularRef = useRef(null);
    const recentRef = useRef(null);
    const howItWorksRef = useRef(null);
    const roadMapref = useRef(null)
    const tokenDetailsRef = useRef(null);

     const handleScroll = (ref) => {
      //  ref.current.scrollIntoView({ behavior: "smooth" });
      console.log(ref.current.offsetTop);
      window.scrollTo({
        top: ref.current.offsetTop-100,
        behavior: "smooth",
      });
     };


  return (
    <div
      style={{
        backgroundColor: "#F3F3F3",
      }}
    >
      <Navbar
        handleScroll={handleScroll}
        upComingRef={upComingRef}
        popularRef={popularRef}
        recentRef={recentRef}
        howItWorksRef={howItWorksRef}
        roadMapref={roadMapref}
        tokenDetailsRef={tokenDetailsRef}
      />
      <Home />
      <UpcomingMarkets upComingRef={upComingRef} />
      <PopularMarkets popularRef={popularRef} />
      <RecentMarkets recentRef={recentRef} />
      <HowItWorks howItWorksRef={howItWorksRef} />
      <RoadMap roadMapref={roadMapref} />
      <TokenDetails tokenDetailsRef={tokenDetailsRef} />
      <Footer />
    </div>
  );
}

export default App;
