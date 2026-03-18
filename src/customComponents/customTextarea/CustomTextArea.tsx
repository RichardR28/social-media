import { CustomField } from "../";
import { Textarea } from "@/components/ui/textarea"

type CustomTextAreaProps = {
  label: string;
  description?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export default function CustomTextArea({ label, description, value, placeholder, onChange }: CustomTextAreaProps) {
  return (
    <CustomField
      label={label}
      description={description}
    >
      <Textarea value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </CustomField>
  );
}