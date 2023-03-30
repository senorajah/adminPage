import React from 'react'
import "./cards.css"
//card
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

//icon
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const handleclick = () =>{
  console.log('clicked')
}
const handleclick2 =() =>{
  console.log('clicked2')
}
export default function BasicCard(props) {
  return (
    <div className='cardscon'>

    <Card className='card1' sx={{ maxWidth: 345 }} onClick={handleclick}>
          <CardActionArea >      
            <CardContent className='cardcontent1'>
              <AccountBalanceWalletIcon  sx={{ fontSize:40}}/>
              <Typography gutterBottom variant="button text" component="div" className='balText'>
                BALANCE
              </Typography>
              <Typography variant="body2" color="text.secondary">
               description in here
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className='card2' sx={{ maxWidth: 345 }} onClick={handleclick2}>
        <CardActionArea >      
            <CardContent className='cardcontent2'>
              <AccountBalanceWalletIcon sx={{ fontSize:40}}/>
              <Typography gutterBottom variant="butt  on text" component="div" className='empText'>
                EMPLOYEES
              </Typography>
              <Typography variant="body2" color="text.secondary">
              description in here
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>

        

    </div>

    
    
    
  );
}