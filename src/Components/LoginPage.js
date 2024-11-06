import React, { useState } from "react";
// import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setEroor] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (validateForm()) {
      setEroor(true);
    } else {
      navigate("/dashboard");
      props.setFlag(true);
    }
  };
  const validateForm = () => {
    if (name === "" || password === "") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Container
        className="login-container"
        sx={{ height: "100vh", backgroundColor: "#0c2239" }}
        maxWidth={false}
      >
        <Grid
          sx={{
            textAlign: "center",
          }}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid size={4}></Grid>
          <Grid size={4} ml={2}>
            <Box ml={2} mt={3}>
              <img
                src="https://focusedtrading.com/wp-content/uploads/2023/01/image_2023_02_01T14_35_05_221Z-removebg-preview.png"
                alt="#"
                width={"250px"}
              />
            </Box>
            <Paper sx={{ mt: 6, ml: 8, width: "75%" }} elevation={3}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.2375rem",
                    fontWeight: "600",
                    color: " #212529",
                    // lineHeight:'0.2rem',
                    letterSpacing: "0.02rem",
                    pt: 4,
                  }}
                  variant="h4"
                >
                  LOGIN TO YOUR ACCOUNT
                </Typography>

                <FormControl
                  sx={{ m: 1, textAlign: "left", width: "84%" }}
                  variant="outlined"
                >
                  <Typography
                    sx={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: ".825rem",
                      fontWeight: "400",
                      py: 1,
                      mt: 1,
                    }}
                    variant="body1"
                  >
                    Username*
                  </Typography>

                  <OutlinedInput
                    className="abc"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    sx={{
                      height: "35px",
                      border: error && name === "" ? "1px solid" : "none",
                      borderColor: error && name === "" ? "red" : "",
                      input: {
                        fontFamily: "Rubik, sans-serif",
                        fontSize: ".825rem",
                        fontWeight: "600",
                      },
                    }}
                    placeholder="Username*"
                  />
                  {name === "" && error && (
                    <>
                      <Typography
                        sx={{
                          fontSize: ".750rem",
                          color: "red",
                          fontWeight: "400",
                          marginTop: ".35rem",
                          wordSpacing: ".001px",
                        }}
                      >
                        Please enter your valid username
                      </Typography>
                    </>
                  )}
                </FormControl>

                <FormControl
                  sx={{ m: 1, textAlign: "left", width: "84%" }}
                  variant="outlined"
                >
                  <Typography
                    sx={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: ".825rem",
                      fontWeight: "400",
                      py: 1,
                      // mt: 2,
                    }}
                    variant="body1"
                  >
                    Password*
                  </Typography>

                  <OutlinedInput
                    className="checkinput"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    id="outlined-adornment-password"
                    sx={{
                      height: "39px",
                      border: error && password === "" ? "1px solid" : "none",
                      borderColor: error && password === "" ? "red" : "",
                      input: {
                        fontFamily: "Rubik, sans-serif",
                        fontSize: ".825rem",
                        fontWeight: "600",
                      },
                    }}
                    placeholder="Passworod*"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {password === "" && error && (
                    <>
                      <Typography
                        sx={{
                          fontSize: ".750rem",
                          color: "red",
                          fontWeight: "400",
                          marginTop: ".35rem",
                          wordSpacing: ".001px",
                        }}
                      >
                        Please enter your valid password
                      </Typography>
                    </>
                  )}
                </FormControl>
                <FormGroup
                  sx={{
                    alignItems: "left",
                    ml: 3,
                    mt: 1,
                  }}
                >
                  <FormControlLabel
                    className="checkbox-label"
                    control={<Checkbox />}
                    label={
                      <Typography
                        sx={{ fontSize: ".825rem", fontWeight: "600" }}
                      >
                        Remember me
                      </Typography>
                    }
                  />
                </FormGroup>
                <Button
                  onClick={() => {
                    handleSubmit();
                  }}
                  sx={{
                    backgroundColor: "#2c2f36",
                    borderRadius: "5px",
                    fontSize: "14px",
                    cursor: "pointer",
                    textAlign: "center",
                    px: 9,
                    my: 4,
                  }}
                  variant="contained"
                  size="medium"
                >
                  LOGIN
                </Button>
                <Typography
                  sx={{ cursor: "pointer", fontSize: "13px" }}
                  pb={3}
                  color="primary"
                  variant="body1"
                  onClick={() => navigate("/forget-password")}
                >
                  Forget Password?
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid size={4}></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LoginPage;
