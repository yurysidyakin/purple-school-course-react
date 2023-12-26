import { useState } from 'react';
import './InputSearch.css';

function InputSearch() {
	const [inputData, setInputData] = useState('');

	const inputChange = event => {
		console.log(inputData);
		setInputData(event.target.value);
	};

	return (
		<input
			onChange={inputChange}
			type='text'
			className='input-search'
			placeholder='Введите название'
			value={inputData}
		/>
	);
}

export default InputSearch;
