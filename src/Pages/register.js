import {AppBar, Box, Button, Container, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import TopBar from "./TopBar";

const Register = () =>{
    const navigate = useNavigate();
    return(
        <>
            <TopBar/>
            <Container maxWidth="xs">
                    <Box marginTop="50px" display="flex" alignItems="center" flexDirection="column">
                    <Typography variant="h4">Kayıt Ol</Typography>
                        <form onSubmit={""} style={{width:'100%',marginTop:'1rem'}}>
                            <Box maxWidth="xs" margin="10px" alignItems="center" flexDirection="column" display="flex">
                                <TextField margin="normal" fullWidth type="email" required label="E-mail"></TextField>
                                <TextField margin="normal" fullWidth required label="Kullanıcı Adı"></TextField>
                                <TextField margin="normal" fullWidth type="password" required label="Kullanıcı Şifre"></TextField>
                                <Button type="submit" variant="contained">Kayıt Ol</Button>
                            </Box>
                        </form>
                </Box>
            </Container>
        </>
    ); 
}

export  default Register;