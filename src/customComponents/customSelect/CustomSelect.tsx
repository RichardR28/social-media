import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CustomField } from "../";
import type React from "react";

type CustomSelectProps = React.ComponentPropsWithoutRef<typeof Select> & {
  id?: string;
  label?: string;
  description?: string;
  placeholder?: string;
  initialText: string;
  invalid?: boolean;
  errorMessage?: string;
  options: { value: string; label: string }[];
  onChange?: (value: string) => void;
};

export default function CustomSelect({ id, label, description, placeholder, initialText, invalid, errorMessage, options, onChange, ...props }: CustomSelectProps) {
  const randomId = `field-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <CustomField label={label} description={description} id={id || randomId} errorMessage={invalid && errorMessage || "Campo Inválido"}>
      <Select {...props} onValueChange={onChange}>
        <SelectTrigger aria-invalid={invalid} className="w-full">
          <SelectValue placeholder={placeholder || "Selecione uma opção"} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{initialText}</SelectLabel>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </CustomField>
  );
}