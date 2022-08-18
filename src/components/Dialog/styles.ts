import styled from "styled-components";
import * as RadixDialog from "@radix-ui/react-dialog";

export const DialogTrigger = styled(RadixDialog.DialogTrigger)`
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
`;
