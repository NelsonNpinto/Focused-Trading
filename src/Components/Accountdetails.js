import { Box, Container, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import React, { useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import THEMES from "../assets/themes/themes";
import CommentList from "./CommentList";

const Accountdetails = (rows) => {
  const navigate = useNavigate();

  const location = useLocation();
  const rowData = location.state.key; // Access the passed state (rows)

  useEffect(() => {
    console.log(rowData, "aaaaaaaaaaaaa"); // Logs the `rows` data passed from the previous component
  });

  return (
    <>
      <Container
        maxWidth={false}
        sx={{ m: 0, backgroundColor: THEMES.color.grey }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              opacity: "0.8",
              fontSize: THEMES.fonts.medium,
              fontFamily: THEMES.fontFamily.regular,
              py: 1,
              ml: 2,
            }}
          >
            Trader Account Details
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mr: 9 }}>
            <Typography
              fontWeight={"bold"}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/my-trades")}
            >
              Trade
            </Typography>
            <ArrowForwardIosIcon fontSize="'small'" sx={{ mx: 2 }} />
            <Typography>Trader Account Details</Typography>
          </Box>
        </Box>

        <Box>
          <Paper elevation={0} sx={{ m: 2, mb: 3 }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid width={"14%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    ID:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    {/* 2289 */}
                    {rowData.data.id}
                  </Typography>
                </Box>
              </Grid>

              <Grid width={"35%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Name:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    {rowData.data.account}
                  </Typography>
                </Box>
              </Grid>

              <Grid width={"15%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Enabled:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Yes
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid width={"14%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Trader:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    System Admin
                  </Typography>
                </Box>
              </Grid>

              <Grid width={"35%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Description:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    This account will be used to QQQ vertical spreads with TA
                  </Typography>
                </Box>
              </Grid>

              <Grid width={"15%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Virtual:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    {rowData.data.virtual}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          <Paper elevation={0} sx={{ m: 2, mb: 3 }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 1 }}
            >
              <Grid width={"25%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Current Balance (Virtual):
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    1,035,000
                  </Typography>
                </Box>
              </Grid>

              <Grid width={"25%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Max # Open Trades:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    2
                  </Typography>
                </Box>
              </Grid>

              <Grid width={"25%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Compounding:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    No
                  </Typography>
                </Box>
              </Grid>

              <Grid width={"15%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Spreads Only:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Yes
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 1 }}
            >
              <Grid width={"25%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Current Balance (Real):
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    200,813.54
                  </Typography>
                </Box>
              </Grid>

              <Grid width={"25%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Does Not Require Trend:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Yes
                  </Typography>
                </Box>
              </Grid>

              <Grid width={"25%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Hedge:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Yes
                  </Typography>
                </Box>
              </Grid>

              <Grid width={"15%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Send Email:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    No
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 1 }}
            >
              <Grid width={"25%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Stock Trade Amount:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    100
                  </Typography>
                </Box>
              </Grid>

              <Grid width={"25%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Followers Allowed:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    No
                  </Typography>
                </Box>
              </Grid>

              <Grid width={"25%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Hedge Type:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Bull Put
                  </Typography>
                </Box>
              </Grid>

              <Grid width={"15%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Send Text:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Yes
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 1 }}
            >
              <Grid width={"25%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Current Balance (Real):
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    200,813.54
                  </Typography>
                </Box>
              </Grid>

              <Grid width={"25%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Does Not Require Trend:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Yes
                  </Typography>
                </Box>
              </Grid>

              <Grid width={"25%"} item xs={6}>
                <Box sx={{ width: "100%", p: 1, pr: 2, display: "flex" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Hedge:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      ml: 1,
                      fontWeight: "500",
                      fontFamily: THEMES.fontFamily.regular,
                      fontSize: THEMES.fonts.small,
                    }}
                  >
                    Yes
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          <CommentList />
        </Box>
      </Container>
    </>
  );
};

export default Accountdetails;
