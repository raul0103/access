import {useState} from "react";
import LoginForm from "../../components/pages/auth/LoginForm.jsx";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit", data);
  };

  return (
    <LoginForm
      formState={[data, setData]}
      errors={errors}
      submit={handleSubmit}
    />
  );
}
