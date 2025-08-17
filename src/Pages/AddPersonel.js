import axios from "axios";
import {useSelector} from "react-redux";

export const useAddPersonel =  () => {

    const personelRecord = useSelector((state)=>state.record.personels);
    const addPersonelDb = async (personel) =>{
        const EmployeeData = {
            Name:personel,
            Skill:"t",
            CompanyId : 1,
            CreateUserTime: new Date().toISOString()
        };
        
        const response = await axios.post("http://localhost:5067/api/Employee/AddEmployee",
            EmployeeData,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }
        );
    }

   return addPersonelDb;
}
