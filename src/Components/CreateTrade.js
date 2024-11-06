import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {  useNavigate } from "react-router-dom";
import THEMES from "../assets/themes/themes";
import CommentBigBox from "./CommentBigBox";

const CreateTrade = () => {
  const [symbol, setSymbol] = useState("");
  const [securityType, setSecurityType] = useState("");
  const [tradeType, setTradeType] = useState("");
  const [direction, setDirection] = useState("");
  const [entryCondition, setEntryCondition] = useState("");
  const [timeFrame, setTimeFrame] = useState("");
  const [profitCondition, setProfitCondition] = useState("");
  const [profitTimeframe, setProfitTimeframe] = useState("");
  const [profitPrice, setProfitPrice] = useState("");
  const [stopcondition, setStopcondition] = useState("");
  const [stopTimeframe, setStopTimeframe] = useState("");
  const [stopPrice, setStopPrice] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <Container maxWidth={false} sx={{ m: 0, backgroundColor: THEMES.color.grey }}>
        <Typography>Trader Account</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              opacity: "0.8",
              fontSize: "1.1rem",
              fontFamily: "Montserrat, sans-serif",
              py: 1,
              ml: 2,
            }}
          >
            Create Trade
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mr: 9 }}>
            <Typography
              fontWeight={"bold"}
              sx={{cursor:'pointer'}}
              onClick={() => navigate("/my-trades")}
            >
              View Trade
            </Typography>
            <ArrowForwardIosIcon fontSize="'small'" sx={{ mx: 2 }} />
            <Typography>Create Trade</Typography>
          </Box>
        </Box>

        <Box>
          <Paper elevation={0} sx={{ m: 2, mb: 3 }}>
            <Box sx={{ display: "flex", m: 1, pb: 1 }}>
              <Box sx={{ width: "100%", p: 1, pr: 2 }}>
                <FormControl sx={{ width: "100%" }} size="small">
                  <Typography sx={{ my: 1 }}>Security Type*</Typography>
                  <Select
                    value={securityType}
                    onChange={(e) => setSecurityType(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Type1</MenuItem>
                    <MenuItem value={2}>Type2</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ width: "100%" }} size="small">
                  <Typography sx={{ my: 1 }}>Symbol*</Typography>

                  <Select
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)}
                  >
                    <MenuItem value="">
                      <exm>None</exm>
                    </MenuItem>
                    <MenuItem value={10}>QQQ</MenuItem>
                    <MenuItem value={20}>SPY</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ width: "100%", p: 1, pr: 2 }}>
                <FormControl sx={{ width: "100%" }} size="small">
                  <Typography sx={{ my: 1 }}>Trade Type*</Typography>

                  <Select
                    value={tradeType}
                    onChange={(e) => setTradeType(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>tradeType1</MenuItem>
                    <MenuItem value={2}>tradeType2</MenuItem>
                    <MenuItem value={3}>tradeType3</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ width: "100%" }} size="small">
                  <Typography sx={{ my: 1 }}>Direction*</Typography>

                  <Select
                    value={direction}
                    onChange={(e) => setDirection(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>up</MenuItem>
                    <MenuItem value={2}>down</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Paper>

          <Paper elevation={0} sx={{ m: 2, mb: 3 }}>
            <Box sx={{ display: "flex", m: 1, pb: 1 }}>
              <Box sx={{ width: "100%", p: 1, pr: 2 }}>
                <FormControl sx={{ width: "100%" }} size="small">
                  <Typography sx={{ my: 1 }}>Entry Condition*</Typography>
                  <Select
                    value={entryCondition}
                    onChange={(e) => setEntryCondition(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>up</MenuItem>
                    <MenuItem value={2}>down</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ width: "100%", p: 1, pr: 2 }}>
                <FormControl sx={{ width: "100%" }} size="small">
                  <Typography sx={{ my: 1 }}>Time Frame*</Typography>
                  <Select
                    value={timeFrame}
                    onChange={(e) => setTimeFrame(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>11</MenuItem>
                    <MenuItem value={2}>12</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Paper>

          <Paper elevation={0} sx={{ m: 2, mb: 3 }}>
            <Box sx={{ display: "flex", m: 1, pb: 1 }}>
              <Box sx={{ width: "100%", p: 1, pr: 2 }}>
                <FormControl sx={{ width: "100%" }} size="small">
                  <Typography sx={{ my: 1 }}>Profit condition*</Typography>
                  <Select
                    value={profitCondition}
                    onChange={(e) => setProfitCondition(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>11</MenuItem>
                    <MenuItem value={2}>12</MenuItem>
                  </Select>

                  <Typography sx={{ my: 1 }}>Profit Time Frame*</Typography>

                  <Select
                    value={profitTimeframe}
                    onChange={(e) => setProfitTimeframe(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1hour</MenuItem>
                    <MenuItem value={2}>2hour</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ width: "100%", p: 1, pr: 2 }}>
                <FormControl sx={{ width: "100%" }} size="small">
                  <Typography sx={{ my: 1 }}>Profit Price*</Typography>

                  <Select
                    value={profitPrice}
                    onChange={(e) => setProfitPrice(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>20$</MenuItem>
                    <MenuItem value={2}>30$</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Paper>

          <Paper elevation={0} sx={{ m: 2, mb: 3 }}>
            <Box sx={{ display: "flex", m: 1, pb: 1 }}>
              <Box sx={{ width: "100%", p: 1, pr: 2 }}>
                <FormControl sx={{ width: "100%" }} size="small">
                  <Typography sx={{ my: 1 }}>Stop condition*</Typography>

                  <Select
                    value={stopcondition}
                    onChange={(e) => setStopcondition(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>20%</MenuItem>
                    <MenuItem value={2}>30%</MenuItem>
                  </Select>

                  <Typography sx={{ my: 1 }}>Stop Time Frame*</Typography>
                  <Select
                    value={stopTimeframe}
                    onChange={(e) => setStopTimeframe(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1hour</MenuItem>
                    <MenuItem value={2}>2hour</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ width: "100%", p: 1, pr: 2 }}>
                <FormControl sx={{ width: "100%" }} size="small">
                  <Typography sx={{ my: 1 }}>Stop Price*</Typography>
                  <Select
                    value={stopPrice}
                    onChange={(e) => setStopPrice(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>30$</MenuItem>
                    <MenuItem value={2}>40$</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Paper>

          <Paper sx={{ m: 2, mb: 3, p: 3 }}>
            <CommentBigBox/>
            <Button sx={{ width: "4%", m: 0.6, mt: 2 }} variant="outlined">
              Cancel
            </Button>
            <Button sx={{ width: "4%", m: 0.6, mt: 2 }} variant="contained">
              Save
            </Button>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default CreateTrade;
