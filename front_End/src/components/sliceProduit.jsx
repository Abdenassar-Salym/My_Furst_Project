import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const getData=createAsyncThunk("produit/getData",async()=>{
     const rep =await axios.get("http://127.0.0.1:8000/api/produit")
     console.log(rep.data ,"this is data get")
    return rep.data
  
  })
//   export const postData=createAsyncThunk("produit/posttData",async(value)=>{
//     const response = await axios.post("http://127.0.0.1:8000/api/produit", value);
//   return response.data;
    
//  })
const sliceProduit=createSlice({
    name:"produit",
    initialState:{
        produit:[]
    }, 
    reducers:{
      //  addProduit: (state,action)=>{
      //   axios.post("http://127.0.0.1:8000/api/produit",action.payload)
      //   console.log(action.payload,"pyload")
      //   state.produit.push(action.payload)
      //   alert('Produit add sucsessfuly')

      //  }

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getData.pending, (state) => {
          console.log("peding");
        })
        .addCase(getData.fulfilled,(state,action)=>{
          console.log(action.payload,"hh")
          state.produit=action.payload
        })
        .addCase(getData.rejected, (state, action) => {
          console.log('regected')
        })
        // .addCase(postData.fulfilled,(state,action)=>{
        //   state.produit.push(action.payload)
        //   console.log("data post sucsses")
        //   alert(' sucsses')
          
        // })
    }
})
//  export const {addProduit}=sliceProduit.actions
export default sliceProduit.reducer





