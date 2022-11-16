import React, { useState } from "react";
import { FloatingContainer, Input, Label } from "./FloatingInput.styled";

const FloatingInput = ({
  labelText,
  icon,
  onChangeValue,
  textValue,
  inputType,
  name,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState(textValue);

  const handleTextChange = (e) => {
    let text = e?.target?.value;
    setValue(text);

    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    onChangeValue(e);
  };

  return (
    <FloatingContainer>
      <Input
        value={value}
        onChange={(e) => handleTextChange(e)}
        type={inputType}
        name={name}
      />
      <Label className={isActive ? "Active" : ""}>
        {icon} {labelText}
      </Label>
    </FloatingContainer>
  );
};

export default FloatingInput;
