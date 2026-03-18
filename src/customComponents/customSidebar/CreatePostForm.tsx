import { useState } from 'react';
import { CustomInput, CustomSelect, CustomDate } from '../';


export default function CreatePostForm() {
  const [dateOpen, setDateOpen] = useState(false);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [theme, setTheme] = useState("");
  const [copy, setCopy] = useState("");

  return (
    <section className="flex flex-col gap-4">
      <CustomDate
        open={dateOpen}
        onOpenChange={setDateOpen}
        value={date}
        onChange={setDate}
        label="Data"
        description="Selecione a data de publicação do post"
      />
      <CustomSelect label="Categoria" value={category} onValueChange={setCategory} initialText="Selecione o tipo de post" options={[
        { value: "post", label: "Post" },
        { value: "carrossel", label: "Carrossel" },
        { value: "Reels", label: "Reels" },
      ]} />
      <CustomInput label="Tema" value={theme} onChange={setTheme} placeholder="Digite o tema do post" />
      <CustomInput label="Copy" value={copy} onChange={setCopy} placeholder="Texto do post..." />
    </section>
  )
}