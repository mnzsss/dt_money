import { Models } from "@rematch/core";
import { transactions } from "./transactions/transactions.model";
export interface RootModel extends Models<RootModel> {
  transactions: typeof transactions;
}
export const models: RootModel = { transactions };
