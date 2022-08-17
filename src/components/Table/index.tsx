import { PriceHighlight, TableContainer } from "./styles";

export function Table() {
  return (
    <TableContainer>
      <thead>
        <tr>
          <td width="50%">Alimentação</td>
          <PriceHighlight variant="income">R$ 223,40</PriceHighlight>
          <td>Venda</td>
          <td>13/04/2022</td>
        </tr>
        <tr>
          <td width="50%">Hamburger</td>
          <PriceHighlight variant="outcome">- R$ 223,40</PriceHighlight>
          <td>Venda</td>
          <td>13/04/2022</td>
        </tr>
      </thead>
    </TableContainer>
  );
}
