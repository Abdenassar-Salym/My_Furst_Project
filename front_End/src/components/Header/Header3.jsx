import { Box, Button, Container,
   Drawer, IconButton, ListItemIcon,
    ListItemText, Menu, MenuItem, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  Close,
  
} from "@mui/icons-material";
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Links from "./links";



function Header3() {
const theme=useTheme()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] =useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer =
  (anchor, open) =>
  (event) => {
    if (
      event.type === 'keydown' &&
      ((event).key === 'Tab' ||
        (event).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  return <Container sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <Box>
    <Button
    className="border"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        // @ts-ignore
        sx={{width:222,bgcolor:theme.palette.mycolor.main,color:theme.palette.text.secondary}}
      >
        <WindowIcon/>
        <Typography sx={
          {
            padding:0,
            textTransform:"capitalize",
            mx:1
          }
        }>

        Dashboard
        
        </Typography>
        <Box flexGrow={1}/>
        <KeyboardArrowRightOutlinedIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
        // @ts-ignore
        ".MuiListItemText-root":{width:155,bgcolor:theme.palette.mycolor.main}    
        }}
      >
        
      
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ElectricBikeOutlined fontSize="small" />
          </ListItemIcon>
          <ListItemText>Bicks</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LaptopChromebookOutlined fontSize="small" />
          </ListItemIcon>
          <ListItemText>Electonics</ListItemText>
        </MenuItem >
        <MenuItem>
          <ListItemIcon onClick={handleClose}>
            <MenuBookOutlined fontSize="small" />
          </ListItemIcon>
          <ListItemText>Books</ListItemText>
        </MenuItem >
        <MenuItem onClick={handleClose}>
          <ListItemIcon >
            <SportsEsportsOutlined fontSize="small" />
          </ListItemIcon>
          <ListItemText>Gams</ListItemText>
        </MenuItem>
        
        
      </Menu>
      </Box>
      {
        useMediaQuery('(min-width:1200px)') && (
          <Stack gap={4} direction={"row"} alignItems="center">
          <Links title={"Home"}/>
          <Links title={"Mega Menu"}/>
          <Links title={"Full scren menu"} />
          <Links title={"Pages"}/>
          <Links title={"User acount"}/>
          <Links title={"Vendor Acount"}/>
          </Stack>
        )
      }
      
      {
        useMediaQuery('(max-width:1200px)') && (<IconButton onClick={toggleDrawer("top",true)}>

        <MenuIcon/>
        </IconButton>)
      }
      
      <Drawer
      anchor={"top"}
      open={state["top"]}
      onClose={toggleDrawer("top", false)}
      sx={{
        ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper":{height:"100%"}
      }}
    >
    
    <Box  sx={{width:"500px",mx:"auto",mt:6,position:"relative",pt:10}}>
      
      <IconButton onClick={toggleDrawer("top",false)} sx={{
        
        position:"absolute",top:0,right:10,":hover":{color:"red",rotate:"360deg",transition:"0.5s"}}}
        >

      <Close/>
      </IconButton>


{
  [
    {mainLink:"Home",subLink:["link1","link2","link3"]},
    {mainLink:"Mega menu",subLink:["link1","link2","link3"]},
    {mainLink:"Full screen menu",subLink:["link1","link2","link3"]},
    {mainLink:"pages",subLink:["link1","link2","link3"]},
    {mainLink:"User account",subLink:["link1","link2","link3"]},
    {mainLink:"Vendor acocunt",subLink:["link1","link2","link3"]}
  
  ].map(item=>{
    return(
    <Accordion key={item.mainLink} elevation={0} sx={{bgcolor:"initial"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <Typography>
        {item.mainLink}
          </Typography>  
        </AccordionSummary>
        <List sx={{py:0,my:0}}>
          {
            item.subLink.map((e)=>{
              return(
                <ListItem  key={e} sx={{py:0,my:0}}>
            <ListItemButton>
              <ListItemText primary={e} />
            </ListItemButton>
          </ListItem>
              )
            })
          }
          
        </List>
      </Accordion>
    )

  })
}      
      
      </Box>
      
    </Drawer>

  </Container>
  
}
export default Header3