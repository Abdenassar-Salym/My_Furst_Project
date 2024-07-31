import { ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import { useTheme } from "@emotion/react";
import IconSection from "./iconSection";

const myslide = [
  { text: "MEN", link: "src/images/banner-15.jpg" },
  { text: "WOMEN", link: "src/images/banner-25.jpg" },
];

const Hero = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box sx={{pt:2, mt: 2, display: "flex", alignItems: "center" }}>
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          {myslide.map((e, i) => {
            return (
              <SwiperSlide key={i} className="parent-slider">
                <img src={e.link} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "7%",
                      top: "15%",
                      textAlign: "left",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 5,
                      pb: 6,
                    },
                  }}
                >
                  <Typography sx={{ color: "#222" }} variant="h6">
                    LIFESTYLE COLLECTION
                  </Typography>
                  <Typography
                    sx={{ color: "#222", fontSize: 40, my: 1 }}
                    variant="h3"
                  >
                    {e.text}
                  </Typography>
                  <Stack direction={"row"} alignItems={"cente"}>
                    <Typography
                      sx={{ color: "#333", fontSize: 20, mr: 1, ml: 0 }}
                      variant="h4"
                    >
                      SALE UP TO
                    </Typography>
                    <Typography
                      sx={{ color: "#e85d04", fontSize: 20 }}
                      variant="h4"
                    >
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{ color: "#000", fontWeight: 300 }}
                    variant="body1"
                  >
                    Get free shiping on oders over $99,00
                  </Typography>
                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#03071e",
                      color: "#e85d04",
                      ":hover": {
                        backgroundColor: "#6a040f",
                      },
                    }}
                  >
                    SHOP NOW
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box
          sx={{
            mr: 6,
            display: { xs: "none", md: "block" },
            minWidth: "20%",
            maxWidth: "21%",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <img src="src/images/banner-17.jpg" width={"100%"} />
            <Box sx={{ position: "absolute", top: 0 }}>
              <Typography>Good house</Typography>
              <Typography>SALE 20% OFF</Typography>
              <Link
                sx={{
                  color: "#ffba08",
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  ":hover": {
                    color: "#9d0208",
                    cursor: "pointer",
                  },
                }}
                href="#"
                underline="none"
              >
                Shop now
                <ArrowForwardIos sx={{ fontSize: "13px" }} />
              </Link>
            </Box>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img src="src/images/banner-16.jpg" width={"100%"} />
            <Box sx={{ position: "absolute", top: 0 }}>
              <Typography>Good house</Typography>
              <Typography>SALE 20% OFF</Typography>
              <Link
                sx={{
                  color: "#ffba08",
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  ":hover": {
                    color: "#9d0208",
                    cursor: "pointer",
                  },
                }}
                href="#"
                underline="none"
              >
                Shop now
                <ArrowForwardIos sx={{ fontSize: "13px" }} />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>

      <IconSection />
    </Container>
  );
};

export default Hero;
