import { ChangeEvent, useState } from 'react';
import Button from '../../components/Button/Button';
import InputName from '../../components/InputName/InputName';
import Title from '../../components/Title/Title';

export function Login() {
	const [inputName, setInputName] = useState('');

	const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputName(event.target.value);
	};

	const addName = (event: any) => {
		event.preventDefault();
		localStorage.setItem('name', JSON.stringify(inputName));
	};

	return (
		<>
			<Title>Вход</Title>
			<InputName placeholder='Введите имя' onChange={inputChange} />
			<Button onClick={addName}>Ввойдите в профиль</Button>
		</>
	);
}
