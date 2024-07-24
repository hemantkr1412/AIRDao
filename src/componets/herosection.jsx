import BarAnimation from "./barAnimation";
import "./navbar.css";
import CardAnimation from "./cardAnimation";


const HeroSection = () =>{

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
                }}>Forecasting</p>
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
                }}>Welcome to XENPLAY, the premier destination for predictive insights on the X1 Chain!</p>
                <button style={{
                    marginTop:"1.5rem",
                    width:"150px",
                    height:"50px",
                    backgroundColor:"black",
                    borderRadius:"5px",
                    color:"white",
                    border:"none"
                }}>Start Prediction</button>
            </div>
            <div className="herosectionSubDiv2">
               
                    <div style={{
                        position:"absolute",
                        marginRight:"28%",
                        marginTop:"25rem"

                    }} >
                        <CardAnimation cardNo={0}/>
                    </div>
                    <div style={{
                        position:"absolute",
                        marginTop:"35rem",
                        marginLeft:"20%"
                    }} >
                        <CardAnimation  cardNo={1}/>
                    </div>
                    <div 
                    style={{
                        position:"absolute",
                        marginTop:"10rem",
                        marginLeft:"30%"
                    }} >
                        <CardAnimation 
                        cardNo={2}
                        />
                    </div>
                    <div style={{
                        position:"absolute",

                    }} >
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