import React, { useRef } from "react";
import "./App.css";
import Navbar from "./componets/navbar";
import Footer from "./componets/footer";
import Markets from "./componets/markets/markets";
import Home from "./componets/home";

// router
import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";


function App() {
    const upComingRef = useRef(null);
    const popularRef = useRef(null);
    const recentRef = useRef(null);
    const howItWorksRef = useRef(null);
    const roadMapref = useRef(null)
    const tokenDetailsRef = useRef(null);

     const handleScroll = (ref) => {
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
      <HashRouter>
        <Navbar
          handleScroll={handleScroll}
          upComingRef={upComingRef}
          popularRef={popularRef}
          recentRef={recentRef}
          howItWorksRef={howItWorksRef}
          roadMapref={roadMapref}
          tokenDetailsRef={tokenDetailsRef}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleScroll={handleScroll}
                upComingRef={upComingRef}
                popularRef={popularRef}
                recentRef={recentRef}
                howItWorksRef={howItWorksRef}
                roadMapref={roadMapref}
                tokenDetailsRef={tokenDetailsRef}
              />
            }
          />
          <Route
            path="/markets"
            element={
              <Markets
              />
            }
            />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
