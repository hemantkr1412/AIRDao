
import CardAnimation from "./CardAnimation/cardAnimation";
import BarAnimation from "./BarAnimation/barAnimation";
import "./navbar.css";
import { useNavigate } from "react-router-dom";


const HeroSection = () =>{
    const navigate = useNavigate();
    return (
        <div style={{
            backgroundColor: '#F3F3F3',
            width:"100%",
            display:"flex",
            flexDirection:"column",
            height:"100vh",
            justifyContent:"space-between"
            // marginTop:"1rem",
        }}>
            <div className="herosection">
            <div className="herosectionSubDiv">
                <p style={{
                    fontFamily: "Poppins",
                    fontSize: "44px",
                    fontWeight: "400",
                    lineHeight: "66px",
                    letterSpacing:"0.03em",
                    textAlign: "left",
                    color:"#000000CC"
                }}>Forecast</p>
                <p style={{
                    fontFamily: "Aclonica",
                    fontSize: "72px",
                    fontWeight: "400",
                    lineHeight: "81.6px",
                    letterSpacing: "0.08em",
                    textAlign: "left",
                    marginTop:"0.5rem"
                }}>The Future</p>
                <p style={{
                    fontFamily: "Inter",
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "21.78px",
                    letterSpacing: "0.03em",
                    textAlign: "left",
                    marginTop:"1rem"
                }}>Welcome to AirDAO Markets, the premier destination for predictive insights on the AirDAO Chain!</p>


                <button 
                className="start-btn"
                onClick={() => navigate("/markets")}
                style={{
                    marginTop:"1.5rem",
                    width:"150px",
                    height:"50px",
                    backgroundColor:"white",
                    background:"linear-gradient(274.13deg, #F7931A 1.78%, #2D28FF 102.71%)",
                    borderRadius:"5px",
                    color:"white",
                    border:"none",
                    cursor:"pointer"
                }}>Start</button>

                <div className="start-btn-mob">
                <button 
                // className="start-btn"
                onClick={() => navigate("/markets")}
                style={{
                    marginTop:"1.5rem",
                    width:"120px",
                    height:"30px",
                    backgroundColor:"white",
                    background:"linear-gradient(274.13deg, #F7931A 1.78%, #2D28FF 102.71%)",
                    borderRadius:"5px",
                    color:"white",
                    border:"none",
                    cursor:"pointer"
                }}>Start</button>

                <GradientButton />


                </div>

               
                
            </div>
            <div className="herosectionSubDiv2">
               
                    <div className="herosectionSubDiv2Box1"  >
                        <CardAnimation cardNo={0}/>
                    </div>
                    <div className="herosectionSubDiv2Box2">
                        <CardAnimation  cardNo={1}/>
                    </div>
                    <div className="herosectionSubDiv2Box3" >
                        <CardAnimation 
                        cardNo={2}
                        />
                    </div>
                    <div className="herosectionSubDiv2Box4" >
                        <CardAnimation 
                        cardNo={3}
                        />
                    </div>
                    <div style={{
                        position:"absolute",
                        marginTop:"30rem",
                        zIndex:"4",
                        bottom:"0"
                    }} >
                        <img src="bro.svg" alt="Image "  />
                    </div>
          
                
               
               

            </div>
            </div>
            <BarAnimation />

        </div>
    )
}

export default HeroSection;


const GradientButton = () => {
    return (
      <button style={{
        padding:"2px 10px",
        fontSize:"12px",
        width:"120px",
        height:"30px",
        marginTop:"1.5rem",
      }} className="gradient-button"  onClick ={() =>{
        window.open("https://airdoge.xyz",'_blank')
      }}>
        Buy $ADOGE
      </button>
    );
};