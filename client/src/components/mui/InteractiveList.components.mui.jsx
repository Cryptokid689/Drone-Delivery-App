import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import FormDialog from './FormDialog.components.mui';
import AddBoxIcon from '@mui/icons-material/AddBox';


function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  function createNewAddress() {

  }

  return (
    <>
    <FormDialog open={open} tip="address" title={"Add a new address"} onSubmit={createNewAddress} handleClose={handleClose}/>
    <Grid container sx={{flexDirection: "row"}} spacing={2}>
        <Grid item xs={12} md={6}>
            <h2 className="me-4">Other Addresses</h2>
          <Demo>
            <List dense={true}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon sx={{color: "red"}} />
                    </IconButton>
                  }
                >
                  <ListItemText primary="Address 1"/>
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
        <IconButton onClick={handleClickOpen} sx={{height: "50px"}} edge="end" aria-label="add">
            <AddBoxIcon sx={{color: "#ffb11f", height: "100px"}} />
        </IconButton>
    </Grid>
    </>
  );
}
