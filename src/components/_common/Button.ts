import styled, { css } from "styled-components";

interface ButtonProps {
  size?: "small" | "medium" | "large";
}

const buttonSize = {
  small: 50,
  medium: 58,
  large: 64,
};

export const Button = styled.button<ButtonProps>`
  height: 50px;
  border: 0;
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["white"]};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["green-700"]};
    transition: background-color 0.2s;
  }

  ${(props) =>
    css`
      height: ${buttonSize[props.size ?? "small"]}px;
    `}
`;
