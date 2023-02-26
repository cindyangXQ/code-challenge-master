import { Button, TextField } from '@mui/material';
import { useState} from 'react';
import './App.css';

function App() {
  const [eth, setEth] = useState('');
  const [amount, setAmount] = useState(0);
  const [otp, setOtp] = useState(0);

  function handleEth(event) {
    setEth(event.target.value);
  }
  
  function handleAmount(event) {
    setAmount(event.target.value);
  }
  
  function handleOtp(event) {
    setOtp(event.target.value);
  }
  
  function handleClick() {
    setEth('');
    setAmount(0);
    setOtp(0);
  }

  return (
    <div className='Box'>
      <div className='item'>
      <TextField 
        label="ETH Address" 
        variant="outlined"
        placeholder='Input Address'
        onChange={handleEth}
        value={eth == '' ? 'Input Address' : eth}
        fullWidth
      /></div>

      <div className='item'>
      <TextField 
        label="Amount to send" 
        variant="outlined" 
        placeholder='Input Amount'
        type="number"
        onChange={handleAmount}
        value={amount == 0 ? 'Input Amount' : amount}
        fullWidth
      /></div>

      <div className='item'>
      <TextField 
        label="OTP Authentication" 
        variant="outlined" 
        placeholder='Input OTP'
        type="number"
        onChange={handleOtp}
        value={otp == 0 ? 'Input OTP' : otp}
        fullWidth
      /></div>

      <div className='item'>
      <Button 
        variant="contained"
        onClick={handleClick}
      >
        Send Tokens
      </Button></div>
    </div>
  );
}

export default App;
