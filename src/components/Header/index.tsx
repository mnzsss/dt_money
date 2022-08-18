import { HeaderContainer, HeaderContent } from "./styles";

import logo from "../../assets/dt-money.svg";
import { Dialog } from "../Dialog";
import { NewTransactionModal } from "../Modals/NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="DT Money" />

        <Dialog triggerText="Nova Transação" title="Nova Transação">
          <NewTransactionModal />
        </Dialog>
      </HeaderContent>
    </HeaderContainer>
  );
}
