import Button from '../../components/Button/Button';
import InputName from '../../components/InputName/InputName';
import Title from '../../components/Title/Title';

export function Login() {
	return (
		<>
			<Title>Вход</Title>
			<InputName placeholder='Введите имя' />
			<Button>Ввойдите в профиль</Button>
		</>
	);
}
