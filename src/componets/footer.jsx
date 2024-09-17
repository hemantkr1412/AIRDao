const Footer = () => {
    
    return(
        <div style={{
            width:"100%",
            backgroundColor:"#181819",
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
                            color:'white',
                            fontSize:"1.2rem",
                            fontWeight:"600"
                        }}>AIRDAO Markets</p>
                        <p style={{
                           color:"white" ,
                           fontSize:"0.8rem",
                           marginTop:"1rem"
                        }}>
                            The first decentralized prediction Market on AIRDAO Blockchain.
                        </p>
                    </div>
                    <div>
                        <p style={{
                           color:"white" ,
                           fontSize:"1rem",
                        }}>Join the community</p>
                        <a href="https://x.com/AirdaoM" target="_blank" rel="noreferrer">
                        <img src="Vector7.png" alt="vector"  style={{
                            width:"20px",
                            height:"20px",
                            marginTop:"1rem",
                            
                        }}/>
                        </a>
                         <a href="https://t.me/+_NAkxcyCKyg2ZWU1" target="_blank" rel="noreferrer">
                        <img src="Vector8.png" alt="vector" style={{
                            width:"20px",
                            height:"20px",
                            marginTop:"1rem",
                            marginLeft:"0.5rem"
                        }}/>
                        </a>
                    </div>
                </div>
                <div style={{
                    width:"100%",
                    marginTop:"2rem",
                    border:"0.5px solid #F2F2F2"
                }}>

                </div>
                <p style={{
                    color:"#F5F5F5",
                    textAlign:"center",
                    marginTop:"2rem",
                    
                }}>AIRDAO Markets © 2024</p>
            </div>
        </div>
    )

}


export default Footer;