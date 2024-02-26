import styles from './Button.module.css';
import cn from 'classnames';

function Button({ text, onClick }) {
	return <button 
	onClick={onClick}
	className={cn(styles['button'])}>{text}
	</button>;
}

export default Button;
