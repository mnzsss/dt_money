import styled from "styled-components";
import * as RadixDialog from "@radix-ui/react-dialog";

export const DialogOverlay = styled(RadixDialog.DialogOverlay)`
  width: 100vw;
  height: 100vh;

  position: fixed;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.75);
`;

export const DialogContent = styled(RadixDialog.DialogContent)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme["gray-800"]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DialogTitle = styled(RadixDialog.DialogTitle)`
  margin-bottom: 2rem;
`;

export const DialogClose = styled(RadixDialog.DialogClose)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  line-height: 0;
  color: ${(props) => props.theme["gray-500"]};
`;
