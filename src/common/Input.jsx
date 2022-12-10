export default function Input(props) {
  const { label = undefined, validate } = props;

  return (
    <>
      {label && (
        <label htmlFor={label} className="form-label">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`form-control ${validate.e && validate.t ? 'input-error' : ''}`}
        id={label}
        autoComplete="of"
      />
      {validate.e && validate.t && <p className="input-msg">{validate.e}</p>}
    </>
  );
}
