import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type ModalProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  openTrigger: React.ReactNode;
}

export default function Modal({ title, description, openTrigger, children }: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {openTrigger}
      </DialogTrigger>
      <DialogContent onOpenAutoFocus={e => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>
          <DialogClose>Cancel</DialogClose>
          <DialogClose className="bg-red-500 text-white">Continue</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}