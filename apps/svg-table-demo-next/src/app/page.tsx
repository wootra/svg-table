import Image from 'next/image';
import styles from './page.module.css';
import App from '@/components/App';

export default function Home() {
	return (
		<main className={styles.main}>
			<App />
		</main>
	);
}
