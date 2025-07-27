import {Box, Button, Container, TextField, Typography} from "@mui/material";
import TopBar from "./TopBar";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

const Login =()=>{
    
    let nav = useNavigate();
       const [userName,setUserName] = useState("");
       const [userPass,setUserPass] = useState("");
       const navigate = useNavigate();
       
        const handleLogin = async (e)=>{
          e.preventDefault();
          try {
              const response = await axios.post("http://localhost:5067/api/auth/login",{
                  userName,
                  userPass
              });
              localStorage.setItem("token",response.data);
              alert("Başarılı");
              const responseToken = localStorage.getItem("token");
              if(!responseToken)
              {
                  navigate("/login");
              }
              else
              {
                  navigate("/newrecord");
              }
          }  
          catch (e)
          {
              alert(e.response?.data || "Hata oluştu.");
          }
        };
    
        return(
        <>  
            <TopBar/>
            <Container maxWidth="xs">
                <Box display="flex" alignItems="center" flexDirection="column">
                    <Typography  variant="h4" mt="100px">Giriş</Typography>
                    <form  onSubmit={handleLogin} style={{width:'100%',marginTop:'1rem'}}>
                        <Box alignItems="center" flexDirection="column" display="flex">
                            <TextField
                                label="Kullanıcı Adı"
                                fullWidth required margin="normal"
                                value={userName}
                                onChange={(e=>setUserName(e.target.value))}
                            ></TextField>
                            <TextField 
                                label="Şifre"
                                type="password"
                                value={userPass}
                                onChange={(e=>setUserPass(e.target.value))}
                                fullWidth required margin="normal"></TextField>
                            <Button type="submit" color="primary" variant="contained">Giriş</Button>
                        </Box>
                    </form>
                </Box>
            </Container>
        </>
    );
};
export default Login;