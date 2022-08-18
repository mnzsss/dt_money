import { createModel } from "@rematch/core";
import { RootModel } from "..";
import { Transaction } from "../../../interfaces/Transaction";
import { api } from "../../../services/api";

interface TransactionsState {
  transactions: Array<Transaction>;
}
export const transactions = createModel<RootModel>()({
  state: {
    transactions: [],
  } as TransactionsState,
  reducers: {
    setTransactions(state, payload: Transaction[]) {
      state.transactions = payload;
    },
  },
  effects: (dispatch) => ({
    async getTransactions() {
      const { data: transactions } = await api.get<Transaction[]>(
        "/transactions"
      );

      dispatch.transactions.setTransactions(transactions);
    },
  }),
});
