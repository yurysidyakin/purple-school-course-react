import cn from 'classnames';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

function Button({ children, onClick }: ButtonProps) {
	return (
		<button onClick={onClick} className={cn(styles['button'])}>
			{children}
		</button>
	);
}

export default Button;
