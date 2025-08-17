import StudioMenu from "./StudioMenu";
import {Box, Button, Card, CardContent, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {Add, Delete} from "@mui/icons-material";
import Preview from "./Preview";
import {useDispatch, useSelector} from "react-redux";
import {addCompany, addcompanyExplanantion, updatePersonel,addPersonel, addProducts,addProductProperties} from "../Redux/Slicer/RecordSlice";
import { v4 as uuidv4 } from 'uuid';
import {useAddPersonel} from "./AddPersonel";

const NewRecord = () => {
    
    const dispatch = useDispatch();
    
    const personelRecord = useSelector((state)=>state.record.personels);
    const productsRecord = useSelector((state)=>state.record.products);
    
    const [companyName, setCompanyName] = useState("");
    const [companyExplanantion, setCompanyExplanantion] = useState("");

    const [personel, setPersonel] = useState("");

    const [product, setProduct] = useState("");

    const [personelPropertyInputs, setPersonelPropertyInputs] = useState([]);

    const [productPropertieTime, setProductPropertieTime] = useState("");
    const [productPropertie, setProductPropertie] = useState("");

    const addPersonelForDb = useAddPersonel(personel);
    
    const handleAddCompany = () => {
        if (!companyName.trim()) return;
        dispatch(addCompany(companyName));
    };

    const handleAddPersonel = () => {
        if (!personel.trim()) return;
        addPersonelForDb(personel);
        setPersonelPropertyInputs([...personelPropertyInputs, ""]);
        dispatch(addPersonel({
            name:personel,
            properties: []
        }));
        setPersonel("");
    };

    const handleAddPersonelProperty = (index) => {
        const prop = personelPropertyInputs[index];
        if (!prop.trim()) return;
        const updatedPersonels = personelRecord.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    properties: [...(item.properties || []), prop],
                };
            }
            return item;
        });
            
        dispatch(updatePersonel(updatedPersonels));
       
        const updatedInputs = [...personelPropertyInputs];
        updatedInputs[index] = "";
        setPersonelPropertyInputs(updatedInputs);
    };

    const handlePersonelChange = (index, value) => {
        const updatedInputs = [...personelPropertyInputs];
        updatedInputs[index] = value;
        setPersonelPropertyInputs(updatedInputs);
    };

    const handleAddProduct = () => {
        if (!product.trim()) return;
            dispatch(addProducts({
                id:uuidv4(),
                name:product,
                properties: [], 
            })); 
        setProduct("");
    };


    const handleAddProductProperty = (prop,productId) => {
        if (!productPropertie.trim()) return;
        
        dispatch(addProductProperties({
            id:productId,
            property:prop
        }));
        
        setProductPropertie("");
        setProductPropertieTime("");
    };
    
    const handleCompanyNameExplanation =()=>
    {
        if (!companyExplanantion.trim()) return;
        dispatch(addcompanyExplanantion(companyExplanantion));
    }


    return (
        <StudioMenu>
            <Box sx={{mt:10, mr:10}}
                 display="flex"
                 justifyContent="flex-end"
                >
                <Button
                    variant="contained"
                    color="success">
                    Kaydet
                </Button>
            </Box>
            <Box display="flex" flexDirection="row">
            <Box ml="50px" mt="50px" width="1200px">
                <Box>
                    <h1>İşletme Ekle</h1>
                    <Stack gap={2}>
                        <Box display="flex" flexDirection="row">
                            <TextField
                                sx={{ width: "400px", mr: '5px' }}
                                placeholder="İşletme Adı"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                            <Button variant="contained" onClick={handleAddCompany}>Ekle</Button>
                        
                        </Box>

                        <Box display="flex" flexDirection="column" gap={4}>
                                <Card key={0} sx={{ width: "400px", height: "200px" }}>
                                    <CardContent>
                                        <Typography variant="h6">{companyName}</Typography>
                                        <Stack spacing={2} mt={2}>
                                            <Box>
                                            <TextField multiline rows={4} placeholder="Açıklama"
                                            value={companyExplanantion}
                                            onChange={(e)=>setCompanyExplanantion(e.target.value)}           
                                            />
                                                <Button
                                                    sx={{marginTop:'10px',marginLeft:'10px'}}
                                                    variant="contained" 
                                                    color="primary"
                                                    onClick={handleCompanyNameExplanation}
                                                ><Add/></Button>
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </Card>
                        </Box>
                        <Box>
                            <Box display="flex" flexDirection="row" mb={2}>
                                <TextField
                                    sx={{ width: "400px", mr: '5px' }}
                                    placeholder="Personel Adı"
                                    value={personel}
                                    onChange={(e) => setPersonel(e.target.value)}
                                />
                                <Button variant="contained" onClick={handleAddPersonel}>Ekle</Button>
                            </Box>

                            {personelRecord.map((p, index) => (
                                <Card key={index} sx={{ width: '400px', mb: 2 }}>
                                    <CardContent>
                                        <Box display="flex" justifyContent="space-between">
                                            <Typography><strong>Personel:</strong> {p.name}</Typography>
                                            <Button color="error" size="small" variant="contained">
                                                <Delete />
                                            </Button>
                                        </Box>
                                        <Box mt={2}>
                                            <TextField
                                                fullWidth
                                                placeholder="Personel Özelliği"
                                                value={personelPropertyInputs[index]}
                                                onChange={(e) => handlePersonelChange(index, e.target.value)}
                                            />
                                            <Button
                                                sx={{ mt: 1 }}
                                                variant="contained"
                                                onClick={() => handleAddPersonelProperty(index)}
                                            >
                                                <Add />
                                            </Button>
                                            <Box mt={2}>
                                                {p.properties.map((prop, propIdx) => (
                                                    <Typography key={propIdx} sx={{ ml: 1 }}>
                                                        - {prop}
                                                    </Typography>
                                                ))}
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>

                        <Box display="flex" flexDirection="row">
                            <TextField
                                sx={{ width: "400px", mr: '5px' }}
                                placeholder="Hizmet Adı"
                                value={product}
                                onChange={(e) => setProduct(e.target.value)}
                            />
                            <Button variant="contained" onClick={()=>handleAddProduct()}>Ekle</Button>
                        </Box>

                        {productsRecord.map((item, index) => (
                            <Card key={index} sx={{ width: '400px', mt: 2 }}>
                                <CardContent>
                                    <Box display="flex" justifyContent="space-between">
                                         <Typography><strong>Hizmet:</strong> {item.name}</Typography>
                                          <Button color="error" size="small" variant="contained"><Delete /></Button>
                                    </Box>
                                    <Box mt={2}>
                                        <TextField 
                                            fullWidth 
                                            placeholder="Hizmet Bedeli" 
                                            value={productPropertie}
                                            sx={{ mb: 2 }} 
                                            onChange={(e)=> setProductPropertie(e.target.value)}
                                        />
                                        <TextField
                                            fullWidth
                                            placeholder="Hizmet Süresi"
                                            value={productPropertieTime}
                                            onChange={(e) => setProductPropertieTime(e.target.value)}
                                        />
                                        <Button
                                            sx={{ mt: 1 }}
                                            variant="contained"
                                            onClick = {()=> handleAddProductProperty(
                                                {p1:productPropertie,p2:productPropertieTime},item.id)}
                                        >
                                            <Add />
                                        </Button>
                                        <Box mt={2}>
                                            {item.properties.map((prop, propIndex) => (
                                                <Typography key={propIndex} sx={{ ml: 1 }}>
                                                    - {prop.p1 + " "+prop.p2}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </Box>
            </Box>
                <Box>
                    <Preview>
                        
                    </Preview>
                </Box>
            </Box>
        </StudioMenu>
    );
};

export default NewRecord;
