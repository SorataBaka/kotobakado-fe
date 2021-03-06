import styles from "../styles/Index.module.css";
import { useRouter } from "next/router";
export default function Index() {
	const router = useRouter();
	const handleClick = (id) => {
		router.push("/" + id);
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.whiteBox}>
				<h1>Welcome!</h1>
				<p>As of now, there is no default index page to this website.</p>
				<p>
					Please visit the available kotoba flashcards from one of the buttons
					below
				</p>
				<div className={styles.buttonRow}>
					<button
						className={"btn btn-primary" + " " + styles.button}
						onClick={() => {
							handleClick("3");
						}}
					>
						３課
					</button>
					<button
						className={"btn btn-primary" + " " + styles.button}
						onClick={() => {
							handleClick("4");
						}}
					>
						４課
					</button>
					<button
						className={"btn btn-primary" + " " + styles.button}
						onClick={() => {
							handleClick("5");
						}}
					>
						５課
					</button>
				</div>
				<div className={styles.buttonRow}>
					<button
						className={"btn btn-primary" + " " + styles.button}
						onClick={() => {
							handleClick("6");
						}}
					>
						6 課
					</button>
					<button
						className={"btn btn-primary" + " " + styles.button}
						onClick={() => {
							handleClick("10");
						}}
					>
						10 課
					</button>
					<button
						className={"btn btn-primary" + " " + styles.button}
						onClick={() => {
							handleClick("11");
						}}
					>
						11 課
					</button>
				</div>
				<div className={styles.buttonRow}>
					<button
						className={"btn btn-primary" + " " + styles.button}
						onClick={() => {
							handleClick("12");
						}}
					>
						12 課
					</button>
					<button
						className={"btn btn-primary" + " " + styles.button}
						onClick={() => {
							handleClick("13");
						}}
					>
						13 課
					</button>
					<button
						className={"btn btn-primary" + " " + styles.button}
						onClick={() => {
							handleClick("14");
						}}
					>
						14 課
					</button>
				</div>
				<div className={styles.buttonRow}>
					<button
						className={"btn btn-primary" + " " + styles.button}
						onClick={() => {
							handleClick("15");
						}}
					>
						15 課
					</button>
					<button
						className={"btn btn-primary" + " " + styles.button}
						onClick={() => {
							handleClick("16");
						}}
					>
						16 課
					</button>
					<button
						className={"btn btn-primary" + " " + styles.button}
						onClick={() => {
							handleClick("17");
						}}
					>
						17 課
					</button>
				</div>
				<div className={styles.buttonRow}>
					<button
						className={"btn btn-primary" + " " + styles.button}
						onClick={() => {
							handleClick("18");
						}}
					>
						18 課
					</button>
					<button
						className={"btn btn-primary" + " " + styles.button}
						onClick={() => {
							handleClick("20");
						}}
					>
						20 課
					</button>
				</div>
			</div>
		</div>
	);
}
