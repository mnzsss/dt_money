import styled, { css } from "styled-components";
import { ThemeType } from "../../@types/styled";

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

interface PriceHighlightProps {
  variant?: "income" | "outcome";
}

const variantColor: Record<string, keyof ThemeType> = {
  income: "green-300",
  outcome: "red-300",
};

export const PriceHighlight = styled.td<PriceHighlightProps>`
  color: ${(props) => props.theme.white};

  ${(props) =>
    props.variant &&
    css`
      color: ${props.theme[variantColor[props.variant]]};
    `};
`;
