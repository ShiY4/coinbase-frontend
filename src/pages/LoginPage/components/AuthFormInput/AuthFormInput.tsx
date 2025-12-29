import styles from './authFormInput.module.scss';

interface IAuthFormInput {
  labelText: string;
  formName: string;
  inputId: string;
  inputType?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function AuthFormInput({ labelText, formName, inputId, inputType, placeholder, value, onChange }: IAuthFormInput) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={inputId} form={formName}>
        {labelText}
      </label>
      <input type={inputType ?? 'text'} id={inputId} form={formName} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}
