export type Operation = "income" | "outcome";

export type Transaction = {
  id: number;
  description: string;
  amount: number;
  operation: Operation;
  category: string;
  createdAt: string;
};
