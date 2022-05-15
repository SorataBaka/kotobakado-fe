import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home(props) {
	const questions = props.data;
	const router = useRouter();
	let [answer, setAnswer] = useState("");
	let [question, setQuestion] = useState(
		`${props.id}課のことば. Enterキーを押してください`
	);
	let [questionFinished, setQuestionFinished] = useState(false);
	let [input, setInput] = useState("");
	let [counter, setCounter] = useState(0);
	let [sessiondata, setSessionData] = useState({
		correct: {
			count: 0,
			data: [],
		},
		incorrect: {
			count: 0,
			data: [],
		},
	});
	const handleresult = () => {
		router.push("/result");
	};

	const handleInput = (e) => {
		setInput(e.target.value);
	};
	const handleNextAnswer = () => {
		if (counter === 0) {
			setCounter(counter + 1);
			setAnswer(questions[counter].japanese);
			setQuestion(questions[counter].english);
			setInput("");
			return;
		}
		if (input === answer) {
			setSessionData({
				correct: {
					count: sessiondata.correct.count + 1,
					data: [
						...sessiondata.correct.data,
						{
							question: question,
							answer: answer,
							input: input,
						},
					],
				},
				incorrect: sessiondata.incorrect,
			});
		} else {
			setSessionData({
				correct: sessiondata.correct,
				incorrect: {
					count: sessiondata.incorrect.count + 1,
					data: [
						...sessiondata.incorrect.data,
						{
							question: question,
							answer: answer,
							input: input,
						},
					],
				},
			});
		}
		setCounter(counter + 1);
		if (counter < questions.length) {
			setAnswer(questions[counter].japanese);
			setQuestion(questions[counter].english);
			setInput("");
		} else {
			setQuestionFinished(true);
			const writedata = {
				correct: {
					count: sessiondata.correct.count,
					data: sessiondata.correct.data.slice(1),
				},
				incorrect: {
					count: sessiondata.incorrect.count,
					data: sessiondata.incorrect.data,
				},
			};
			localStorage.setItem("result", JSON.stringify(writedata));
		}
	};

	useEffect(() => {
		window.onkeydown = (e) => {
			//If press enter
			if (e.keyCode === 13) handleNextAnswer();
		};
	});
	if (!questions) {
		return (
			<div className={styles.mainContainer}>
				<h2>Not Found.</h2>
			</div>
		);
	}
	return (
		<div className={styles.mainContainer}>
			{questionFinished ? (
				<div className={styles.questionBox}>
					<h1 className={styles.resultTitle}>Result</h1>
					<h5>Correct: {sessiondata.correct.count}</h5>
					<h5>Wrong: {sessiondata.incorrect.count}</h5>
					<button
						className={"btn btn-primary" + " " + styles.button}
						onClick={handleresult}
					>
						Click here for your answers
					</button>
				</div>
			) : (
				<div className={styles.questionBox}>
					<h3 className={styles.questionNumber}>
						{sessiondata.correct.count + sessiondata.incorrect.count + 1}/
						{questions.length}
					</h3>
					<h1 className={styles.questionText}>{question}</h1>
					<input
						type="text"
						onChange={handleInput}
						autoFocus
						placeholder="Answer"
						value={input}
					/>
				</div>
			)}
		</div>
	);
}

export async function getServerSideProps(context) {
	const id = context.params.id;
	const req = context.req;

	const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";

	const res = await fetch(`${baseUrl}/api/question/${id}`);
	const data = await res.json();
	return {
		props: {
			data: data.data,
			id: id,
		},
	};
}
