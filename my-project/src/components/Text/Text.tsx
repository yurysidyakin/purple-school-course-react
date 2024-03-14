import cn from 'classnames';
import styles from './Text.module.css';
import { TextProps } from './TextProps';

function Text({ children }: TextProps) {
	return <p className={cn(styles['text'])}>{children}</p>;
}

export default Text;
