import   { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, List, ListItemButton, ListItemText, Menu, MenuItem, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const options = [
  'Ar',
  'En',
  
];

export default  function  Header1  (){
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClickListItem = (event) => {
      setAnchorEl(event.currentTarget)};
    const handleClose = () => {
        setAnchorEl(null);
      };
    const open = Boolean(anchorEl);
    const handleMenuItemClick = (
      event,
      index
    ) => {
      setSelectedIndex(index);
      setAnchorEl(null);
    };
  return (
    <Box sx={{
      bgcolor:"#2B3445",
      borderBottomLeftRadius:4,
      borderBottomRightRadius:4
    }}>
      <Container>
      <Stack direction={"row"} alignItems={"center"}>

<Typography
            sx={{
              mr: 2,
              p: "4px 10px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            HOT
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 300,
              color: "#fff",
            }}
            variant="body2"
          >
            Free Express Shipping
          </Typography>
          <Box flexGrow={1} />
          
  <div>
  {theme.palette.mode === "light" ? (
    <IconButton
      onClick={() => {
        localStorage.setItem(
          "mode",
          theme.palette.mode === "dark" ? "light" : "dark"
        );
        colorMode.toggleColorMode();
      }}
      color="inherit"
    >
      <LightModeOutlined style={{ color: '#edf2f4' }}/>
    </IconButton>
  ) : (
    <IconButton
      onClick={() => {
        localStorage.setItem(
          "mode",
          theme.palette.mode === "dark" ? "light" : "dark"
        );
        colorMode.toggleColorMode();
      }}
      color="inherit"
    >
      <DarkModeOutlined  fontSize="small"/>
    </IconButton>
  )}
</div>
<List
        component="nav"
        aria-label="Device settings"
        sx={{  }}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
        >
          <ListItemText
          sx={{".MuiTypography-root":{color:"#f9f7f3",fontSize:"12px"}}}
            secondary={options[selectedIndex]}
          />
          <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
        </ListItemButton>
        
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
          sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
            key={option}
        
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
<TwitterIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
          <FacebookIcon
            sx={{
              fontSize: "16px",
              mx: 1,
              color: "#fff",
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
</Stack>

</Container>
</Box>
  )
  
}

 
