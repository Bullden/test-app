import { Button } from "@material-ui/core";
import React from "react";

const ButtonMaterial = (props) => {
  return (
    <Button
      color="primary"
      variant={props.isContain ? "contained" : "text"}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default ButtonMaterial;
