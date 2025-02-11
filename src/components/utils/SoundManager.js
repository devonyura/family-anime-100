class SoundManager {
	// Menyimpan semua objek audio
	static sounds = {};
	static volume = localStorage.getItem("soundVolume") ? parseFloat(localStorage.getItem("soundVolume")) : 1.0;

	// Daftar file audio
	static soundFiles = [
		"backsound",
		"click-sound",
		"correct-answer",
		"intro-survey",
		"revealed-survey",
		"top-survey",
		"waiting-survey",
		"wrong-answer"
	];

	// Load semua sound di awal
	static loadSounds() {
		this.soundFiles.forEach((name) => {
			this.sounds[name] = new Audio(`${process.env.PUBLIC_URL}/assets/sounds/${name}.ogg`);
			this.sounds[name].volume = this.volume;
			this.sounds[name].preload = "auto"; // Preload agar tidak delay saat diputar pertama kali
		});
	}

	// Getter untuk mengakses sound (looping hanya untuk backsound)
	static getSound(name, loop = false) {
		const sound = this.sounds[name];
		if (!sound) return null;
		sound.loop = loop;
		return sound;
	}

	// Getter backsound agar otomatis looping
	static get backsound() {
		return this.getSound("backsound", true);
	}

	// Method untuk memutar backsound
	static playBacksound() {
		this.backsound
			.play()
			.then(() => console.log("Backsound diputar"))
			.catch((error) => console.error("Gagal memutar backsound:", error));
	}

	// Method pemutar suara per jenis
	static playClickSound() {
		this.playSound(this.soundFiles[1]);
	}

	static playCorrectAnswer() {
		this.playSound(this.soundFiles[2]);
	}

	static playIntroSurvey() {
		this.playSound(this.soundFiles[3]);
	}

	static playRevealedSurvey() {
		this.playSound(this.soundFiles[4]);
	}

	static playTopSurvey() {
		this.playSound(this.soundFiles[5]);
	}

	static playWaitingSurvey() {
		this.playSound(this.soundFiles[6]);
	}

	static playWrongAnswer() {
		this.playSound(this.soundFiles[7]);
	}

	// Method umum untuk memainkan suara
	static playSound(name) {
		const sound = this.getSound(name);
		if (sound) {
			sound.currentTime = 0; // Reset waktu agar bisa diputar ulang cepat
			sound.play().catch((error) => console.error(`Gagal memutar ${name}:`, error));
		}
	}

	// Set volume global (semua suara ikut berubah)
	static setVolume(newVolume) {
		this.volume = newVolume;
		localStorage.setItem("soundVolume", newVolume);
		Object.values(this.sounds).forEach((sound) => {
			sound.volume = newVolume;
		});
	}
}

// **Load semua sound saat pertama kali diakses**
SoundManager.loadSounds();

// Ekspor agar bisa digunakan di komponen React
export default SoundManager;
