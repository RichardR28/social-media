import { Button } from "@/components/ui/button";

type CustomButtonProps = Omit<React.ComponentPropsWithoutRef<typeof Button>, "children"> & {
  label: string,
}

export default function CustomButton({ label, ...props }: CustomButtonProps) {
  return (
    <Button className={props.className || "bg-orange-500 hover:bg-orange-600 text-white hover:text-black cursor-pointer font-bold text-md"} {...props}>{label}</Button>
  )
}