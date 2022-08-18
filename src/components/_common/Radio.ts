import styled from "styled-components";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";

import { transactionTypes } from "../../constants/transaction";
import { TransactionProps } from "../../interfaces/Transaction";

export const Radio = styled(RadixRadioGroup.Item)<TransactionProps>`
  background-color: ${(props) => props.theme["gray-700"]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme["gray-300"]};

  svg {
    color: ${(props) =>
      props.operation && props.theme[transactionTypes[props.operation]]};
  }

  &[data-state="unchecked"]:hover {
    background-color: ${(props) => props.theme["gray-600"]};
    transition: background-color 0.2s;
  }

  &[data-state="checked"] {
    color: ${(props) => props.theme["white"]};
    background-color: ${(props) =>
      props.operation && props.theme[transactionTypes[props.operation]]};

    svg {
      color: ${(props) => props.theme["white"]};
    }
  }
`;
