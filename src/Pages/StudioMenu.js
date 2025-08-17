import React, {Children} from "react";
import {AppBar, colors,Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
    Feedback,
    PermMedia,
    Menu, Add, FormatListBulleted, Logout,
} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

function StudioMenu({children}) {

    const nav = useNavigate();
    
    const [state, setState] = React.useState({
        menu: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };
    
    const logout = ()=>{
        localStorage.removeItem("token");
        nav("/login");
    };

    const iemsList = (anchor) => (
        <Box
            sx={{
                width: anchor === "top" ||
                anchor === "bottom" ? "auto" : 250,
                backgroundColor: "#09212E",
                height: '100%'
            }}
            role="drawer">
        
            <Divider />
            <List>
                <ListItemButton sx={{ color: "white" }} onClick={()=>nav("/NewRecord")}>
                    <ListItemIcon sx={{ color: "white" }}>
                        {<Add />}
                    </ListItemIcon>
                    <ListItemText primary={"Oluştur"} />
                </ListItemButton>
                <ListItemButton sx={{ color: "white" }} onClick={()=>nav("/RecordList")}>
                    <ListItemIcon sx={{ color: "white" }}>
                        {<FormatListBulleted />}
                    </ListItemIcon>
                    <ListItemText primary={"Randevu Listeleri"} />
                </ListItemButton>
                <ListItemButton sx={{ color: "white" }} onClick={()=>logout()}>
                    <m sx={{ color: "white" }}>
                        {<Logout sx={{marginRight:'30px'}}/>}
                    </m>
                    <ListItemText primary={"Çıkış Yap"} />
                </ListItemButton>
            </List>
        </Box>
    );

    return (
        <>
        <AppBar sx={{backgroundColor:'#09212E'}}>
            <div>
                {["left"].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button startIcon={<Menu/>} sx={{color:'white'}} onClick={toggleDrawer(anchor, true)}>
                                Menü
                            </Button>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {iemsList(anchor)}
                            </Drawer>
                        </React.Fragment>
                ))}
            </div>
        </AppBar>
            {children}
        </>
);
}

export default StudioMenu;