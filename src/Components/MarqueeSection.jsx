import React from "react";
import Marquee from "react-fast-marquee";
import { Box, Paper } from "@mui/material";
import { styled } from "@mui/system";

// Styled component for the Marquee container
const MarqueeContainer = styled(Paper)(({ theme }) => ({
  width: "100%",
  padding: "10px 0",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: 3,
  overflow: "hidden",
}));

// Styled component for the logo images
const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px", // Space between logos
  "& img": {
    height: "50px", // Adjust logo size
    objectFit: "contain", // Ensure the logos fit properly
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)", // Scale logo slightly on hover
    },
  },
}));

// Marquee Component for Logos
const MarqueeComponent = ({ logos }) => {
  return (
    <MarqueeContainer elevation={3}>
      <Marquee
         gradient={true} // Enable gradient for fading effect
         gradientWidth={150}
        pauseOnHover={true} // Pause when hovering over the marquee
        direction="left" // Scroll direction (left or right)
      >
        <LogoContainer>
          {logos?.map((logo, index) => (
            <img src={logo.src} alt={logo.alt} key={index} style={{height:"50vh",width:"350px"}} />
          ))}
        </LogoContainer>
      </Marquee>
    </MarqueeContainer>
  );
};

export default MarqueeComponent;
