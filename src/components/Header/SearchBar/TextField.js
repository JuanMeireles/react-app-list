//
import * as React from "react";
import { Box, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

function SearchTextField() {
  return (
    <div>
      <TextField
        size="small"
        id="outlined-search"
        label="Search"
        type="search"
      />
    </div>
  );
}
export default SearchTextField;
