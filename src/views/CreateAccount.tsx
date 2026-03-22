import { useNavigate } from "react-router";
import { CustomDate, CustomInput, CustomCard, CustomButton } from "@/customComponents";
import { useState } from "react";
import { UserAction } from "@/actions";

function validarSenha(senha: string): string {
  const erros: string[] = [];

  if (senha.length < 8) {
    erros.push("Adicione pelo menos 8 caracteres.");
  }
  if (!/[0-9]/.test(senha)) {
    erros.push("Adicione pelo menos um número.");
  }
  if (!/[!@#$%^&*(),.?":{}|<>_\-+=\[\]\\/;'`~]/.test(senha)) {
    erros.push("Adicione um caractere especial.");
  }
  if (!/[A-Z]/.test(senha)) {
    erros.push("Adicione uma letra maiúscula.");
  }
  if (!/[a-z]/.test(senha)) {
    erros.push("Adicione uma letra minúscula.");
  }

  return erros.join("\n");
}

export default function CreateAccount() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [isValidPasswords, setIsValidPasswords] = useState(true);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("")

  const { CreateUser } = UserAction;


  async function Create() {
    const data = { name, cpf, birthDate, email, password };
    await CreateUser(data, () => navigate("/login"));
  }

  function ValidatePasswordConfirmation() {
    setIsValidPasswords(password === confirmationPassword);
  }

  function HandlePasswordChange(value: string) {
    setPassword(value);
    setPasswordErrorMessage(validarSenha(value));
  }

  return (
    <main className="flex justify-center align-center items-center h-full">
      <CustomCard title="Crie sua Conta" description="Insira as informações abaixo para prosseguir com a criação de sua conta.">
        <div className="flex flex-col gap-4">
          <CustomInput label="Nome Completo" placeholder="Insira seu nome..." value={name} onChange={setName} />
          <CustomInput label="Cpf" placeholder="Insira seu cpf..." value={cpf} onChange={setCpf} />
          <CustomDate label="Data de nascimento" value={birthDate} onChange={setBirthDate} />
          <CustomInput label="Email" type="email" placeholder="Insira seu email..." value={email} onChange={setEmail} />
          <CustomInput
            label="Senha"
            description={!passwordErrorMessage ? "A senha deve conter um número, um carácter especial, uma letra maiúscula e uma letra minúscula e ter pelo menos 8 caracteres." : ""}
            type="password"
            placeholder="Insira sua senha..."
            value={password}
            onBlur={ValidatePasswordConfirmation}
            onChange={HandlePasswordChange}
            invalid={!!passwordErrorMessage}
            errorMessage={passwordErrorMessage}
          />
          <CustomInput
            label="Confirmar Senha"
            type="password"
            placeholder="Confirme sua senha..."
            value={confirmationPassword}
            invalid={!isValidPasswords && !!confirmationPassword}
            errorMessage="As senhas não coincidem"
            onBlur={ValidatePasswordConfirmation}
            onChange={setConfirmationPassword}
          />
          <CustomButton label="Logar" onClick={Create} />
        </div>
      </CustomCard>
    </main>
  )
}