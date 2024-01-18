import styles from './InputAndButtonWrapper.module.css';

function InputAndButtonWrapper({ children }) {
	return <div className={styles['input-and-button-wrapper']}>{children}</div>;
}

export default InputAndButtonWrapper;
