import React from "react";
import {useNavigate} from "react-router-dom";
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";

const  Home = () =>
{
    const navigate = useNavigate();
    
    return(
        <>
          <AppBar position={"static"}>
            <Toolbar>
                <Typography variant="h6">
                    RandevuAl
                </Typography>
            </Toolbar>
          </AppBar>
        
            <Container maxWidth="sm">
                
                <Box display="flex" flexDirection="column" alignItems="center" mt={8} gap={2}>
                    <Typography variant="h4">
                        Kendi Randevu Sayfanı Tasarla
                    </Typography>
                    <Button variant="contained" color="primary" fullWidth onClick={()=>(navigate('/login'))}>Giriş Yap</Button>
                    <Button variant="contained" color="primary" fullWidth onClick={()=>(navigate('/register'))}>Üye Ol</Button>
                </Box>
                
            </Container>
        </>
    );
    
    
};

export  default Home;