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
        recentEvent,
        isLoading

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
                background: 'white',
                // background: linear-gradient(270deg, rgba(247, 147, 26, 0.4) 0%, rgba(45, 40, 255, 0.4) 100%);

                // background:"linear-gradient(270deg, rgba(247, 147, 26, 0.4) 0%, rgba(45, 40, 255, 0.4) 100%)",
                // backgroundColor:"white",
                // borderBottom: "1px solid",
                position:"fixed",
                zIndex: 100,

                gap:"2.5rem",
                // boxShadow:"1px 2px 2px black",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                top:"5rem"
                
            }}>
                    <p
                    className="subNavbarItem"
                    style={{
                        fontWeight:"500",
                        cursor:"pointer",
                        marginRight:"2.5rem"
                    }} onClick={()=>{
                        handleScroll(upComingRef)
                    }}>Upcoming Markets</p>
                    <p 
                    className="subNavbarItem"
                    style={{
                    fontWeight:"500",
                    cursor:"pointer",
                    marginRight:"2.5rem"
                    }} onClick={()=>{
                        handleScroll(popularRef)
                    }}>Popular Markets</p>
                    <p 
                    className="subNavbarItem"
                    style={{
                    fontWeight:"500",
                    cursor:"pointer",
                     marginRight:"2.5rem"
                    }} onClick={()=>{
                        handleScroll(recentRef)
                    }}>Recent Markets</p>
                    <p 
                    className="subNavbarItem"
                    style={{
                    fontWeight:"500",
                    cursor:"pointer",
                     marginRight:"2.5rem"
                    }} onClick={()=>{
                        handleScroll(howItWorksRef)
                    }}>How it Works</p>
                
            </div> 

           
            <ToastContainer />
            <HeroSection  />
            <UpcomingMarkets 
            upComingRef={upComingRef} 
            upcomingEvent={upcomingEvent}
            isLoading={isLoading}
            />
            <PopularMarkets 
            popularRef={popularRef}
            popularEvent={popularEvent}
            isLoading={isLoading}
            />
            <RecentMarkets 
            recentRef={recentRef}
            recentEvent={recentEvent}
            isLoading={isLoading}
             />
            <HowItWorks howItWorksRef={howItWorksRef} />
        </div>
    )
}

export default Home;
