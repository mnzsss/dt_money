import { SearchBar } from "../SearchBar";
import { PriceHighlight, TableContainer } from "./styles";

export function Table() {
  return (
    <>
      <SearchBar />

      <TableContainer>
        <thead>
          <tr>
            <td width="50%">Alimentação</td>
            <PriceHighlight operation="income">R$ 223,40</PriceHighlight>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td width="50%">Hamburger</td>
            <PriceHighlight operation="outcome">- R$ 223,40</PriceHighlight>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
        </thead>
      </TableContainer>
    </>
  );
}
