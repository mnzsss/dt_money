import { SearchBar } from "../SearchBar";
import { PriceHighlight, TableContainer } from "./styles";

interface TableProps {
  data: any[];
}

export function Table({ data }: TableProps) {
  return (
    <>
      <SearchBar />

      <TableContainer>
        <thead>
          {data.map((item) => (
            <tr key={item.id}>
              <td width="50%">{item.description}</td>
              <PriceHighlight operation={item.operation}>
                {item.amount}
              </PriceHighlight>
              <td>{item.category}</td>
              <td>{item.createdAt}</td>
            </tr>
          ))}
        </thead>
      </TableContainer>
    </>
  );
}
