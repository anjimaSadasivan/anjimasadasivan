import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black", width: "100vw" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "revert",
            alignItems: "center",
            padding: 2,
          }}
        >
          {/* <Typography variant="h6" sx={{ color: "white", marginRight: 2 }}>
            About Me
          </Typography>{" "} */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h6" sx={{ color: "white", marginRight: 2 }}>
              About Me
            </Typography>
          </Link>
          {/* <Typography variant="h6" sx={{ color: "white", marginRight: 2 }}>
            Projects
          </Typography> */}
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <Typography variant="h6" sx={{ color: "white", marginRight: 2 }}>
              Projects
            </Typography>
          </Link>

          {/* <Typography variant="h6" sx={{ color: "white" }}>
            Featured
          </Typography> */}
          <Link to="/featured" style={{ textDecoration: "none" }}>
            <Typography variant="h6" sx={{ color: "white" }}>
              Featured
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
