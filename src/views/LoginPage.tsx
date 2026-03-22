import { useNavigate } from "react-router";
import { CustomInput, CustomCard, CustomButton } from "@/customComponents";
import { useState } from "react";
import { UserAction } from "@/actions";

const { Login } = UserAction;

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function SendLogin() {
    console.log("login");
    const data = { email, password };
    await Login(data, () => navigate("/home"));
  }

  return (
    <main className="flex justify-center align-center items-center h-full">
      <CustomCard title="Faça login na sua conta" description="Insira seu e-mail e senha abaixo para acessar sua conta.">
        <div className="flex flex-col gap-4">
          <CustomInput label="Email" type="email" placeholder="Insira seu email..." value={email} onChange={setEmail} />
          <CustomInput label="Senha" type="password" placeholder="Insira sua senha..." value={password} onChange={setPassword} />
          <CustomButton label="Logar" onClick={SendLogin} />
        </div>
      </CustomCard>
    </main>
  )
}