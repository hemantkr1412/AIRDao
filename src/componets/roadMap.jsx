const RoadMap = ({roadMapref}) =>{
    
    return (
        <div ref={roadMapref} style={{
            marginTop:"1rem",
            backgroundColor: "#F3F3F3",
            width:"100%",
            height:"auto",
            paddingTop:"2rem",
            paddingBottom:"2rem"
        }}>
            <p style={{
                fontSize:"1rem",
                fontWeight:"500",
                textAlign:"center",
            }}>JOIN US NOW</p>
            <h1 style={{
                textAlign:"center",
                marginTop:"0.5rem",
            }}>RoadMap 2024</h1>
            <p style={{
                color:"#4C4C4C",
                textAlign:"center",
                marginTop:"0.2rem"
            }}>
                Our Upcoming Events of 2024
            </p>

            <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                marginTop:"1rem",
            }}>
                <div style={{
                    width:"20px",
                    height:"20px",
                    border:"5px solid #5284FC",
                    borderRadius:"50%"
                    
                }}>
                </div>
                <div style={{
                    width:"100%",
                    display:"flex"
                }}>
                <div style={{
                    width:"50%",
                    height:"300px",
                    borderRight:"1px solid #000000",
                }}>
                    
                </div>
                 <div style={{
                    width:"50%",
                    height:"300px",
                }}>
                    <p style={{
                        marginTop:"-1.5rem",
                        marginLeft:"2rem",
                         color:"#4C4C4C",
                        fontSize:"1.3rem"
                    }}>Landing Page Launch</p>
                </div>
                

                </div>
                <div style={{
                    width:"20px",
                    height:"20px",
                    border:"5px solid #5284FC",
                    borderRadius:"50%"
                    
                }}>
                </div>
                
                <div style={{
                    width:"100%",
                    display:"flex"
                }}>
                <div style={{
                    width:"50%",
                    height:"300px",
                    borderRight:"1px solid #000000",
                }}>
                    <p style={{
                        marginTop:"-1.5rem",
                        textAlign:"right",
                        marginRight:"1.5rem",
                        color:"#4C4C4C",
                        fontSize:"1.3rem"
                    }}>Testnet Launch</p>
                </div>
                 <div style={{
                    width:"50%",
                    height:"300px",
                }}>
                    <p style={{
                        marginTop:"300px",
                        marginLeft:"2rem",
                        color:"#4C4C4C",
                        fontSize:"1.3rem"
                    }}>Mainnet Launch</p>
                </div>
                
                

                </div>
                <div style={{
                    width:"20px",
                    height:"20px",
                    border:"5px solid #5284FC",
                    borderRadius:"50%"
                    
                }}>
                </div>
            </div>
        </div>
    )
}

export default RoadMap;