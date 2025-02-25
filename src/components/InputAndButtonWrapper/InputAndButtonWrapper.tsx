import cn from 'classnames';
import styles from './InputAndButtonWrapper.module.css';
import { InputAndButtonWrapperProps } from './InputandButtonWrapperProps';

function InputAndButtonWrapper({ children }: InputAndButtonWrapperProps) {
	return (
		<div className={cn(styles['input-and-button-wrapper'])}>{children}</div>
	);
}

export default InputAndButtonWrapper;
