import Card from "./artiveCard";


const ActiveMarket = ({popularRef}) =>{
    return(
        <div ref={popularRef} 
        style={{
            backgroundColor: '#F3F3F3',
            width:"100%",
            height:"auto",
            marginTop:"3rem",
            paddingTop:"3rem"
        }}>
            <div style={{
                width:"96%",
                display:"flex",
                justifyContent:"space-between",
                marginLeft:"2%",
                marginRight:"2%"
            }}>
                <div>
                    <p style={{
                        fontSize:"1.5rem",
                        fontWeight:"700"
                    }}>Active Markets</p>
                </div>
                <div>
                    <select style={{
                        width:"200px",
                        height:"50px",
                        borderRadius:"5px",
                        borderColor:"rgba(112, 112, 112,0.3)",
                        padding:"1rem",
                        backgroundColor:"transparent",
                    
                    }}>
                        <option>
                           All Categories
                        </option>
                    </select>
                </div>
               
            </div> 
            <div
            className="cardMainBox"
             style={{
                padding:"2%",
                // display:"flex",
                // justifyContent:"space-between",
                // flexWrap:"wrap",
                gap:"2rem",
            }}>
                <Card isPopular={true} />
                <Card isPopular={true}/>
                <Card isPopular={true}/>
                <Card isPopular={true}/>
                
            </div>

        </div>
    )
}

export default ActiveMarket;