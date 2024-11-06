import {
  alpha,
  Box,
  Button,
  InputBase,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import THEMES from "../assets/themes/themes";
import CommentBigBox from "./CommentBigBox";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  //   marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "18%",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(1),
  },
  border: "1px solid rgb(179, 172, 172)",
  display: "flex",
  alignItems: "center",
  height: "28px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    // padding: theme.spacing(1, 2 , 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "13ch",
    },
  },
}));

const CommentList = () => {
  return (
    <>
      <Paper sx={{ m: 2, mb: 3, p: 3 }}>
        <Typography
          sx={{
            mb: 2,
            fontWeight: "bold",
            fontFamily: THEMES.fontFamily.regular,
            fontSize: THEMES.fonts.medium,
            opacity: "0.9",
          }}
        >
          Comment List:
        </Typography>

        <Search
          sx={{
            my: 2,
          }}
        >
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Box>
          <div>
            <table className="comment-Table">
              <tr>
                <th>Date Added</th>
                <th>Added By</th>
                <th>Comment</th>
                <th>Images</th>
                <th>Video</th>
              </tr>
              <tr>
                <td>2024-09-30 10:26:33</td>
                <td>System</td>
                <td>
                  <li>Setting minimum spread price=0.1, </li>
                  <li> entry begin time=101800, </li>{" "}
                  <li> entry exit time=150000,</li>
                  <li> trade amount=100406.77,</li>
                  <li> entry time </li>
                  <li> frame=8m</li>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2024-09-30 10:26:33</td>
                <td>System</td>
                <td>
                  <li>Setting minimum spread price=0.1, </li>
                  <li> entry begin time=101800, </li>{" "}
                  <li> entry exit time=150000,</li>
                  <li> trade amount=100406.77,</li>
                  <li> entry time frame=8m</li>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2024-09-30 10:26:33</td>
                <td>System</td>
                <td>
                  <li>Setting minimum spread price=0.1, </li>
                  <li> entry begin time=101800, </li>{" "}
                  <li> entry exit time=150000,</li>
                  <li> trade amount=100406.77,</li>
                  <li> entry time frame=8m</li>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2024-09-30 10:26:33</td>
                <td>System</td>
                <td>
                  <li>Setting minimum spread price=0.1, </li>
                  <li> entry begin time=101800, </li>{" "}
                  <li> entry exit time=150000,</li>
                  <li> trade amount=100406.77,</li>
                  <li> entry time frame=8m</li>
                </td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </Box>
      </Paper>

      <Paper sx={{ m: 2, mb: 3, p: 3 }}>
        <CommentBigBox />
        <Box sx={{ justifyContent: " end", display: "grid" }}>
          <Button
            sx={{
              width: "143px",
              m: 0.6,
              mt: 2,
            }}
            variant="contained"
            color="success"
          >
            Save Comment
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default CommentList;
