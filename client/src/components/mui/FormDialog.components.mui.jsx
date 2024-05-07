import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress } from '@mui/material';

export default function FormDialog(props) {
  const [loading, setLoading] = React.useState(false)
  function handleSubmit(event) {
    // props.onSubmit()
    setLoading(true)
  }
  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: event => handleSubmit(event),
        }}
      >
      {loading ? <DialogContent sx={{background: "rgba(0, 0, 0, 0.87)"}}>
        <CircularProgress size={100}/>
      </DialogContent> :
      <>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name={props.tip}
            label={props.tip}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </>}
      </Dialog>
    </React.Fragment>
  );
}
