// @ts-nocheck
import {
  Box,
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Rating,
  IconButton
} from "@mui/material";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import {


  Close,
  
} from "@mui/icons-material";
import ProductDetails from "./productdetails"
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData} from "../sliceProduit";

const Main = () => {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getData())
    
    },[dispatch])
  const produits=useSelector(e=>e.produit.produit);
   console.log(produits,"tis")
  return (
    <Container sx={{ mt: 3,pb:5 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={1}
      >
        <Box>
          <Typography>Selected products</Typography>
          <Typography>
            Al our new arrivais in a eclusive brand selection
          </Typography>
        </Box>
        <Box>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                borderRadius: "5px",
                border: "1px solid #fb5607 !important",
                color: "#fb5607 !important",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton border"
              value="left"
            >
              All categories
            </ToggleButton>
            <ToggleButton
              sx={{
                mx: "10px !important",
                color: theme.palette.text.primary,
              }}
              className="myButton border"
              value="center"
            >
              Men categories
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton border"
              value="right"
            >
              Women categories
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Stack>
      <Stack  direction={"row"} justifyContent={"space-between"} flexWrap="wrap" alignItems={"center"} >
      {
        produits.map((e,i)=>{
          return(
          
            <Card key={i} sx={{ maxWidth: 330,mt:3,":hover .MuiCardMedia-root":{
              rotate:"1deg",scale:"1.1",transition:"0.30s"
            } }}>
            <CardMedia
              sx={{ height: 240 }}
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
              <Typography gutterBottom variant="h5" component="div">
                {e.title}
              </Typography>
              <Typography sx={{color:"#ffc300"}} variant="subtitle1" component={"p"}>
              {e.prix} $
              </Typography>
      
              </Stack>
              <Typography variant="body2" color={"text.secondary"}>
                {e.description}
              </Typography>
              
            </CardContent>
      
      
            <CardActions sx={{justifyContent:"space-between",alignItems:"center"}}  >
              <Button onClick={handleClickOpen} size="larg">
                <AddShoppingCartOutlinedIcon fontSize="small" sx={{mr:1}}/>
                Add to cart
              </Button>
              <Rating precision={0.5} name="read-only" value={e.etoil} readOnly />
            </CardActions>
          </Card>
            
          )
        })
        
      }
      </Stack>
      <Dialog
      className="border"
      sx={{
        ".MuiPaper-root":{xs:{width:"100%"},md:{minWidth:"800px"},bgcolor:"#e3d5ca !important"}
      }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
    
        <IconButton onClick={handleClose} sx={{
        
        position:"absolute",top:0,right:10,":hover":{color:"red",rotate:"360deg",transition:"0.5s"}}}
        >

      <Close/>
      </IconButton>
    <ProductDetails/>
      
      
      </Dialog>
      
    </Container>
  );
};

export default Main;
