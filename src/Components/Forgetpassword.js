import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Forgetpassword = () => {
  const [error, setEroor] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();


  return (
    <>
      <Container
        className="login-container"
        sx={{ height: "100vh",  backgroundColor: "#0c2239" }}
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
          <Box my={4} pr={3} mt={8}>
              <img
                src="https://focusedtrading.com/wp-content/uploads/2023/01/image_2023_02_01T14_35_05_221Z-removebg-preview.png"
                alt="#"
                width={"250px"}
              />
            </Box>
            <Paper  sx={{  width: "66%", mt: 6, ml: 9, }}>
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1.2375rem",
                  fontWeight: "600",
                  mt: 3,
                  pt: 3,
                }}
                variant="h1"
              >
                FORGOT YOUR PASSWORD?
              </Typography>
              <Alert
                icon={false}
                sx={{ width: "84%", ml: 3, mt: 1, p: 1, textAlign: "center" }}
                severity="warning"
              >
                Please enter the email address associated with your account. If
                found, we will email you a link to reset your password.
              </Alert>

              <FormControl
                sx={{ m: 1, textAlign: "left", width: "85%" }}
                variant="outlined"
              >
                <Typography
                  sx={{
                    fontFamily: "Rubik, sans-serif",
                    fontSize: ".825rem",
                    fontWeight: "400",
                    py: 1,
                    mt: 2,
                    width: "60%",
                  }}
                  variant="body1"
                >
                  Email*
                </Typography>

                <OutlinedInput
                  className="abc"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  sx={{
                    height: "35px",
                    border: error && email === "" ? "1px solid" : "none",
                    borderColor: error && email === "" ? "red" : "",
                    input: {
                      fontFamily: "Rubik, sans-serif",
                      fontSize: ".825rem",
                      fontWeight: "600",
                    },
                  }}
                  placeholder="Email*"
                />
                {email === "" && error && (
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
                      Please enter your email, email should not contain special
                      characters
                    </Typography>
                  </>
                )}
              </FormControl>
              <Button
                onClick={() => setEroor(true)}
                sx={{
                  backgroundColor: "#2c2f36",
                  borderRadius: "5px",
                  fontSize: "14px",
                  cursor: "pointer",
                  textAlign: "center",
                  px: 9,
                  my: 2,
                }}
                variant="contained"
                size="medium"
              >
                REQUEST RESET LINK
              </Button>
              <Typography
                sx={{ cursor: "pointer", fontSize:'13px' }}
                pb={3}
                color="primary"
                variant="body1"
                onClick={() => navigate(-1)}
              >
                Back to login
              </Typography>
            </Paper>
          </Grid>
          <Grid size={4}></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Forgetpassword;
