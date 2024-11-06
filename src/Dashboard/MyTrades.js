import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DataTable from "../Components/DataTable";
import datatable from "../data/tabledata.json";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import ClearIcon from "@mui/icons-material/Clear";               
import { useNavigate } from "react-router-dom";
import THEMES from "../assets/themes/themes";
import DropdownMenuBar from "../Components/DropdownMenuBar";

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
    marginLeft: theme.spacing(1),
  },
  border: "1px solid rgb(179, 172, 172)",
  display: "flex",
  alignItems: "center",

  height: "28px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "grey",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 2, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "12ch",
    },
  },
}));

const paginationModel = { page: 0, pageSize: 5 };

const MyTrades = () => {
  const columns = [
    // {
    //   field: "id",
    //   headerName: "SR",
    //   width: 10,
    //   cellClassName: "custom-columns",
    // },
    {
      field: "symbol",
      headerName: "Symbol",
      width: 200,
      headerClassName: "super-app-theme--header",
      cellClassName: "custom-active",
    },
    {
      field: "description",
      headerName: "Discription",
      width: 200,
      headerClassName: "super-app-theme--header",
      cellClassName: "custom-columns",
    },
    {
      field: "account",
      headerName: "Account",
      width: 200,
      headerClassName: "super-app-theme--header",
      cellClassName: "custom-active",
    },
    {
      field: "currentGainPercentage",
      headerName: "CurrentGain (%)",
      width: 200,
      headerClassName: "super-app-theme--header",
      cellClassName: "custom-columns",
    },
    {
      field: "currentGainDollar",
      headerName: "CurrentGain ($)",
      width: 200,
      headerClassName: "super-app-theme--header",
      cellClassName: "custom-columns",
    },

    {
      field: "entry",
      headerName: "Entry",
      width: 200,
      headerClassName: "super-app-theme--header",
      cellClassName: "custom-columns",
    },
    {
      field: "exit",
      headerName: "Exit",
      width: 200,
      headerClassName: "super-app-theme--header",
      cellClassName: "custom-columns",
    },
    {
      field: "virtual",
      headerName: "Virtual",
      width: 200,
      headerClassName: "super-app-theme--header",
      cellClassName: "custom-columns",
    },
  ];

  const navigate = useNavigate();
  const [arrayid, setArrayid] = useState([]);
  const [tabledata, setTableData] = useState(datatable);

  const duplicateArray = () => {
    const data = datatable.map((obj) => ({
      id: obj.id,
    }));

    setArrayid(data);

    console.log(data, "dataaaaaaaaaaaaa");
  };

  useEffect(() => {
    duplicateArray();
  }, []);

  const [sortModel, setSortModel] = React.useState([
    {
      field: "exit",
      sort: "desc",
    },
  ]);
  const searchComponent = (
    <Search
      sx={{
        my: 2,
      }}
    >
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
      <ClearIcon sx={{ color: "grey" }} />
    </Search>
  );

  // const handleRemoverow = (id) => {
  //   const updatedRows = rows.filter((row) => row.id !== id);
  //   setRows(updatedRows);
  // };

  return (
    <Container
      maxWidth={false}
      sx={{ m: 0, backgroundColor: THEMES.color.grey }}
    >
      {/* LIST OF TRADES */}

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
            fontSize: THEMES.fonts.medium,
            fontFamily: THEMES.fontFamily.regular,
            py: 1,
            ml: 3,
          }}
        >
          LIST OF TRADES
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography fontWeight={"bold"}>My Trades</Typography>
          <ArrowForwardIosIcon fontSize="'small'" sx={{ mx: 2 }} />
          <Typography>List Of Trades</Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "right", mt: 3, mb: 3 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: THEMES.fonts.medium, mr: 1 }}
          onClick={() => navigate("/create-trade")}
        >
          Create Trade
        </Button>

        {/* Delete button? */}

  
        <DropdownMenuBar arrayid={arrayid} tabledata={tabledata}  setTableData={setTableData}  />
      </Box>

      <DataTable
        rows={tabledata}
        columns={columns}
        paginationdata={paginationModel}
        sortModel={sortModel}
        setSortModel={setSortModel}
        searchComponent={searchComponent}

        
      />
    </Container>
  );
};

export default MyTrades;
