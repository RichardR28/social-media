import axios from "axios";

type UserProps = {
  name: string,
  cpf: string,
  birthDate: string,
  email: string,
  password: string,
}

type LoginProps = {
  email: string,
  password: string
}

function convertDate(date: string) {
  const [day, month, year] = date.split("/");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export const UserAction = {
  async CreateUser(data: UserProps, callback: () => void) {
    try {
      const result = await axios.post('http://127.0.0.1:8000/api/users', {
        ...data,
        role_id: 0,
        senha: data.password,
        data_nascimento: convertDate(data.birthDate),
      });

      callback();
      return { data: result.data, error: null };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          data: null,
          error: error.response?.data?.message ?? error.message,
        };
      }
      return {
        data: null,
        error: error instanceof Error ? error.message : "Erro desconhecido",
      };
    }
  },


  async Login(data: LoginProps, callback: () => void) {
    try {
      const result = await axios.post('http://127.0.0.1:8000/api/login', {
        ...data,
        senha: data.password
      })
      callback();
      return { data: result.data, error: null };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          data: null,
          error: error.response?.data?.message ?? error.message,
        };
      }
      return {
        data: null,
        error: error instanceof Error ? error.message : "Erro desconhecido",
      };
    }
  }
}
