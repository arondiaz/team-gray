import { useEffect, useState, useRef } from 'react';
import styles from './Tile.module.scss';

interface Passenger {
	_id: string;
	name: string;
	trips: number;
	profileImageUrl: string;
}

const PAGE_NUMBER = 1;

function TileApp(): JSX.Element {
	const [state, setState] = useState<any[]>([]);
	const [page, setPage] = useState<number>(PAGE_NUMBER);
	const marcoRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=8`)
			.then((res) => res.json())
			.then((json) => setState((prevState) => [...prevState, ...json.data]));
	}, [page]);

	const scrollToEnd = () => {
		setPage((prevPage) => prevPage + 1);
	};

	const handleScroll = () => {
		const marco = marcoRef.current;
		if (
			marco &&
			marco.scrollTop + marco.clientHeight >= marco.scrollHeight - 20
		) {
			scrollToEnd();
		}
	};

	useEffect(() => {
		const marco = marcoRef.current;
		if (marco) {
			marco.addEventListener('scroll', handleScroll);
			return () => {
				marco.removeEventListener('scroll', handleScroll);
			};
		}
	}, []);

	return (
		<div className={styles.backgroundContainer}>
			<div className={styles.box}>
				<div className={styles.cardContainer} ref={marcoRef}>
					{state.length > 0 &&
						state.map((el: Passenger, i: number) => (
							<div className={styles.styleCard} key={i}>
								<img
									className={styles.styleImageProfile}
									src='https://miraclelab.com.ar/assets/miracle-box.svg'
									alt='Profile Image'
								/>
								<div>
									<p>Id: {el._id}</p>
									<p>Name: {el.name}</p>
									<p>Trips: {el.trips}</p>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

export default TileApp;
