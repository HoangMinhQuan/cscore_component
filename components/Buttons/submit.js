import styled from "styled-components";
import colors from "../../constants/colors";

const ButtonSubmit = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 6px 12px;
  outline: none;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${colors.gray};
  }
`;

export default ButtonSubmit;
