import "./navbar.css"
import HeroSection from "./herosection";
import UpcomingMarkets from "./upcomingMarkets";
import PopularMarkets from "./poppularMarkets";
import RecentMarkets from "./recentMarkets";
import HowItWorks from "./howItWorks";
import { ToastContainer } from 'react-toastify';
import useHome from "./useHome";

const Home = ({handleScroll,upComingRef,popularRef,recentRef,howItWorksRef,roadMapref,tokenDetailsRef}) => {

    const {
        upcomingEvent,
        popularEvent,
        recentEvent

    } = useHome();


    // console.log(popularEvent);

    


    
    return (
        <div>
            <div 

            className="subNavbar"

            style={{
                width:"100%",
                justifyContent: 'center',
                alignItems: 'center',
                height: '40px',
                // backgroundColor: 'white',
                background:"linear-gradient(90.06deg, #FFD700 0%, #8B4513 100%)",
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
                  
            </div>
            <ToastContainer />
            <HeroSection  />
            <UpcomingMarkets 
            upComingRef={upComingRef} 
            upcomingEvent={upcomingEvent}
            />
            <PopularMarkets 
            popularRef={popularRef}
            popularEvent={popularEvent}
            />
            <RecentMarkets 
            recentRef={recentRef}
            recentEvent={recentEvent}
             />
            <HowItWorks howItWorksRef={howItWorksRef} />
        </div>
    )
}

export default Home;
