import './Button.css';

function Button({ text }) {
	return (
		<button className='button' onClick={() => console.log('Нажали на поиск')}>
			{text}
		</button>
	);
}

export default Button;
