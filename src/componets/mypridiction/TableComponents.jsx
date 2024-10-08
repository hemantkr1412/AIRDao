import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper,Avatar } from '@mui/material';



export default function CustomTable({myPrediction,claimReward}) {
  return (
    <TableContainer style={{
      background:"linear-gradient(180deg, rgba(247, 147, 26, 0.2) 0%, rgba(45, 40, 255, 0.2) 100%)",
      marginTop:"1rem"
    }} component={Paper}>
      <Table>
        <TableHead sx={{
          backgroundColor:"rgb(243, 243, 243)",
        }}>
          <TableRow>
            <TableCell>S. No.</TableCell>
            <CenteredTableCell>Event ID</CenteredTableCell>
            <CenteredTableCell>Event Status</CenteredTableCell>
            <CenteredTableCell>Tokens Committed</CenteredTableCell>
            <CenteredTableCell>Tokens Rewarded</CenteredTableCell>
            <CenteredTableCell>Action</CenteredTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myPrediction.map((data,index) => (
            <TableRow key={index}>
              <TableCell> <Avatar sx={{
                width:"30px",
                height:"30px",
                fontSize:"1rem"
              }} className="custom-avatar">{index+1}</Avatar></TableCell>
              <CenteredTableCell>{data.event_id}</CenteredTableCell>
              <CenteredTableCell>{data.status.charAt(0).toUpperCase() + data.status.slice(1).toLowerCase()}</CenteredTableCell>
              <CenteredTableCell>{data.token_staked}</CenteredTableCell>
              <CenteredTableCell>{data.amount_rewarded===null?"N/A":data.amount_rewarded}</CenteredTableCell>
              <CenteredTableCell>
                {/* {row.claimed ? (
                  <Button variant="contained" disabled>
                    Claimed ✔️
                  </Button>
                ) : (
                  <Button variant="outlined">Claim</Button>
                )} */}
                <button 
                                  onClick={()=>{
                                    if(!data.is_claimed ){
                                      if(data.status ==="WON" ){
                                        claimReward(data.id)
                                      }
                                    }
                                  }
                                  }
                                  style={{
                                      backgroundColor:data.is_claimed ?"#F1D1AD":"#DADADA26",
                                      color:"black",
                                      width:"120px",
                                      height:"35px",
                                      borderRadius:"5px",
                                      cursor: data.status === "WON" ?"pointer":"",
                                      border: "2px solid black",
                                    
                                  }}>
                                    {
                                      data.status === "WON" ? (
                                        !data.is_claimed ?<span>Claim</span>:<span>Claimed</span>
                                      ):("N/A")
                                    }
                                    {data.is_claimed &&

                                    <img style={{
                                      marginLeft:"5px",
                                      position:"absolute"
                                    }} src="clainmed.svg" alt="Claimed" />
                                    }
                                  </button>
              </CenteredTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const CenteredTableCell = (props) => (
  <TableCell {...props} style={{ textAlign: 'center' }}>
    {props.children}
  </TableCell>
)


