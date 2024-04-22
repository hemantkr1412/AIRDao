
import ActiveMarket from "./activemarkets";
const Markets = ()=>{
    return(
    <div style={{width:"100%",
        minHeight:"100vh",

    }}>
       
        <div style={{
            width:"100%",
            minHeight:"95vh",
            display:"flex",
        }}>
            {/* <div
            className="sideNav"
             style={{
                 minHeight:"95vh",
                 backgroundColor:"white"

            }}> 
            <div style={{
                marginTop:"6rem",
                display:"flex",
                justifyContent:"space-between",
                padding:"2rem",
            }}>
                <p style={{
                    fontWeight:"500",
                    color:"rgba(0, 0, 0, 0.5)",
                    fontSize:"1.1rem"

                }}>Filter</p> 
                <img src="filter.svg" alt="filter" style={{
                    width:"30px",
                    height:"auto"
                }} />
            </div>
            <div style={{
                display:"flex",
                justifyContent:"space-between",
                padding:"1rem",
            }}>
                <input type="text" placeholder="Search" style={{
                    width:"90%",
                    height:"10px",
                    borderRadius:"5px",
                    borderColor:"rgba(112, 112, 112,0.3)",
                    padding:"1rem",
                    backgroundColor:"white",
                }} />
            </div>

            </div> */}
            <div  
            className="marketContainer"
            style={{
                 minHeight:"95vh",

            }}>
                    <div
                    className="marketSubNav"
                     style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '5vh',
                    backgroundColor: 'white',
                    gap:"2.5rem",
                    marginTop:"5rem",
                    // position:"sticky",
                    // boxShadow:"1px 2px 2px black",
                    boxShadow: "rgba(0, 0, 0, 0.35) 5px 2px 5px"
                    
                }}>
                        <p style={{
                            fontWeight:"500",
                            cursor:"pointer"
                        }} >All</p>
                        <p style={{
                        fontWeight:"500",
                        cursor:"pointer"
                        }} >Politics</p>
                        <p style={{
                        fontWeight:"500",
                        cursor:"pointer"
                        }} >Sports</p>
                        <p style={{
                        fontWeight:"500",
                        cursor:"pointer"
                        }} >Crypto</p>
                        <p style={{
                        fontWeight:"500",
                        cursor:"pointer"
                        }} >Business</p>
                        <p style={{
                        fontWeight:"500",
                        cursor:"pointer"
                        }} >Science</p>
            </div>

            <div className="filterSearchMobile">
                <div>
                    <p style={{
                    fontWeight:"500",
                    color:"rgba(0, 0, 0, 0.5)",
                    fontSize:"1.1rem"

                }}>Filter</p> 
                </div>
                <div>
                    <input type="text" placeholder="Search" style={{
                    width:"200px",
                    height:"8px",
                    borderRadius:"5px",
                    borderColor:"rgba(112, 112, 112,0.3)",
                    padding:"1rem",
                    backgroundColor:"white",
                    marginRight:"1rem"
                }} />
                 <img src="filter.svg" alt="filter" style={{
                    width:"30px",
                    height:"auto"
                }} />
                </div>
                

            </div>
                <div 
                className="tokenInfoContainer"
                style={{
                    gap:"2rem",
                    marginTop:"2rem",
                }}>

                    <div
                    className="valueContainer"
                     style={{
                        height:"120px",
                        backgroundColor:"white",
                        borderRadius:"5px",
                        // boxShadow:"#3E6FD9 0px 8px 23px",
                        padding:"1rem",
                        border:"2px solid #3E6FD9"
                    }}>
                        <div style={{
                            display:"flex",
                            justifyContent:"space-between"
                        }}>
                            <h3>Total Value Locked</h3>
                            <img src="ic_round-lock.svg" alt="filter" style={{
                                width:"30px",
                                height:"auto"
                            }} />
                        </div>
                        <div>
                            <h1>$0</h1>
                        </div>

                    </div>
                    <div 
                      className="valueContainer"
                    style={{
                        
                        height:"120px",
                        backgroundColor:"white",
                        borderRadius:"5px",
                        // boxShadow:"#C985FF 0px 8px 24px",
                        border:"2px solid #C985FF",
                        padding:"1rem"
                    }}>
                         <div style={{
                            display:"flex",
                            justifyContent:"space-between"
                        }}>
                            <h3>Total Fees Generated</h3>
                            <img src="bi_cash.svg" alt="filter" style={{
                                width:"30px",
                                height:"auto"
                            }} />
                        </div>
                        <div>
                            <h1>$0</h1>
                        </div>

                    </div>
                    <div 
                      className="valueContainer"
                    style={{
                        height:"120px",
                        backgroundColor:"white",
                        borderRadius:"5px",
                        //  boxShadow:"#8EC656 0px 8px 24px",
                        border:"2px solid #8EC656",

                         padding:"1rem"
                    }}>
                        <div style={{
                            display:"flex",
                            justifyContent:"space-between"
                        }}>
                            <h3>Total Tokens Burnt</h3>
                            <img src="mdi_fire.svg" alt="filter" style={{
                                width:"30px",
                                height:"auto"
                            }} />
                        </div>
                        <div>
                            <h1>$0</h1>
                        </div>

                    </div>

                </div>
                <ActiveMarket />


            </div>


        </div>


        
    </div>
    
)
}

export default Markets;