import classNames from "classnames";

interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  className?: string;
  required?: boolean,
}

const Input = ({
  name,
  type,
  placeholder,
  value,
  className, required
}: InputProps) => {
  return (
    <input
      className={classNames(className, "w-full p-2 border-gray-200 border")}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      required = {required}
    />
  );
};

export default Input;
