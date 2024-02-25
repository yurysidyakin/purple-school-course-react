import cn from 'classnames';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

import styles from './Header.module.css';

function Header({ nameUser }) {
	return (
		<div className={cn(styles['header'])}>
			<Logo />
			<Menu nameUser={nameUser} />
		</div>
	);
}

export default Header;
