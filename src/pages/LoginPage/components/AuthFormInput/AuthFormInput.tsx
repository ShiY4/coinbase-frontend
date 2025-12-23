import styles from './authFormInput.module.scss';

interface IAuthFormInput {
  labelText: string;
  formName: string;
  inputId: string;
  inputType?: React.HTMLInputTypeAttribute;
}

export function AuthFormInput({ labelText, formName, inputId, inputType }: IAuthFormInput) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={inputId} form={formName}>
        {labelText}
      </label>
      <input type={inputType ?? 'text'} id={inputId} form={formName} />
    </div>
  );
}
