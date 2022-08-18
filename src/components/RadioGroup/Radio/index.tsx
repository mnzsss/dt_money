import { PropsWithChildren } from "react";
import { TransactionProps } from "../../../interfaces/Transaction";
import { RadioContainer } from "./styles";

interface RadioProps extends TransactionProps {
  value: string;
}

export function Radio({ children, ...rest }: PropsWithChildren<RadioProps>) {
  return <RadioContainer {...rest}>{children}</RadioContainer>;
}
