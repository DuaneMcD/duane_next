const FormInput = props => {
  return (
    <div>
      <label>{props.label}</label>
      <input placeholder={props.placeholder} type={props.type} />
    </div>
  );
};

export default FormInput;
