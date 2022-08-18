import * as RadixDialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { PropsWithChildren } from "react";
import { Button } from "../_common/Button";
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "./styles";

interface DialogProps {
  triggerText: string;
  title: string;
  description?: string;
}

export function Dialog({
  triggerText,
  title,
  description,
  children,
}: PropsWithChildren<DialogProps>) {
  return (
    <RadixDialog.Root>
      {/* Trigger button */}
      <Button as={RadixDialog.DialogTrigger}>{triggerText}</Button>

      <RadixDialog.Portal>
        {/* Overlay */}
        <DialogOverlay />

        {/* Dialog Content */}
        <DialogContent>
          {/* Close button */}
          <DialogClose>
            <X size={24} />
          </DialogClose>

          {/* Content Title */}
          <DialogTitle>{title}</DialogTitle>

          {/* Content Description */}
          <RadixDialog.Description>{description}</RadixDialog.Description>

          {children}
        </DialogContent>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
