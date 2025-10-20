import {useState} from "react";
import RegisterForm from "../components/Auth/RegisterForm.jsx";

export default function HomePage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit", data);
  };

  return <RegisterForm formState={[data, setData]} submit={handleSubmit} />;
}
