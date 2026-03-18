import { Field, FieldDescription, FieldLabel, FieldError } from "@/components/ui/field"

type CustomFieldProps = {
  label?: string;
  description?: string;
  id?: string;
  errorMessage?: string;
  children?: React.ReactNode;
};

export default function CustomField({ label, description, id, errorMessage, children }: CustomFieldProps) {
  return (
    <Field className="flex gap-1">
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      {children}
      {description && <FieldDescription>{description}</FieldDescription>}
      {errorMessage && <FieldError>{errorMessage}</FieldError>}
    </Field>
  );
}