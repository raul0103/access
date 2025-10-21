import {useEffect} from "react";
import FormGroup from "../../form/FormGroup";

export default function RegisterForm({formState, errorsState, submit}) {
  const [data, setData] = formState;
  const [errors, setErrors] = errorsState;

  useEffect(() => {
    if (
      data.password &&
      data.password_confirm &&
      data.password !== data.password_confirm
    ) {
      setErrors({...errors, password_confirm: "Пароли не совпадают"});
    } else {
      const {password_confirm, ...rest} = errors;
      setErrors(rest);
    }
  }, [data.password, data.password_confirm]);

  return (
    <form onSubmit={submit}>
      <FormGroup
        type="text"
        name="name"
        label="Имя"
        value={data.name}
        error={errors.name}
        handleChange={(e) => setData({...data, name: e.target.value})}
        required={true}
      />

      <FormGroup
        type="email"
        name="email"
        label="E-mail"
        value={data.email}
        error={errors.email}
        handleChange={(e) => setData({...data, email: e.target.value})}
        required={true}
      />

      <FormGroup
        type="password"
        name="password"
        label="Пароль"
        value={data.password}
        error={errors.password}
        handleChange={(e) => setData({...data, password: e.target.value})}
        required={true}
      />

      <FormGroup
        type="password"
        name="password_confirm"
        label="Подтверждение пароля"
        value={data.password_confirm}
        error={errors.password_confirm}
        handleChange={(e) =>
          setData({...data, password_confirm: e.target.value})
        }
        required={true}
      />
      <button className="btn--primary">Отправить</button>
    </form>
  );
}
