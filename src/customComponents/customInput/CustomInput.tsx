import { CustomField } from "..";
import { Input } from "@/components/ui/input"

type CustomInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  label?: string;
  description?: string;
  onChange: (value: string) => void;
  invalid?: boolean;
  errorMessage?: string;
};

export default function CustomInput({ id, label, description, type, placeholder, invalid, errorMessage, onChange, ...props }: CustomInputProps) {
  const randomId = `field-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <CustomField label={label} description={description} id={id || randomId} errorMessage={invalid ? (errorMessage || "Campo Inválido") : undefined}>
      <Input
        id={id || randomId}
        type={type}
        placeholder={placeholder}
        aria-invalid={invalid}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
    </CustomField>
  );
}