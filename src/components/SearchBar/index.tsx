import { SearchBarContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import { Input } from "../_common/Input";

export function SearchBar() {
  return (
    <SearchBarContainer>
      <Input type="text" placeholder="Busque por transações..." />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchBarContainer>
  );
}
