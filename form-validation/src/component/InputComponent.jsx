function InputComponent({ type, onChange, name, error }) {
  return (
    <div className="input-holder">
      <label htmlFor={name}>{name}</label>
      <input type={type} id={name} name={name} onChange={onChange} />
      {error && (
        <div className="errorHandling">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default InputComponent;
