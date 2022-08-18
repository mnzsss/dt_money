import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import { RadioGroup } from "../../RadioGroup";
import { Radio } from "../../RadioGroup/Radio";
import { Button } from "../../_common/Button";
import { Input } from "../../_common/Input";
import { Container } from "./styles";

export function NewTransactionModal() {
  return (
    <Container>
      <Input type="text" placeholder="Descrição" required />

      <Input type="number" placeholder="Preço" required />

      <Input type="text" placeholder="Categoria" required />

      <RadioGroup>
        <Radio operation="income" value="income">
          <ArrowCircleUp size={24} />
          Entrada
        </Radio>

        <Radio operation="outcome" value="outcome">
          <ArrowCircleDown size={24} />
          Saída
        </Radio>
      </RadioGroup>

      <Button size="medium" type="submit">
        Cadastrar
      </Button>
    </Container>
  );
}
