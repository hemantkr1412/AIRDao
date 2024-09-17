import "./navbar.css";
const HowItWorks = ({howItWorksRef}) =>{
    return (
        <div  ref={howItWorksRef} style={{
            width:"100%",
            backgroundColor:"white",
            // padding:"2%"
           paddingTop:"3rem",
            paddingBottom:"2rem",
        }}>
            <h1 style={{
                textAlign:"center"
            }}>How it works ?</h1>
            <p style={{
                textAlign:"center",
                marginTop:"1rem",
                marginBottom:"1rem",
                color:"rgba(76, 76, 76, 1)"
            }}>Understanding The Process</p>

            {/* <div>
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
            </div> */}
            <div style={{
                display:"flex",
                justifyContent:"center"
            }}>
                <div className="howItMainBoxImage">
                    <div className="howItWorksCard">
                        <h1>1</h1>
                        <p>List Event</p>
                        <img src="cuate.png" />
                    </div>
                    <div className="howItWorksCard">
                       <h1>2</h1>
                        <p>Prediction</p>
                        <img src="bro.png" />
                    </div>
                    <div className="howItWorksCard">
                        <h1>3</h1>
                        <p>Commit Token</p>
                        <img src="Group 159.png" />
                    </div>
                    <div className="howItWorksCard">
                        <h1>4</h1>
                        <p>Resolution</p>
                        <img src="cuate.png" />
                    </div>
                    <div className="howItWorksCard">
                        <h1>5</h1>
                        <p>Distribute Reward Token</p>
                        <img src="amico.png" />
                    </div>
                    {/* <div style={{
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
                    </div> */}
                    
                </div>
                



            </div>

           
            <div style={{
                display:"flex",
                justifyContent:"center"
            }}>
                <div className="fundDistribution">
                    <div>
                    <h1 style={{
                        // marginTop:"2rem",
                        textAlign:"center"
                    }}>Fund Distribution</h1>
                    </div>
                    <div className="fundDistributionSubDiv" style={{
                        display:"flex",

                    }}>
                        <div  style={{
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"center",
                            alignItems:"center"
                        }}>
                            <h2>95%</h2>
                            <p>Winner Reward Pool</p>
                            
                        </div>
                        <div style={{
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"center",
                            alignItems:"center"
                        }}>
                           <h2>05%</h2>
                           <p>Platform</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            
             
        </div>
    )
}

export default HowItWorks;