import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { AttachMoney, BarChart } from '@mui/icons-material';
import './CustomCards.css'; // Import your custom CSS for styling



function CustomCard({ title, icon, data }) {
  return (
    <Card className="custom-card" sx={{
        background:"linear-gradient(180deg, rgba(247, 147, 26, 0.2) 0%, rgba(45, 40, 255, 0.2) 100%)"
    }}>
      <CardContent>
        <Typography variant="h6" component="div" className="card-title">
          {icon} {title}
        </Typography>
        <List>
          {data.map((item,index) => (
            <ListItem key={item.account.id} sx={{
                paddingLeft: { xs: '1px', sm: '16px' },
                paddingRight: { xs: '2px', sm: '16px' },
              }}>
              <ListItemAvatar>
                <Avatar className="custom-avatar">{index+1}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={shortenAddress(item.account.account)} />
              {
                item?.total_reward_usd ?
                <Typography>${Number(item?.total_reward_usd).toFixed(2)}</Typography>
                :
                <Typography>${Number(item?.total_profit_usd).toFixed(2)}</Typography>
              }
              {/* <Typography>${item?.total_reward_usd}{Number(item?.total_profit_usd).toFixed(2)}</Typography> */}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default function VolumeProfitCards({leaderBoardVolume,leaderBoardProfit,mobileTab}) {
    // console.log(leaderBoardVolume);
    // console.log(leaderBoardProfit);
  return (
    <>
    <div className="card-container">
      <CustomCard title="Volume" icon={<BarChart />} data={leaderBoardVolume} />
      <CustomCard title="Profit" icon={<AttachMoney />} data={leaderBoardProfit} />
    </div>
    <div className="card-container-mobile">
      {
        mobileTab === "volume" ?<CustomCard title="Volume" icon={<BarChart />} data={leaderBoardVolume} />
        :      <CustomCard title="Profit" icon={<AttachMoney />} data={leaderBoardProfit} />
      }

    </div>
    </>
  );
}



function shortenAddress(address) {
    // console.log(address)
    if (address.length <= 10) {
      return address; // No need to shorten if it's already short
    }
    const firstPart = address.slice(0, 6); // First 6 characters
    const lastPart = address.slice(-4); // Last 4 characters
    return `${firstPart}...${lastPart}`;
  }
