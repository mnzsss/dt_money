import styled from "styled-components";

export const Input = styled.input`
  flex: 1;
  border-radius: 6px;
  border: 0;
  background-color: ${(props) => props.theme["gray-900"]};
  color: ${(props) => props.theme["gray-300"]};
  padding: 1rem;

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }
`;
