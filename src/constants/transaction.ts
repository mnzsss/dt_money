import { ThemeType } from "../@types/styled";

export const transactionTypes: Record<string, keyof ThemeType> = {
  income: "green-500",
  outcome: "red-500",
};
