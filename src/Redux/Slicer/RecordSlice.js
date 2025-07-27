import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  companies:"", 
  companyExplanantion:"",
  personels:[],
  products:[],
};

export const recordSlice = createSlice({
    name:'record',
    initialState,
    reducers:{
        addCompany:(state,action)=>{
          state.companies = action.payload;  
        },
        addcompanyExplanantion:(state,action)=>{
          state.companyExplanantion = action.payload;  
        },
        addPersonel:(state,action)=>{
            state.personels.push(action.payload);
        },
        updatePersonel:(state,action)=>{
          state.personels = action.payload;  
        },
        addProducts:(state,action)=>{
            state.products.push(action.payload);
        },
        addProductProperties:(state,action)=>{
            const {id,property}=action.payload;
            const product = state.products.find((item)=>
            {
               return  item.id === id;
            });
            if(product)
            {
                product.properties.push(property);
            }
        }
    }
});

export const {addcompanyExplanantion,addProductProperties,addCompany,addPersonel,updatePersonel,addProducts} = recordSlice.actions;
export  default recordSlice.reducer;