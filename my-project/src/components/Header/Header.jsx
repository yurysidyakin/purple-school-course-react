import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

import './Header.css';

function Header() {
	return (
		<div className='header'>
			<Logo />
			<Menu />
		</div>
	);
}

export default Header;
