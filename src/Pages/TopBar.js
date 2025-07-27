import {AppBar, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const TopBar  = () =>{
    
    const navigate = useNavigate();
    return(
        <>
        <AppBar>
            <Button sx={{marginRight:'auto'}} color="inherit" onClick={()=>navigate('/')}>Anasyfa</Button>
        </AppBar>
        </>
    );
}

export  default TopBar;