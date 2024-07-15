import "./navbar.css"
import HeroSection from "./herosection";
import UpcomingMarkets from "./upcomingMarkets";
import PopularMarkets from "./poppularMarkets";
import RecentMarkets from "./recentMarkets";
import HowItWorks from "./howItWorks";
import RoadMap from "./roadMap";
import TokenDetails from "./tokenDetails";

const Home = ({handleScroll,upComingRef,popularRef,recentRef,howItWorksRef,roadMapref,tokenDetailsRef}) => {
    
    return (
        <div>
            <div 

            className="subNavbar"

            style={{
                width:"100%",
                justifyContent: 'center',
                alignItems: 'center',
                height: '40px',
                backgroundColor: 'white',
                position:"fixed",
                zIndex: 100,

                gap:"2.5rem",
                // boxShadow:"1px 2px 2px black",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                top:"5rem"
                
            }}>
                    <p style={{
                        fontWeight:"500",
                        cursor:"pointer"
                    }} onClick={()=>{
                        handleScroll(upComingRef)
                    }}>Upcoming Markets</p>
                    <p style={{
                    fontWeight:"500",
                    cursor:"pointer"
                    }} onClick={()=>{
                        handleScroll(popularRef)
                    }}>Popular Markets</p>
                    <p style={{
                    fontWeight:"500",
                    cursor:"pointer"
                    }} onClick={()=>{
                        handleScroll(recentRef)
                    }}>Recent Markets</p>
                    <p style={{
                    fontWeight:"500",
                    cursor:"pointer"
                    }} onClick={()=>{
                        handleScroll(howItWorksRef)
                    }}>How it Works</p>
                    <p style={{
                    fontWeight:"500",
                    cursor:"pointer"
                    }} onClick={()=>{
                        handleScroll(roadMapref)
                    }}>RoadMap</p>
                    <p style={{
                    fontWeight:"500",
                    cursor:"pointer"
                    }} onClick={()=>{
                        handleScroll(tokenDetailsRef)
                    }}>Token Details</p>
            </div>
            <HeroSection  />
            <UpcomingMarkets upComingRef={upComingRef} />
            {/* <PopularMarkets popularRef={popularRef} /> */}
            <RecentMarkets recentRef={recentRef} />
            <HowItWorks howItWorksRef={howItWorksRef} />
            <RoadMap roadMapref={roadMapref} />
            <TokenDetails tokenDetailsRef={tokenDetailsRef} />
        </div>
    )
}

export default Home;
