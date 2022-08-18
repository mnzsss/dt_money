import { RootState } from "../..";

const page = `transactions`;

export const selectTransactions = (state: RootState) =>
  state[page].transactions;
