import styles from './Text.module.css';

function Text({ text }) {
	return <p className={styles['text']}>{text}</p>;
}

export default Text;
