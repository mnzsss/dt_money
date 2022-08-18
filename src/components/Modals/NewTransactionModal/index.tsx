import { Button } from "../../_common/Button";
import { Input } from "../../_common/Input";
import { Container } from "./styles";

export function NewTransactionModal() {
  return (
    <Container>
      <Input type="text" placeholder="Descrição" required />

      <Input type="number" placeholder="Preço" required />

      <Input type="text" placeholder="Categoria" required />

      <Button size="medium" type="submit">
        Cadastrar
      </Button>
    </Container>
  );
}
