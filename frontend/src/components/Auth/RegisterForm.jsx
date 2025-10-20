export default function RegisterForm({formState, errors = {}, submit}) {
  const [data, setData] = formState;

  return (
    <form onSubmit={submit}>
      <div className="form-group">
        <label htmlFor="name">Имя</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={(e) => setData({...data, name: e.target.value})}
          required
        />
        {errors.name && <div className="error-message">{errors.name}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={(e) => setData({...data, email: e.target.value})}
          required
        />
        {errors.email && <div className="error-message">{errors.email}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Пароль</label>
        <input
          type="text"
          name="password"
          value={data.password}
          onChange={(e) => setData({...data, password: e.target.value})}
          required
        />
        {errors.password && (
          <div className="error-message">{errors.password}</div>
        )}
      </div>

      <button className="btn--primary">Отправить</button>
    </form>
  );
}
