import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSurveyByIndex } from "../utils/surveyStorage";
import createAnswerRevealer from "../utils/answerRevealer";
import useKeyboardNavigation from "../utils/useKeyboardNavigation";
import { showWrongOverlay, showWaitOverlay } from "../utils/overlay";

const MainQuisSurvey = () => {

	const { index } = useParams();
	const survey = getSurveyByIndex(index);
	const navigate = useNavigate();

	const [revealedAnswers, setRevealedAnswers] = useState([]);
	const [activeButton, setActiveButton] = useState(null);
	const [teamRedPoints, setTeamRedPoints] = useState(() => parseInt(localStorage.getItem("teamRedPoints")) || 0);
	const [teamBluePoints, setTeamBluePoints] = useState(() => parseInt(localStorage.getItem("teamBluePoints")) || 0);
	const [addedPoints, setAddedPoints] = useState({});

	const [isRKeyPressed, setIsRKeyPressed] = useState(false);
	const revealTimeoutRef = useRef(null);

	useEffect(() => {
		const { handleKeyDown, handleKeyUp } = createAnswerRevealer(setRevealedAnswers, setActiveButton);
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, []);

	useEffect(() => {
		localStorage.setItem("teamRedPoints", teamRedPoints);
		localStorage.setItem("teamBluePoints", teamBluePoints);
	}, [teamRedPoints, teamBluePoints]);

	const handleHoldStart = (key) => {
		if (!revealedAnswers.length) return;
		const lastRevealedIndex = revealedAnswers[revealedAnswers.length - 1];
		const pointsToAdd = survey.answers[lastRevealedIndex]?.points || 0;

		if (pointsToAdd === 0) return;

		if (key === ",") {
			if (addedPoints[lastRevealedIndex] !== "red") {
				setTeamRedPoints((prev) => (isNaN(prev) ? 0 : prev) + pointsToAdd);
				setTeamBluePoints((prev) => (isNaN(prev) ? 0 : prev) - (addedPoints[lastRevealedIndex] === "blue" ? pointsToAdd : 0));
				setAddedPoints((prev) => ({ ...prev, [lastRevealedIndex]: "red" }));
			}
		} else if (key === ".") {
			if (addedPoints[lastRevealedIndex] !== "blue") {
				setTeamBluePoints((prev) => (isNaN(prev) ? 0 : prev) + pointsToAdd);
				setTeamRedPoints((prev) => (isNaN(prev) ? 0 : prev) - (addedPoints[lastRevealedIndex] === "red" ? pointsToAdd : 0));
				setAddedPoints((prev) => ({ ...prev, [lastRevealedIndex]: "blue" }));
			}
		}
	};

	const [isSKeyPressed, setIsSKeyPressed] = useState(false);
	const timeoutRef = useRef(null);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "," || event.key === ".") {

				let pointEl = null;

				if (event.key === ",") {
					pointEl = window.document.querySelector(".card-78.red");
				}
				if (event.key === ".") {
					pointEl = window.document.querySelector(".card-78.blue");
				}

				if (pointEl) {
					pointEl.classList.add("active");

					setTimeout(() => {
						pointEl.classList.remove("active");
					}, 800);
				}

				handleHoldStart(event.key);
			}

			if (event.key === "s" && !isSKeyPressed) {
				setIsSKeyPressed(true);

				showWaitOverlay();	

			 	timeoutRef.current = setTimeout(()=>{
					showWrongOverlay();
				}, 2500);
			
			}

			if (event.key === "r" && !isRKeyPressed) {
				setIsRKeyPressed(true);
				
				revealTimeoutRef.current = setTimeout(() => {
					const unrevealedAnswers = survey.answers
						.map((_, index) => index)
						.filter(index => !revealedAnswers.includes(index));

					let delay = 0;
					unrevealedAnswers.forEach((index, i) => {
						setTimeout(() => {
							setRevealedAnswers(prev => {
								const newRevealed = [...prev, index];

								// Jika index 0 (jawaban pertama), berikan kelas `top-survey`
								if (index === 0) {
									const firstAnswerEl = document.querySelector(".list-card.card-78");
									if (firstAnswerEl) {
										firstAnswerEl.classList.add("top-survey");
									}
								}

								return newRevealed;
							});
						}, delay);

						delay += 1200;
					});
				}, 2500);
			}
		};

		const handleKeyUp = (event) => {
			if (event.key === "s") {
				setIsSKeyPressed(false); // Reset ketika tombol dilepas
			}
			clearTimeout(timeoutRef.current);

			// reset jika tombol 'r' dilepas sebelum 2,5 detik
			if (event.key === "r") {
				setIsRKeyPressed(false);
				clearTimeout(revealTimeoutRef.current);
			}
		};
	
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
	
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [revealedAnswers, addedPoints, isSKeyPressed]);

	useKeyboardNavigation({
		"Backspace": "/list-card-survey"
	})

	if (!survey) {
		return <p>Survey tidak ditemukan</p>
	}

	return (
		<>
			<div className="text-center">
				<h2 className="mb-2">Main Quis Survey</h2>
				<div className="card text-white bg-primary mb-3 px-3 py-2 card-78">
					<div className="card-body">
						<h2 className="card-questions mt-3">{survey.question}</h2>
					</div>
				</div>
			</div>
			<div className="container my-1">
				<div className="row">
					<div className="col-md-6">
						{survey.answers.slice(0, 5).map((item, index) => (
							<div className="list-item" key={index}>
								<div className={`list-card card-78 ${index === 0 && revealedAnswers.includes(index) ? "top-survey" : ""} ${revealedAnswers.includes(index) && index !== 0 ? "active" : ""}`}>
									<div>{index + 1}.</div>
									{revealedAnswers.includes(index) && (
										<>
											<div className="answer">{item.answer}</div>
											<div className="number-circle">{item.points}</div>
										</>
									)}
								</div>
							</div>
						))}
					</div>
					<div className="col-md-6">
						{survey.answers.slice(5, 10).map((item, index) => (
							<div className="list-item" key={index + 5}>
								<div className={`list-card card-78 ${revealedAnswers.includes(index + 5) ? "active" : ""}`}>
									<div>{index + 6}.</div>
									{revealedAnswers.includes(index + 5) && (
										<>
											<div className="answer">{item.answer}</div>
											<div className="number-circle">{item.points}</div>
										</>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="row container my-1 point d-flex justify-content-center">
				<div className="col-md-6 d-flex justify-content-center">
					<div className="list-item">
						<div className="list-card card-78 red">
							<div>TIM MERAH</div>
							<div className="number-circle point">{teamRedPoints}</div>
						</div>
					</div>
				</div>
				<div className="col-md-6 d-flex justify-content-center">
					<div className="list-item">
						<div className="list-card card-78 blue">
							<div>TIM BIRU</div>
							<div className="number-circle point">{teamBluePoints}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="wrap-overlay"></div>
		</>
	);
};

export default MainQuisSurvey;
