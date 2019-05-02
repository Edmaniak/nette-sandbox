import naja from 'naja';

console.log("content goes");

const button = document.getElementById('click');

button.addEventListener('click', () => {
	console.log("click");
	/*naja.makeRequest("POST", '/json')
		.then((data) => console.log(data))
		.catch((err) => console.log(err));*/

	fetch('/json')
		.then((data) => data.json())
		.then((data) => console.log(data))
		.catch((err) => console.log(err));
});