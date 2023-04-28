import React from "react";
import { Container, Typography } from "@mui/material";

const Main = () => {
  return (
    <div className="w-full h-[70vh] relative">
      <div className="w-full h-full titleBackground -z-10 absolute bg-fixed"></div>
      <Container
        className="h-full backdrop-blur-sm"
        sx={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}
      >
        <Typography
          variant="h1"
          noWrap
          sx={{
            mr: 3,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".4rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          BOOKFINDER
        </Typography>
        <p>Discover your next favorite read with ease</p>
      </Container>
    </div>
  );
};

export default Main;
