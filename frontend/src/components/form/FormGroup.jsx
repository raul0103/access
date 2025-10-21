export default function FormGroup({
  type,
  name,
  label,
  value,
  error,
  handleChange,
  required,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className={error && "error"}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        required={required}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
