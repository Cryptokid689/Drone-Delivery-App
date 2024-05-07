import React from 'react';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { centerStyle } from '../utils/utils';
import AlignItemsList from '../components/mui/AlignItemsList.components.mui';
import AddBox from '@mui/icons-material/AddBox';
import FormDialog from '../components/mui/FormDialog.components.mui';


function Friends() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };
  
    function addFriend() {
        
    }

    function removeFriend() {
        
    }

    return <div style={{...centerStyle}}>    
    <FormDialog open={open} tip={"email"} title={"Enter a friend's email to add them"} onSubmit={addFriend} handleClose={handleClose}/>

        <div style={{...centerStyle, flexDirection: "column", marginTop: "20px"}}>
            <h1><PeopleAltIcon sx={{width: 50, height: 50, color: "#373063"}}/> Friends</h1>
            <AlignItemsList />
        </div>
        <AddBox onClick={handleClickOpen} sx={{width: 70, height: 70, color: "rgb(255, 177, 31)", cursor: "pointer"}}/>
    </div>
}


export default Friends