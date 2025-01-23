// Utility untuk CRUD data survey menggunakan localStorage
const SURVEY_KEY = "surveyData";

// Data survey default
const defaultSurveyData = [
	{
		question: "Siapa karakter anime terpopuler?",
		answers: [
			{ text: "Naruto", points: 35 },
			{ text: "Goku", points: 30 },
			{ text: "Luffy", points: 20 },
			{ text: "Eren", points: 15 },
			{ text: "Deku", points: 10 },
			{ text: "Sasuke", points: 5 },
			{ text: "Itachi", points: 3 },
			{ text: "Zoro", points: 2 },
			{ text: "Levi", points: 1 },
			{ text: "Gojo", points: 1 },
		],
	},
];

// Inisialisasi data survey di localStorage jika belum ada
export  function initializeSurveyData() {
	const existingData = localStorage.getItem(SURVEY_KEY);
	if (!existingData) {
		localStorage.setItem(SURVEY_KEY, JSON.stringify(defaultSurveyData));
	}
}

// Mendapatkan semua data survey dari localStorage
export  function getAllSurveys() {
	const data = localStorage.getItem(SURVEY_KEY);
	return data ? JSON.parse(data) : [];
}

// Menambahkan survey baru ke localStorage
export  function addSurvey(newSurvey) {
	const surveys = getAllSurveys();
	surveys.push(newSurvey);
	localStorage.setItem(SURVEY_KEY, JSON.stringify(surveys));
}

// Mengupdate survey berdasarkan indeks
export  function updateSurvey(index, updatedSurvey) {
	const surveys = getAllSurveys();
	if (index >= 0 && index < surveys.length) {
		surveys[index] = updatedSurvey;
		localStorage.setItem(SURVEY_KEY, JSON.stringify(surveys));
	} else {
		throw new Error("Index survey tidak valid");
	}
}

// Menghapus survey berdasarkan indeks
export  function deleteSurvey(index) {
	const surveys = getAllSurveys();
	if (index >= 0 && index < surveys.length) {
		surveys.splice(index, 1);
		localStorage.setItem(SURVEY_KEY, JSON.stringify(surveys));
	} else {
		throw new Error("Index survey tidak valid");
	}
}

// Contoh penggunaan
// initializeSurveyData(); // Memastikan data default ada

// Mendapatkan semua survey
// console.log("Semua survey:", getAllSurveys());

// Menambahkan survey baru
// addSurvey({
// 	question: "Anime apa yang paling populer di tahun 2025?",
// 	answers: [
// 		{ text: "Attack on Titan", points: 40 },
// 		{ text: "One Piece", points: 35 },
// 		{ text: "Jujutsu Kaisen", points: 25 },
// 		{ text: "Chainsaw Man", points: 15 },
// 		{ text: "Bleach", points: 10 },
// 		{ text: "Spy x Family", points: 5 },
// 		{ text: "My Hero Academia", points: 3 },
// 		{ text: "Demon Slayer", points: 2 },
// 		{ text: "Black Clover", points: 1 },
// 		{ text: "Blue Lock", points: 1 },
// 	],
// });

// Mengupdate survey pada indeks ke-0
// updateSurvey(0, {
// 	question: "Siapa karakter anime terpopuler di dunia?",
// 	answers: [
// 		{ text: "Naruto", points: 50 },
// 		{ text: "Goku", points: 40 },
// 		{ text: "Luffy", points: 30 },
// 		{ text: "Eren", points: 20 },
// 		{ text: "Deku", points: 10 },
// 		{ text: "Sasuke", points: 5 },
// 		{ text: "Itachi", points: 3 },
// 		{ text: "Zoro", points: 2 },
// 		{ text: "Levi", points: 1 },
// 		{ text: "Gojo", points: 1 },
// 	],
// });

// Menghapus survey pada indeks ke-1
// deleteSurvey(1);

// Mendapatkan semua survey setelah perubahan
// console.log("Survey setelah perubahan:", getAllSurveys());
