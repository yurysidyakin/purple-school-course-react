import cn from 'classnames';
import { Layout } from '../../layouts/Menu/Layout';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';

function Header({ User }: HeaderProps) {
	return (
		<div className={cn(styles['header'])}>
			<Logo />
			<Layout User={User} />
		</div>
	);
}

export default Header;
