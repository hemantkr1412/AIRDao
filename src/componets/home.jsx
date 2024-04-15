import "./navbar.css";


const Home = () =>{

    return (
        <div className="herosection" style={{
            backgroundColor: '#F3F3F3',
            width:"100%",
        }}>
            <div className="herosectionSubDiv">
                <h3 style={{
                    fontSize:"2rem"
                }}>Forecasting the Future</h3>
                <p>Welcome to XENPLAY, the premier destination for<br/> predictive insights on the X1 Chain!</p>
                <button style={{
                    marginTop:"1.2rem",
                    width:"150px",
                    height:"50px",
                    backgroundColor:"#3E6FD9",
                    borderRadius:"5px",
                    color:"white",
                    border:"none"
                }}>Start Prediction</button>
            </div>
            <div className="herosectionSubDiv2">
                <div>
                    <img src="creatives.png" alt="creative" className="creativeImg"/>
                </div>
            </div>
        </div>
    )
}

export default Home;