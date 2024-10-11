import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Typography } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#0c2239" }}>
          <Toolbar>
            <Box ml={10} mr={7}>
              <img
                src="https://focusedtrading.com/wp-content/uploads/2023/01/image_2023_02_01T14_35_05_221Z-removebg-preview.png"
                alt="#"
                style={{ width: "98px", height: "35px" }}
              />
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <FullscreenIcon
                  sx={{ mr: 1, fontWeight: "normal", color: "grey" }}
                />
              </IconButton>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <DarkModeOutlinedIcon
                  sx={{ mr: 3, fontWeight: "normal", color: "grey" }}
                />
              </IconButton>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle
                  sx={{ color: "white", fontSize: "2.2rem", mr: 1 }}
                />
                <Box mr={10}>
                  <Typography mr={17}>Admin</Typography>
                  <Typography
                    sx={{
                      fontWeight: "normal",
                      color: "grey",
                      fontSize: "0.8rem",
                    }}
                  >
                    Admin since september 2015
                  </Typography>
                </Box>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
