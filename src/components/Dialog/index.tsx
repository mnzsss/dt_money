import * as RadixDialog from "@radix-ui/react-dialog";
import { DialogTrigger } from "./styles";

interface DialogProps {
  triggerText: string;
  title: string;
  description?: string;
}

export function Dialog({ triggerText, title, description }: DialogProps) {
  return (
    <RadixDialog.Root>
      {/* Trigger button */}
      <DialogTrigger>{triggerText}</DialogTrigger>

      <RadixDialog.Portal>
        {/* Overlay */}
        <RadixDialog.Overlay />

        {/* Dialog Content */}
        <RadixDialog.Content>
          {/* Content Title */}
          <RadixDialog.Title>{title}</RadixDialog.Title>

          {/* Close button */}
          <RadixDialog.Close />

          {/* Content Description */}
          <RadixDialog.Description>{description}</RadixDialog.Description>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
