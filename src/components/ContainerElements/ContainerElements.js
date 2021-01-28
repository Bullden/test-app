import React, { useEffect, useState } from "react";
import ButtonMaterial from "../../shared/Button/Button";
import InputElement from "../InputElement/InputElement";
import { Box } from "@material-ui/core";

import "./ContainerElements.css";

const ContainerElements = ({ handleClose }) => {
  const [elements, setElements] = useState([]);
  const LOCAL_NAME = 'array'
  useEffect(() => {
    try {
      const localData = JSON.parse(localStorage.getItem(LOCAL_NAME));
      setElements(localData || []);
    }catch {
      localStorage.removeItem(LOCAL_NAME)
    }

  }, []);

  const deleteElement = (id) => {
    const updatedElements = elements.filter((item) => item.id !== id);

    setElements(updatedElements);
  };

  const addElement = () => {
    const randomId = `${new Date().getTime()}`;
    const newElement = { value: "", id: randomId };

    setElements([...elements, newElement]);
  };

  const saveData = () => {
    localStorage.setItem(LOCAL_NAME, JSON.stringify(elements));
    handleClose()
  };

  const changeValue = (value, data) => {
    const updatedElements = elements.map((item) => {
      if (item.id === data.id) {
        return {
          ...item,
          value,
        };
      }
      return item;
    });

    setElements(updatedElements);
  };

  return (
    <Box>
      {elements.map((i) => (
        <InputElement
          value={i.value}
          data={i}
          key={i.id}
          onDelete={() => deleteElement(i.id)}
          changeValue={changeValue}
        />
      ))}
      <Box className="wrap-buttons">
        <Box className="wrap-button-add">
          <ButtonMaterial isContain={false} onClick={addElement}>
            Add
          </ButtonMaterial>
        </Box>
        <Box className="wrap-buttons-save-close">
          <ButtonMaterial isContain onClick={saveData}>
            Save
          </ButtonMaterial>
          <ButtonMaterial isContain={false} onClick={handleClose}>
            Close
          </ButtonMaterial>
        </Box>
      </Box>
    </Box>
  );
};
export default ContainerElements;
