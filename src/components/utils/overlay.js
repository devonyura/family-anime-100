export const showWrongOverlay = () => {
	addOverlay(`
		<div class="overlay wrong d-flex flex-column">
			<h1>Salah!</h1>
			<p>Tidak ada dalam survey</p>
		</div>
	`);
};

export const showCorrectOverlay = () => {
	addOverlay(`
		<div class="overlay correct d-flex flex-column">
			<h1>Benar!</h1>
			<p>Jawaban ada dalam survey</p>
		</div>
	`);
};

export const showWaitOverlay = () => {
	addOverlay(`
		<div class="overlay wait d-flex flex-column">
			<p>Survey Membuktikan!</p>
		</div>
	`);
};

export const showTopSurveyOverlay = () => {
	addOverlay(`
		<div class="overlay top-survey d-flex flex-column">
			<h1>Top Survey!</h1>
			<p>Jawaban adalah top survey</p>
		</div>
	`);
};

// Fungsi utama untuk menambahkan overlay ke dalam .wrap-overlay dan menghapusnya setelah 3 detik
const addOverlay = (overlayHtml) => {
	const wrapOverlay = document.querySelector(".wrap-overlay");
	if (!wrapOverlay) return;

	// Buat elemen div dan isi dengan overlayHtml
	const overlayElement = document.createElement("div");
	overlayElement.innerHTML = overlayHtml;

	// Tambahkan overlay ke dalam wrap-overlay
	wrapOverlay.appendChild(overlayElement.firstElementChild);

	// Hapus overlay setelah 3 detik
	setTimeout(() => {
		wrapOverlay.innerHTML = "";
	}, 2500);
};
