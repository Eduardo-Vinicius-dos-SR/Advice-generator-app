function generateAdvice() {
	const response = fetch("https://api.adviceslip.com/advice");
	return response.json();
}

console.log(generateAdvice());
