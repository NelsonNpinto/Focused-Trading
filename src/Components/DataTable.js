import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Box, IconButton, Slider, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CancelOutlined from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import GridOnIcon from "@mui/icons-material/GridOn";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { useNavigate } from "react-router-dom";

const TableStyles = {
  border: 1,
  borderColor: "#c1c1c1",
  minWidth: "100px",
  fontWeight: "bold",
  "& .MuiDataGrid-columnHeaders": {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1rem",
  },
  ".MuiDataGrid-columnHeaderTitle": {
    fontWeight: "bold !important",
    overflow: "visible !important",
  },
  "& .super-app-theme--header": {
    backgroundColor: "#eae5e5",
  },
  ".MuiDataGrid-columnSeparator": {
    color: "grey",
  },
  "& .MuiDataGrid-row": {
    cursor: "pointer",
  },
};

const trade = [
  {
    value: 0,
    label: "Real",
  },
  {
    value: 50,
    label: "Virtual",
  },

  {
    value: 100,
    label: "Both",
  },
];

function valuetext(value) {
  return `${value}`;
}
const DataTable = (props) => {
  const {
    rows,
    columns,
    sortModel,
    setSortModel,
    paginationdata,
    searchComponent,
  } = props;

  const paginationModel = paginationdata;
  const navigate = useNavigate();

  const onRowClick = (rows) => {
    const serializedRow = {
      data: rows.row,
    };
    navigate("/account-details", { state: { key: serializedRow } });
  };

  return (
    <Paper
      sx={{
        height: "100%",
        px: 5,
        py: 2,
        width: "93%",
        ml: 2,
      }}
    >
      {/* search */}

      <Box className="outline">
        <Box className="searchicon">{searchComponent}</Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              ml: 6,
              pr: 3,
              display: "flex",
              alignItems: "center",
              fontSize: "1rem",
              fontFamily: "Montserrat, sans-serif",
              borderRight: "2px solid grey",
              fontWeight: "600",
              opacity: 0.9,
            }}
            variant="subtitle"
          >
            <AccessTimeIcon
              sx={{ mr: 0.5, fontSize: "1.4rem", opacity: 0.6 }}
            />
            Pending
          </Typography>
          <Typography
            sx={{
              ml: 2,
              pr: 2,
              display: "flex",
              alignItems: "center",
              fontSize: "1.1rem",
              fontFamily: "Montserrat, sans-serif",
              borderRight: "2px solid grey",
              fontWeight: "600",
              opacity: 0.9,
            }}
            variant="subtitle"
          >
            <LockOpenOutlinedIcon
              sx={{ mr: 0.5, fontSize: "1.4rem", opacity: 0.6 }}
            />
            Open
          </Typography>
          <Typography
            sx={{
              ml: 2,
              pr: 2,
              display: "flex",
              alignItems: "center",
              fontSize: "1.1rem",
              fontFamily: "Montserrat, sans-serif",
              borderRight: "2px solid grey",
              fontWeight: "600",
              opacity: 0.9,
            }}
            variant="subtitle"
          >
            <LockOutlinedIcon
              sx={{ mr: 0.5, fontSize: "1.4rem", opacity: 0.6 }}
            />
            Closed
          </Typography>
          <Typography
            sx={{
              ml: 2,
              pr: 2,
              display: "flex",
              alignItems: "center",
              fontSize: "1.1rem",
              fontFamily: "Montserrat, sans-serif",
              borderRight: "2px solid grey",
              fontWeight: "600",
              opacity: 0.9,
            }}
            variant="subtitle"
          >
            <CancelOutlined
              sx={{ mr: 0.5, fontSize: "1.4rem", opacity: 0.6 }}
            />
            Cancelled
          </Typography>
          <Typography
            sx={{
              ml: 2,
              pr: 2,
              display: "flex",
              alignItems: "center",
              fontSize: "1.1rem",
              fontFamily: "Montserrat, sans-serif",
              borderRight: "2px solid grey",
              fontWeight: "600",
              opacity: 0.9,
            }}
            variant="subtitle"
          >
            <CheckCircleOutlined
              sx={{ mr: 0.5, fontSize: "1.4rem", opacity: 0.6 }}
            />
            Verify
          </Typography>
        </Box>
        <Box sx={{ width: 250, ml: 10 }}>
          <Slider
            defaultValue={0}
            aria-label="Default"
            getAriaValueText={valuetext}
            step={10}
            marks={trade}
          />
          {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="subtitle"
              sx={{
                fontSize: "1rem",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "500",
              }}
            >
              Real
            </Typography>
            <Typography
              variant="subtitle"
              sx={{
                fontSize: "1rem",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "500",
              }}
            >
              Virtual
            </Typography>
            <Typography
              variant="subtitle"
              sx={{
                fontSize: "1rem",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "500",
              }}
            >
              Both
            </Typography>
          </Box> */}
        </Box>
        <Box sx={{ ml: 21 }}>
          <IconButton>
            <SaveAltIcon
              sx={{
                fontSize: "20px",
                border: "1px solid black",
                p: 1,
                borderRadius: "5px",
              }}
            />
          </IconButton>
          <IconButton>
            <GridOnIcon
              sx={{
                fontSize: "20px",
                border: "1px solid black",
                p: 1,
                borderRadius: "5px",
              }}
            />
          </IconButton>
          <IconButton>
            <FullscreenIcon
              sx={{
                fontSize: "20px",
                border: "1px solid black",
                p: 1,
                borderRadius: "5px",
              }}
            />
          </IconButton>
        </Box>
      </Box>

      <DataGrid
        onRowClick={onRowClick}
        rows={rows}
        columns={columns}
        sortModel={sortModel}
        onSortModelChange={(newSortModel) => setSortModel(newSortModel)}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        getRowHeight={() => "auto"}
        sx={TableStyles}
      />
    </Paper>
  );
};

export default DataTable;
