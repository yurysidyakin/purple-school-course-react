import cn from 'classnames';
import styles from './Logo.module.css';

function Logo() {
	return <img src='./logo.svg' alt='logo' className={cn(styles['logo'])} />;
}

export default Logo;
