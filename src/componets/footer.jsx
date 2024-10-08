const Footer = () => {
    
    return(
        <div style={{
            width:"100%",
            // backgroundColor:"#181819",
            background: `linear-gradient(0deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.28)), 
                 linear-gradient(0deg, rgba(219, 197, 188, 0.4), rgba(219, 197, 188, 0.4))`,
            // linear-gradient(0deg, rgba(219, 197, 188, 0.4), rgba(219, 197, 188, 0.4))"
            height:"200px"
        }}>
            <div style={{
                width:'96%',
                padding:"2%"

            }}>
                <div style={{
                    width:'100%',
                    display:"flex",
                    justifyContent:"space-between"
                }}>
                    <div>
                        <p style={{
                            color:'black',
                            fontSize:"1.2rem",
                            fontWeight:"600"
                        }}>AirDAO Markets</p>
                        <p style={{
                           color:"black" ,
                           fontSize:"0.8rem",
                           marginTop:"1rem"
                        }}>
                            The first decentralized prediction market on AirDAO Blockchain.
                        </p>
                    </div>
                    <div>
                        <p style={{
                           color:"black" ,
                           fontSize:"1rem",
                        }}>Join the community</p>
                        <a href="https://x.com/AirdaoM" target="_blank" rel="noreferrer">
                        <img src="xIcon.svg" alt="vector"  style={{
                            width:"30px",
                            height:"30px",
                            marginTop:"1rem",
                            
                        }}/>
                        </a>
                         <a href="https://t.me/+_NAkxcyCKyg2ZWU1" target="_blank" rel="noreferrer">
                        <img src="teliIcon.svg" alt="vector" style={{
                            width:"30px",
                            height:"30px",
                            marginTop:"1rem",
                            marginLeft:"0.5rem"
                        }}/>
                        </a>
                    </div>
                </div>
                <div style={{
                    width:"100%",
                    marginTop:"2rem",
                    border:"0.2px solid black"
                }}>

                </div>
                <p style={{
                    color:"black",
                    textAlign:"center",
                    marginTop:"2rem",
                    
                }}>AirDAO Markets © 2024</p>
            </div>
        </div>
    )

}


export default Footer;