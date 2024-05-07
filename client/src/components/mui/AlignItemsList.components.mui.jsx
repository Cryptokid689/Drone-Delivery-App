import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { centerStyle } from '../../utils/utils';


export default function AlignItemsList() {
  return (
    <List sx={{ bgcolor: '#373063', width: "400px", maxHeight: "450px", overflowY: "auto" }}>
      <ListItem sx={{gap: "20px", ...centerStyle}}>
        <ListItemAvatar>
          <AccountCircleIcon sx={{width: 70, height: 70, color: "white"}}/>
        </ListItemAvatar>
        <ListItemText
          primary=<Typography
              sx={{ fontSize: '34px', color: "white" }} // Adjust the font size here
              variant="body1"
            >
              Yeat Yeat
            </Typography>
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline', fontSize: '16px', color: "white" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                yeat@gmail.com
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider sx={{background: "white"}} variant="inset" component="li" />
      <ListItem sx={{gap: "20px", ...centerStyle}}>
        <ListItemAvatar>
          <AccountCircleIcon sx={{width: 70, height: 70, color: "white"}}/>
        </ListItemAvatar>
        <ListItemText
          primary=<Typography
              sx={{ fontSize: '34px', color: "white" }} // Adjust the font size here
              variant="body1"
            >
              Yeat Yeat
            </Typography>
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline', fontSize: '16px', color: "white" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                yeat@gmail.com
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider sx={{background: "white"}} variant="inset" component="li" />
      <ListItem sx={{gap: "20px", ...centerStyle}}>
        <ListItemAvatar>
          <AccountCircleIcon sx={{width: 70, height: 70, color: "white"}}/>
        </ListItemAvatar>
        <ListItemText
          primary=<Typography
              sx={{ fontSize: '34px', color: "white" }} // Adjust the font size here
              variant="body1"
            >
              Yeat Yeat
            </Typography>
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline', fontSize: '16px', color: "white" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                yeat@gmail.com
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider sx={{background: "white"}} variant="inset" component="li" />
      <ListItem sx={{gap: "20px", ...centerStyle}}>
        <ListItemAvatar>
          <AccountCircleIcon sx={{width: 70, height: 70, color: "white"}}/>
        </ListItemAvatar>
        <ListItemText
          primary=<Typography
              sx={{ fontSize: '34px', color: "white" }} // Adjust the font size here
              variant="body1"
            >
              Yeat Yeat
            </Typography>
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline', fontSize: '16px', color: "white" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                yeat@gmail.com
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider sx={{background: "white"}} variant="inset" component="li" />
      <ListItem sx={{gap: "20px", ...centerStyle}}>
        <ListItemAvatar>
          <AccountCircleIcon sx={{width: 70, height: 70, color: "white"}}/>
        </ListItemAvatar>
        <ListItemText
          primary=<Typography
              sx={{ fontSize: '34px', color: "white" }} // Adjust the font size here
              variant="body1"
            >
              Yeat Yeat
            </Typography>
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline', fontSize: '16px', color: "white" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                yeat@gmail.com
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider sx={{background: "white"}} variant="inset" component="li" />
    </List>
  );
}
