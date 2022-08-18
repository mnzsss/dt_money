import { HeaderContainer, HeaderContent } from "./styles";

import logo from "../../assets/dt-money.svg";
import { Dialog } from "../Dialog";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="DT Money" />

        <Dialog triggerText="Nova Transação" title="Nova Transação" />
      </HeaderContent>
    </HeaderContainer>
  );
}
