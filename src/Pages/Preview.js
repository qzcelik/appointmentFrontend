import {Box, Card,CardMedia, Typography} from "@mui/material";
import {useSelector} from "react-redux";

const Preview = (parameter)=>
{
    const company = useSelector((state)=>state.record.companies);
    const prodcuts = useSelector((state)=>state.record.products);
    const personels = useSelector((state)=>state.record.personels);
    const companyExplanation = useSelector((state)=>state.record.companyExplanantion);
    return(
        <Box>
            <h1 style={{marginTop:'75px'}} >Ön İzleme</h1>
            <Box
                sx={{border: '1px solid gray', borderRadius: '5px', boxShadow: 3}}
                display="flex" flexDirection="row" mt={5} mr={10} width="750px">
                <Box alignItems="center" sx={{width: '500px'}} display="flex" flexDirection="column">
                    <h1>{company}</h1>
                    <Card sx={{marginTop: '20px', width: '150px', height: '150px', boxShadow: 3}}>
                        <CardMedia
                            component="img"
                            height="140"
                            src="https://img.freepik.com/ucretsiz-vektor/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740"
                            alt="Sample Image"
                        />
                    </Card>
                    <Typography sx={{whiteSpace: 'normal', wordBreak: 'break-word'}} mb={3} ml={3} mt={3}
                                mr={3}>{companyExplanation}</Typography>
                </Box>
                <hr/>
                <Box ml={4} mr={4} display="flex" flexDirection="column">
                    <h2 align="center">Personeller</h2>
                    {
                        personels.map((item, index) => (
                            <Card
                                sx={{
                                    width: '300px',
                                    border: '1px solid gray',
                                    padding: 1,
                                    borderRadius: 1,
                                    marginBottom: 1
                                }}>
                                <h3 align="center">
                                    {item.name}
                                </h3>
                                {item.properties.map((subItem) =>
                                    (
                                    <h4>
                                        {subItem}
                                    </h4>
                                    ))}
                           </Card>
                        ))
                    }
                </Box>
            </Box>

            <Box
                sx={{border: '1px solid gray', borderRadius: '5px', boxShadow: 3}}
                display="flex" flexDirection="row" mt={15} mr={10} width="750px">
                <Box alignItems="center" sx={{width: '500px'}} display="flex" flexDirection="column">
                    <h1>{company}</h1>
                    <Card sx={{marginTop: '20px', width: '150px', height: '150px', boxShadow: 3}}>
                        <CardMedia
                            component="img"
                            height="140"
                            src="https://img.freepik.com/ucretsiz-vektor/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740"
                            alt="Sample Image"
                        />
                    </Card>
                    <Typography sx={{whiteSpace: 'normal', wordBreak: 'break-word'}} ml={3} mt={3} mb={3}
                                mr={3}>{companyExplanation}</Typography>
                </Box>
                <hr/>
                <Box ml={4} mr={4} display="flex" flexDirection="column">

                    <h2 align="center">Hizmetler</h2>
                    {
                        prodcuts.map((item, index) => (
                           
                            <Box mb={1} sx={{
                                width: '300px',
                                border: '1px solid gray',
                                padding: 1,
                                borderRadius: 1,
                                boxShadow: 1
                            }}>
                                <h3 align="center">{item.name}</h3>
                                  {
                                        item.properties.map((propertie,propertieIndex)=>(
                                          <h4>
                                              {propertie.p1 +"  "+ propertie.p2}
                                          </h4>
                                      ))
                                    }
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default Preview;