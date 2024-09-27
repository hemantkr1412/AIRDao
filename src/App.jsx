import React, { useEffect, useRef, useState } from "react";
import "./App.css";

import Footer from "./componets/footer";
import Markets from "./componets/markets/markets";
import { WalletProvider } from "./context/walletContext";
import Pridtiction from "./componets/mypridiction/myPridiction";
import MyRank from "./componets/myRank/myRank";

// router
import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import { createContext } from "react";


//google
import GoogleTagManager from "./googleAnalytics";
import Navbar from "./componets/navbar/navbar";
import Home from "./componets/Home/home";
import { useDispatch } from "react-redux";
import { setCategories } from "./componets/store/slice/categoriesSlice";

export const MyContext = createContext("");


function App() {
 

    const upComingRef = useRef(null);
    const popularRef = useRef(null);
    const recentRef = useRef(null);
    const howItWorksRef = useRef(null);
    const roadMapref = useRef(null)
    const tokenDetailsRef = useRef(null);


    const dispatch = useDispatch();

     const handleScroll = (ref) => {
      console.log(ref.current.offsetTop);
      window.scrollTo({
        top: ref.current.offsetTop-100,
        behavior: "smooth",
      });
     };

     useEffect(() => {
      populateCategories();
     }, []);


    const API_URL = import.meta.env.VITE_APP_BACKEND_URL;
     
    const populateCategories = async () => {
      try {
          const response = await fetch(`${API_URL}/event/categories/`);
          const data = await response.json();
          dispatch(setCategories(data));
      } catch (error) {
          console.log("Error fetching categories:", error);
      }
  };


     


  return (
    <WalletProvider>
      <GoogleTagManager />
    <div
      style={{
        backgroundColor: "#F3F3F3",
      }}
    >
      <HashRouter>
        <Navbar />
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
            path="/myPrediction"
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