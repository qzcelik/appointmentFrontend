import {AppBar, Box, Button, Container, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import TopBar from "./TopBar";
import {useState} from "react";
import axios from "axios";

const Register = () =>{
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [userMail,setUserMail] = useState("");
    const [userPass,setUserPass] = useState("");
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        try {
            const response = await axios.post("http://localhost:5067/api/auth/register",{
                userName,
                userMail,
                userPass
            });
            alert(response.data);
        }
        catch (e)
        {
            if(e.response)
            {
                alert(e.response.data);
            }
            else
            {
                alert("sunucu hatası");
            }
        }
    }
    
    return(
        <>
            <TopBar/>
            <Container maxWidth="xs">
                    <Box marginTop="50px" display="flex" alignItems="center" flexDirection="column">
                    <Typography variant="h4">Kayıt Ol</Typography>
                        <form onSubmit={handleSubmit} style={{width:'100%',marginTop:'1rem'}}>
                            <Box maxWidth="xs" margin="10px" alignItems="center" flexDirection="column" display="flex">
                                <TextField margin="normal" 
                                           fullWidth
                                           type="email"
                                           required label="E-mail"
                                           value={userMail}
                                           onChange={(e=>setUserMail(e.target.value))}
                                ></TextField>
                                <TextField 
                                    margin="normal"
                                    fullWidth required label="Kullanıcı Adı"
                                    value={userName}
                                    onChange={(e=>setUserName(e.target.value))}
                                ></TextField>
                                <TextField 
                                    margin="normal"
                                    fullWidth type="password" 
                                    required label="Kullanıcı Şifre"
                                    value={userPass}
                                    onChange={(e=>setUserPass(e.target.value))}
                                ></TextField>
                                <Button type="submit" variant="contained">Kayıt Ol</Button>
                            </Box>
                        </form>
                </Box>
            </Container>
        </>
    ); 
}

export  default Register;