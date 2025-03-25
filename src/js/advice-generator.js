const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");

async function getAdvice() {
<<<<<<< HEAD
	const response = await fetch("https://api.adviceslip.com/advice");
=======
	const response = await fetch("https://api.adviceslip.com/advicse");
	if (!response.ok) {
		adviceId.innerText = `Advice #000`;
		adviceText.innerText = `There was a problem generating the advice, please try again`;
		throw new Error("There was a problem generating the advice");
	}
>>>>>>> d3fdec7 (coletando dados)
	return await response.json();
}

async function generateAdvice() {
	const advice = await getAdvice();

	adviceId.innerText = `Advice #${advice.slip.id}`;
	adviceText.innerText = `"${advice.slip.advice}"`;
}

generateAdvice();
