import styled from "styled-components";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";

export const RadioGroup = styled(RadixRadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
`;
