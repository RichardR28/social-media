import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <button className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white" onClick={() => navigate("/login")}>Login</button>
  )
}
