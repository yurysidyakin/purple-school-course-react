import cn from 'classnames';
import styles from './InputAndButtonWrapper.module.css';

function InputAndButtonWrapper({ children }) {
	return (
		<div className={cn(styles['input-and-button-wrapper'])}>{children}</div>
	);
}

export default InputAndButtonWrapper;
