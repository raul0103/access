import {useState} from "react";
import RegisterForm from "../../components/pages/auth/RegisterForm.jsx";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirm: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length) {
      alert("Исправьте ошибки в форме");
      return;
    }

    console.log("submit", data);
  };

  return (
    <RegisterForm
      formState={[data, setData]}
      errorsState={[errors, setErrors]}
      submit={handleSubmit}
    />
  );
}
