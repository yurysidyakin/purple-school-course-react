import styles from './Text.module.css';
import cn from 'classnames';

function Text({ text }) {
	return <p className={cn(styles['text'])}>{text}</p>;
}

export default Text;
