import FormGroup from "../../form/FormGroup";

export default function LoginForm({formState, errors, submit}) {
  const [data, setData] = formState;

  return (
    <form onSubmit={submit}>
      <FormGroup
        type="email"
        name="email"
        label="Имя"
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

      <button className="btn--primary">Войти</button>
    </form>
  );
}
