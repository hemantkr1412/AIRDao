import "./navbar.css";
const HowItWorks = ({howItWorksRef}) =>{
    return (
        <div  ref={howItWorksRef} style={{
            width:"100%",
            backgroundColor:"white",
            // padding:"2%"
           paddingTop:"3rem",
            paddingBottom:"2rem"
        }}>
            <h1 style={{
                textAlign:"center"
            }}>How it works ?</h1>
            <p style={{
                textAlign:"center"
            }}>Understanding The Process</p>

            <div>
                <div className="howItBoxStep">
                    <div>
                        <h1 style={{
                        textAlign:"center"
                        }}>01</h1>
                        <img className="imageContainer" src="Card.png" alt="Card" style={{
                        width:"100%"
                        }}/>
                        <p style={{
                        textAlign:"center",
                        color:"#4C4C4C"
                        }}>Listing Event</p>
                    </div>

                    <div className="horizontalLineBox">
                        
                    </div>
                   
                    <div>
                        <h1 style={{
                        textAlign:"center"
                        }}>
                            02
                        </h1>
                        <img className="imageContainer" src="card1.png" alt="Card" style={{
                        width:"100%"
                        }}/>
                        <p style={{
                        textAlign:"center",
                        color:"#4C4C4C"
                        }}>
                            Prediction
                        </p>
                    </div>
                    <div className="horizontalLineBox"></div>
                    <div>
                        <h1 style={{
                        textAlign:"center"
                        }}>
                            03
                        </h1>
                        <img className="imageContainer" src="card2.png" alt="Card" style={{
                        width:"100%"
                        }}/>
                        <p style={{
                        textAlign:"center",
                        color:"#4C4C4C"
                        }}>
                            Commit Token
                        </p>
                    </div>
                    <div className="horizontalLineBox"></div>
                    <div>
                        <h1 style={{
                        textAlign:"center"
                        }}>
                            04
                        </h1>
                        <img className="imageContainer" src="card3.png" alt="Card" style={{
                        width:"100%"
                        }}/>
                        <p style={{
                        textAlign:"center",
                        color:"#4C4C4C"
                        }}>
                            Resolution
                        </p>
                    </div>
                    <div className="horizontalLineBox"></div>
                    <div>   
                        <h1 style={{
                        textAlign:"center"
                        }}>
                            05
                        </h1>
                        <img className="imageContainer" src="card4.png" alt="Card" style={{
                        width:"100%"
                        }}/>
                        <p style={{
                        textAlign:"center",
                        color:"#4C4C4C"
                        }}>
                            Distribute Reward <br /> Token
                        </p>

                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className="howItMainBoxImage">
                <div style={{
                    width:"18%"
                }}>
                    <img src="Card.png" alt="Card" style={{
                        width:"100%"
                    }}/>
                </div>
                 <div style={{
                    width:"18%"
                }}>
                    <img src="card1.png" alt="Card" style={{
                        width:"100%"
                    }}/>
                </div>
                 <div style={{
                    width:"18%"
                }}>
                    <img src="card2.png" alt="Card" style={{
                        width:"100%"
                    }}/>
                </div>
                 <div style={{
                    width:"18%"
                }}>
                    <img src="card3.png" alt="Card" style={{
                        width:"100%"
                    }}/>
                </div>
                 <div style={{
                    width:"18%"
                }}>
                    <img src="card4.png" alt="Card" style={{
                        width:"100%"
                    }}/>
                </div>
                 
            </div>
            <h1 style={{
                marginTop:"2rem",
                textAlign:"center"
            }}>Fund Distribution</h1>
            <div className="fundDistributionContainer" >
                <div>
                    <h1 style={{
                        textAlign:"center"
                    }}>5%</h1>
                    <p style={{
                        textAlign:"center"
                    }}> Platform Fee</p>
                </div>
                <div  className="horizontalLineBox">
                        
                </div>
                <div>
                    <h1 style={{
                        textAlign:"center"
                    }} >0%</h1>
                    <p style={{
                        textAlign:"center"
                    }}>Token Burn Allocation</p>
                </div>
                  <div  className="horizontalLineBox">
                        
                    </div>
                <div>
                    <h1 style={{
                        textAlign:"center"
                    }}>95%</h1>
                    <p style={{
                        textAlign:"center"
                    }}>Winner Reward Pool</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;