import { ExpandMore, KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

function Links({title}) {
  return (
    <Box
      sx={{
        ":hover .hovelLink": { display: "block" },
        ":hover ": { cursor: "pointer" },
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography>{title}</Typography>
      <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
      <Box
        className=" hovelLink"
        sx={{
          position: "absolute",
          minWidth: "170px",
          transform: "Translate(-50%)",
          left: "50%",
           display: "none",
          top: "100%",
          zIndex:2
        }}
      >
        <Paper sx={{ mt: "5px" }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "10px" } }}
                    primary="Dachbord"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem sx={{position:"relative",":hover .frlink":{display:"block"}}} disablePadding>
                <ListItemButton>
                
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "10px" } }}
                    primary="Product"
                  />
                  <Box flexGrow={1} />
                  <KeyboardArrowRight />
                </ListItemButton>
        <Box className=" frlink" sx={{position:"absolute",top:0,left:"100%",display:"none",minWidth:"150px"}}>
        <Paper sx={{ml:1}}>
                <nav aria-label="secondary mailbox folders">
                  <ListItem  disablePadding>
                    <ListItemButton>
                    <NavLink to="/adProduct">ad product</NavLink>
                      {/* <ListItemText
                        sx={{ ".MuiTypography-root": { fontSize: "10px" } }}
                        primary="Add product"
                      /> */}
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        sx={{ ".MuiTypography-root": { fontSize: "10px" } }}
                        primary="Edit product"
                      />
                    </ListItemButton>
                  </ListItem>
                  
                </nav>
          </Paper>

          </Box>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "10px" } }}
                    primary="Orders"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "10px" } }}
                    primary="Profile"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
}
export default Links;
