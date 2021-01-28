import React, { useState } from "react";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import { Box } from "@material-ui/core";
import ContainerElements from "../ContainerElements/ContainerElements";

import "./PopupComponent.css";

const PopupComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Open Popup
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box className="wrap-modal">
          <Box className="wrap-header-modal-block">
            <Box className="header-modal-block">
              <Box className="text">Structure of numbers</Box>
              <Box onClick={handleClose}>
                <IconButton>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <ContainerElements handleClose={handleClose} />
        </Box>
      </Popover>
    </Box>
  );
};
export default PopupComponent;
