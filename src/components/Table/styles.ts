import styled, { css } from "styled-components";
import { transactionTypes } from "../../constants/transaction";
import { TransactionProps } from "../../interfaces/Transaction";

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const PriceHighlight = styled.td<TransactionProps>`
  color: ${(props) => props.theme.white};

  ${(props) =>
    props.operation &&
    css`
      color: ${props.theme[transactionTypes[props.operation]]};
    `};
`;
