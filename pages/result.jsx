import styles from "../styles/Results.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function Results() {
	const [sessiondata, setSessionData] = useState(undefined);
	const router = useRouter();
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("result"));
		console.log(data);
		if (!data) router.push("/3");
		setSessionData(data);
	}, [router]);
	return (
		<div className={styles.mainContainer}>
			<div className={styles.resultContainer}>
				<h1>Latest Results</h1>
				<div className={styles.resultList}>
					{!sessiondata ? (
						<h2 className={styles.loading}>Loading...</h2>
					) : (
						<>
							<div className={styles.resultItem}>
								<p>Japanese</p>
								<p>English</p>
								<p>Your Answer</p>
							</div>
							{sessiondata.incorrect.data.map((item, index) => (
								<div
									key={index}
									className={styles.resultItem + " " + styles.wrong}
								>
									<p>{item.question}</p>
									<p>{item.answer}</p>
									<p>{item.input}</p>
								</div>
							))}
							{sessiondata.correct.data.map((item, index) => (
								<div key={index} className={styles.resultItem}>
									<p>{item.question}</p>
									<p>{item.answer}</p>
									<p>{item.input}</p>
								</div>
							))}
						</>
					)}
				</div>
			</div>
		</div>
	);
}
