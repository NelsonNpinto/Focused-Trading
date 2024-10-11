import {
  Avatar,
  Box,
  Checkbox,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import chartImg from "../Dashboard/pie-chart.png";
const DashboardContent = () => {
  return (
    <Container maxWidth={false} sx={{ m: 0, backgroundColor: "#f0f0f1" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            opacity: "0.8",
            fontSize: "1.1rem",
            fontFamily: "Montserrat, sans-serif",
            py: 1,
            ml: 8,
          }}
        >
          Dashboard Details
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography fontWeight={"bold"}>Dashboard</Typography>
          <ArrowForwardIosIcon fontSize="'small'" sx={{ mx: 2 }} />
          <Typography>Dashboard Details</Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "20%", ml: 8 }}>
          <Paper sx={{ px: 2, pb: 2, width: "97%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  fontFamily: "Montserrat, sans-serif",
                  py: 1,
                  ml: 1,
                }}
              >
                MY Portfolio
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox size="small" />
                <Typography
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: ".81rem",
                    fontWeight: "600",
                    ml: 0,
                    letterSpacing: "-0.01rem",
                  }}
                >
                  Show Real
                </Typography>
              </Box>
            </Box>
            <Box>
              <img src={chartImg} alt="" style={{width:'100%'}} />
            </Box>

            <div className="list-container">
              <div className="inside-list-container">
                <Avatar sx={{ m: 1 }}>R</Avatar>
                <Typography>Roku</Typography>
              </div>

              <div>
                <Typography>-0.077%</Typography>
              </div>
            </div>

            <div className="list-container">
              <div className="inside-list-container">
                <Avatar sx={{ m: 1 }}>R</Avatar>
                <Typography>Roku</Typography>
              </div>

              <div>
                <Typography>-0.077%</Typography>
              </div>
            </div>

            <div className="list-container">
              <div className="inside-list-container">
                <Avatar sx={{ m: 1, backgroundColor: "orange" }}>E</Avatar>
                <Typography>Roku</Typography>
              </div>

              <div>
                <Typography>-0.077%</Typography>
              </div>
            </div>

            <div className="list-container">
              <div className="inside-list-container">
                <Avatar sx={{ m: 1, backgroundColor: "orange" }}>E</Avatar>
                <Typography>Roku</Typography>
              </div>

              <div>
                <Typography>-0.077%</Typography>
              </div>
            </div>

            <div className="list-container">
              <div className="inside-list-container">
                <Avatar sx={{ m: 1 }}>C</Avatar>
                <Typography>Roku</Typography>
              </div>

              <div>
                <Typography>-0.077%</Typography>
              </div>
            </div>
          </Paper>
        </Box>

        <Box sx={{ display: "flex", width: "75%" }}>
          <Paper sx={{ ml: 6, width: "20%", height: "13%", display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "56%",
                ml: 3,
              }}
            >
              <AttachMoneyIcon
                sx={{
                  width: "24px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: "#3a7bd5",
                  color: "white",
                  boxShadow: "0px 0px 0px 10px #c1aeae33",
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    color: "GrayText",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Total Change
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  $478,416.55
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper sx={{ ml: 3, width: "20%", height: "13%", display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "56%",
                ml: 3,
              }}
            >
              <AttachMoneyIcon
                sx={{
                  width: "24px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: "#3a7bd5",
                  color: "white",
                  boxShadow: "0px 0px 0px 10px #c1aeae33",
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: "500",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Year Change
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  $478,416.55
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper sx={{ ml: 3, width: "20%", height: "13%", display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "52%",
                ml: 3,
              }}
            >
              <AttachMoneyIcon
                sx={{
                  width: "24px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: "#3a7bd5",
                  color: "white",
                  boxShadow: "0px 0px 0px 10px #c1aeae33",
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: "500",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Month Change
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  -$3.22
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper sx={{ ml: 3, width: "20%", height: "13%", display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "45%",
                ml: 3,
              }}
            >
              <AttachMoneyIcon
                sx={{
                  width: "24px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: "#3a7bd5",
                  color: "white",
                  boxShadow: "0px 0px 0px 10px #c1aeae33",
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: "500",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Day Change
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  -$3.22
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default DashboardContent;
