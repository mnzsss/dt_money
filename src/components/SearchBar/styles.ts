import styled from "styled-components";

export const SearchBarContainer = styled.form`
  display: flex;
  gap: 1rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border-radius: 6px;
    padding: 1rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme["green-300"]};
    color: ${(props) => props.theme["green-500"]};
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme["green-500"]};
      border-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme["white"]};
      transition: all 0.2s;
    }
  }
`;
