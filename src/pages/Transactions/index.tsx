import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Table } from "../../components/Table";
import { TransactionsContainer } from "./styles";
import { Dispatch } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectTransactions } from "../../store/models/transactions/transactions.selectors";

export function TransactionsPage() {
  const transactions = useSelector(selectTransactions);

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.transactions.getTransactions();
  }, []);

  return (
    <>
      <Header />

      <Summary />

      {transactions ? (
        <TransactionsContainer>
          <Table data={transactions} />
        </TransactionsContainer>
      ) : null}
    </>
  );
}
