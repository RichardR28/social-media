import { CustomField } from "../";
import { Input } from "@/components/ui/input"

type CustomInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  description?: string;
  invalid?: boolean;
  errorMessage?: string;
  onChange?: (value: string) => void;
};

export default function CustomInput({ id, label, description, type, placeholder, invalid, errorMessage, ...props }: CustomInputProps) {
  const randomId = `field-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <CustomField label={label} description={description} id={id || randomId} errorMessage={invalid && errorMessage || "Campo Inválido"}>
      <Input
        id={id || randomId}
        type={type}
        placeholder={placeholder}
        aria-invalid={invalid}
        {...props}
      />
    </CustomField>
  );
}