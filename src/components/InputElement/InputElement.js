import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Input } from "@material-ui/core";
import CancelSharpIcon from "@material-ui/icons/CancelSharp";
import { Box } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import "./InputElement.css";

const InputElement = ({ value, data, onDelete, changeValue }) => {
  return (
    <Box className="element-wrap">
      <FormControl className="from-wrap">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={(event) => changeValue(event.target.value, data)}
        >
          <MenuItem value={4}>Quadro</MenuItem>
          <MenuItem value={12}>Tripple</MenuItem>
          <MenuItem value={22}>Twin</MenuItem>
        </Select>
      </FormControl>

      <Box className="input-wrap">
        <Input value={value} />
      </Box>
      <Box onClick={onDelete} className="button-wrap">
        <IconButton color="secondary">
          <CancelSharpIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default InputElement;
