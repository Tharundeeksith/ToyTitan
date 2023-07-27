import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import LoginPage from './Login';
import Login from './Login copy';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import SignupPage from './Signup';

export default function LoginDialog() {
  const [open, setOpen] = React.useState(false);
  const [signup, setSignup] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    setSignup(null);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSignup = () => {
    setSignup(true);
    console.log(signup);
  };
  const handleLogin = () => {
    setSignup(false);
  };
  return (
    <div>
      <Button onClick={handleClickOpen}
      sx={{
        marginLeft: "-200px",
        background: "green",
        marginBottom:"7px",
        "&:hover": {
          backgroundColor: "#000000",
          color: "#ffffff",
        },
      }}
      variant="contained">
        Login
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogContent>
          <Box>
          {signup && <SignupPage />}
          {!signup && <Login />}
          </Box>
          
        </DialogContent>
        <DialogActions>
          <Box></Box>
          {signup && (
            <Box sx={{display:'flex'}}>
              <Typography sx={{pt:0.7}}>Already Have an Account ?</Typography>
              <Button onClick={handleLogin}>Login</Button>
            </Box>
          )}
          {!signup && (
            <Box sx={{display:'flex'}}>
              <Typography sx={{pt:0.5}}>New User ?</Typography>
              <Button onClick={handleSignup}>Signup</Button>
            </Box>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}