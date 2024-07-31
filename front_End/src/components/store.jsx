import { configureStore } from '@reduxjs/toolkit'
import sliceProduit from './sliceProduit'
const Store=configureStore({
    reducer:{
       produit:sliceProduit
    }
})
export default Store