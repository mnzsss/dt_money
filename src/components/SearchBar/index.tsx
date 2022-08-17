import { SearchBarContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";

export function SearchBar() {
  return (
    <SearchBarContainer>
      <input type="text" placeholder="Busque por transações..." />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchBarContainer>
  );
}
