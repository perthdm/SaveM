import styled from "styled-components";

export const FloatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  position: relative;
  margin-top: 20px;
  padding-left: 10%;
  padding-right: 10%;

  .Active {
    transform: translate(0, 12px) scale(0.75);
  }

  &:focus-within label {
    transform: translate(0, 12px) scale(0.75);
  }

  &:focus-within input {
    border-color: #2899db;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 65px;
  padding: 16px 16px 0 10px;
  outline: 0;
  border: 0px;
  border-bottom: 2px solid #2899db;
  border-radius: 4px;
  background: transparent;
  font-family: Comic Sans MS;
  font-size: 16px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-family: Comic Sans MS;
  padding: 0 12px;
  color: #2899db;
  pointer-events: none;
  position: absolute;
  transform: translate(0, 26px) scale(1);
  transform-origin: top left;
  transition: all 0.2s ease-out;
`;
