import { useState } from 'react';
import { CustomInput, CustomSelect, CustomDate, CustomTextArea } from '../';
import { Button } from "@/components/ui/button"


export default function CreatePostForm() {
  const [dateOpen, setDateOpen] = useState(false);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [theme, setTheme] = useState("");
  const [copy, setCopy] = useState("");
  const [notes, setNotes] = useState("");
  const [roadmap, setRoadmap] = useState("");

  function save() {
    console.log({
      date,
      category,
      theme,
      copy,
      notes,
      roadmap,
    })
  }

  return (
    <section className="flex flex-col gap-4">
      <CustomDate
        value={date}
        onChange={setDate}
        label="Data *"
        description="Selecione a data de publicação do post"
      />
      <CustomSelect label="Categoria *" value={category} onValueChange={setCategory} initialText="Selecione o tipo de post" options={[
        { value: "post", label: "Post" },
        { value: "carrossel", label: "Carrossel" },
        { value: "Reels", label: "Reels" },
      ]} />
      <CustomInput label="Tema *" value={theme} onChange={setTheme} placeholder="Digite o tema do post" />
      <CustomTextArea label="Copy" value={copy} onChange={setCopy} placeholder="Texto do post..." />
      <CustomTextArea label="Anotações" value={notes} onChange={setNotes} placeholder="Observações sobre o post..." />
      <CustomTextArea label="Roteiro" value={roadmap} onChange={setRoadmap} placeholder="Defina o roteiro do post..." />
      <Button variant="default" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white hover:text-black overflow-hidden">
        <span className="text-[16px] font-medium" onClick={save}>Criar Post</span>
      </Button>
    </section>
  )
}