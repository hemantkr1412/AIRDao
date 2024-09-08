import './navbar.css'
const TokenDetails = ({tokenDetailsRef}) => {

    return (
        <div ref={tokenDetailsRef} style={{
            backgroundColor: "white",
            width:"100%",
            height:"auto",
        }}>
            <div style={{
                width:"96%",
                padding:"2%"
            }}>
            <h1>
                Token Details
            </h1>
            <p style={{
                color:"#4C4C4C",
                marginTop:"1rem"
            }}>
                find the token related Details here
            </p>
            <div className='tokenDetailsContainer' >
                <div className='tokenSupplyBox' style={{
                    height:"300px",
                    border:"1px solid #000000",
                    borderRadius:"5px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                        <div>
                            <img src="Icon.png" alt="icon" style={{
                                width:"80px",
                                height:"80px",
                                alignContent:"center"
                            }} />
                        </div>
                    <p style={{
                        color:"#333333",
                        marginTop:"1rem"
                    }}>Total Supply</p>
                    <p style={{
                        fontSize:"1.5rem",
                        color:"#666666",
                        marginTop:"1rem"
                    }}>100M</p>
                    </div>

                </div>
                <div className='tokenSupplyBox' style={{
                    height:"300px",
                    border:"1px solid #000000",
                    borderRadius:"5px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                        <div>
                            <img src="Icon.png" alt="icon" style={{
                                width:"80px",
                                height:"80px",
                                alignContent:"center"
                            }} />
                        </div>
                            <p style={{
                                color:"#333333",
                                marginTop:"1rem",
                                textAlign:"center"
                            }}>Token Launch</p>
                            <p style={{
                                fontSize:"1.5rem",
                                color:"#666666",
                                marginTop:"1rem",
                                textAlign:"center"
                            }}>Coming Soon</p>
                    </div>

                </div>
            </div>
            </div>
        </div>
    )
}

export default TokenDetails;