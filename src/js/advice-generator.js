const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");

async function getAdvice() {
	const response = await fetch("https://api.adviceslip.com/advice");
	return await response.json();
}

async function generateAdvice() {
	const advice = await getAdvice();

	adviceId.innerText = `Advice #${advice.slip.id}`;
	adviceText.innerText = `"${advice.slip.advice}"`;
}

generateAdvice();
