/* eslint-disable react/prop-types */

const InputField = ({ label, name, placeholder, value, onChange }) => {
  const renderLabel = () => {
    return (
      <label htmlFor={name}>{label}</label>
    );
  };

  const renderInput = () => {
    return (
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  };

  return (
    <div>
      {renderLabel()}
      {renderInput()}
    </div>
  );
};

export default InputField;