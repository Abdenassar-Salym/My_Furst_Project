

import Header1 from "./components/Header/Header1";
import Header2 from "./components/Header/Header2";
import Header3 from "./components/Header/Header3";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import Footer from "./components/Footer/footer";
import ScrolTop from "./components/scrole/scrolTop";
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter,Route, Routes  } from "react-router-dom";
import AddProduct from "./components/addProduct";
import ContentPruncip from "./components/contentPruncip";



function App() {
  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/api/produit").then(res=>console.log(res.data))
  // }, []);
  
  const [theme, colorMode] = useMode();
  return (
    <BrowserRouter>
    <ColorModeContext.Provider 
// @ts-ignore
     value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
      <CssBaseline />
    <Header1/>
    <Header2/>
    <Header3/>

    <Box bgcolor={theme.
// @ts-ignore
    palette.bg.main}>
      <Routes>
        <Route path="/adProduct" element={<AddProduct/>}/>
        <Route path="/" element={<ContentPruncip/>}/>
      </Routes>

  
    </Box>
    <Footer/>
    
    <ScrolTop/>
    </ThemeProvider>
    </ColorModeContext.Provider>
    </BrowserRouter>
    
     
      
    
  )
}

export default App
