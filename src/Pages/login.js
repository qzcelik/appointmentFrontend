import {Box, Button, Container, TextField, Typography} from "@mui/material";
import TopBar from "./TopBar";
import {useNavigate} from "react-router-dom";

const Login =()=>{
    
    let nav = useNavigate();
    
        return(
        <>  
            <TopBar/>
            <Container maxWidth="xs">
                <Box display="flex" alignItems="center" flexDirection="column">
                    <Typography  variant="h4" mt="100px">Giriş</Typography>
                    <form  onSubmit={""} style={{width:'100%',marginTop:'1rem'}}>
                        <Box alignItems="center" flexDirection="column" display="flex">
                            <TextField label="Mail" type="email" fullWidth required margin="normal"></TextField>
                            <TextField label="Şifre" type="password" fullWidth required margin="normal"></TextField>
                            <Button type="submit" color="primary" variant="contained" onClick={()=>nav('/newrecord')}>Giriş</Button>
                        </Box>
                    </form>
                </Box>
            </Container>
        </>
    );
};
export default Login;