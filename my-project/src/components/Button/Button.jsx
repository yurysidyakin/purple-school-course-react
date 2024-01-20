import styles from './Button.module.css';
import cn from 'classnames';

function Button({ text }) {
	return <button className={cn(styles['button'])}>{text}</button>;
}

export default Button;
