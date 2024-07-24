
const MyRank = () =>{
    const divStyle = {
        background: "linear-gradient(180deg, #1A1A1A -1.47%, #3F3F3F 30.25%, #626262 49.26%, #393939 74.55%, #3F0A4C 100%)",
        width: "100%",
        height: "50px",
        position: "relative",
      };
    
      const arrowStyle = {
        content: '""',
        position: "absolute",
        top: 0,
        left: "-25px",
        width: 0,
        height: 0,
        borderRight: "25px solid #3F0A4C",  // Match the last color of the gradient
        borderTop: "25px solid transparent",
        borderBottom: "25px solid transparent"
      };

    return(
    <div style={{width:"100%",
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column",
        // justifyContent:"center",
        // alignContent:"center"
    }}>
       
       <div style={{
             paddingTop:"7rem"
       }}>
         <h1 style={{
            textAlign:"center",
            color:"black"
         }}>Leaderboard</h1>
       </div>

       <div style={{
        width:"100%",
        height:"400px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        color:"black"
       }}>
            <div style={{
                width:"80%",
                // height:"400px",
                display:"flex",
                flexDirection:"column",
                gap:"2rem"
            }}>
                <div style={{
                    display:"flex",
                    justifyContent:"space-between",
                    marginTop:"2rem"
                }}>
                    <p style={{
                        fontSize:"1.1rem",
                        fontWeight:"600"
                    }}>S. No.</p>
                    <p style={{
                        fontSize:"1.1rem",
                        fontWeight:"600"
                    }}>Wallet Address</p>
                    <p style={{
                        fontSize:"1.1rem",
                        fontWeight:"600"
                    }}>Tokens Committed</p>
                </div>
                 
                 <div style={divStyle}>
                    <div style={arrowStyle}></div>
                </div>
            </div>

       </div>

    </div>
    )
};

export default MyRank;

