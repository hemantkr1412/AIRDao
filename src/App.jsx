import React, { useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./componets/navbar";
import Footer from "./componets/footer";
import Markets from "./componets/markets/markets";
import Home from "./componets/home";
import { WalletProvider } from "./context/walletContext";
import Pridtiction from "./componets/mypridiction/myPridiction";
import MyRank from "./componets/myRank/myRank";

// router
import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import { createContext } from "react";

export const MyContext = createContext("");


function App() {
  const isMobileDevice = () => {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };
  useEffect(() => {
    if (isMobileDevice()) {
      if (!window.ethereum) {
        alert("Please open this website using MetaMask mobile browser.");
        window.location.href = "https://metamask.app.link/dapp/xenplay.xyz";
      }
    }
  }, []);

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
    <WalletProvider>
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
            <Route
            path="/myPridiction"
            element={
              <Pridtiction
              />
            }
            />
             <Route
            path="/myRank"
            element={
              <MyRank
              />
            }
            />
         
        </Routes>
        <Footer />
      </HashRouter>
    </div>
    </WalletProvider>
  );
}

export default App;