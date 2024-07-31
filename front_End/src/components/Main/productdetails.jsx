/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";


const ProductDetails = ({ clickedProduct }) => {

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          width={360}
          src="src/images/2.jpg"
          alt=""
        />
      </Box>

      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">
          Women
        </Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
        $12,00
        </Typography>
        <Typography variant="body1">
        dkjkjdhjd shdhhdggs sgsfsfs
        </Typography>

       <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          
            {["src/images/2.jpg","src/images/1.jpg"].map((item, index) => {
              return (
                
                  <img
                    
                    style={{ borderRadius: 3 }}
                    // height={"100%"}
                    width={"99px"}
                    src={item}
                    alt=""
                  />
              
              );
            })}
        
        </Stack> 

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
    
  );
};

export default ProductDetails;