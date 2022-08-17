import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Table } from "../../components/Table";
import { TransactionsContainer } from "./styles";

export function TransactionsPage() {
  return (
    <>
      <Header />

      <Summary />

      <TransactionsContainer>
        <Table />
      </TransactionsContainer>
    </>
  );
}
