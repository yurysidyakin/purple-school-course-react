import './CardItem.css';

function CardItem({ image, status, title, rating }) {
	return (
		<div className='card-item'>
			<div className='card-item__header'>
				<img src={image} alt='image' className='card-item__image' />
				<img src={rating} className='card-item__status-img'></img>
			</div>
			<div className='card-item__description'>
				<p className='card-item__title'>{title}</p>
				<div className='card-item__status'>
					<img src='../../../public/like.svg' alt='like' />
					<div className='card-item__status-text'>{status}</div>
				</div>
			</div>
		</div>
	);
}

export default CardItem;
