
let input = document.querySelector('.inp')

let start = document.querySelector('button')

start.onclick = function() {

	if (input.value === '' || input.value === 0) {
		alert('Заполните поле')
		window.close()
	}

	for (let i = 0; input.value != 1; i++) {

	if (input.value == 1) {
		console.log('4 -> 2 -> 1...')
	}

	let isEven = function(sum) {
		return (sum % 2 == 0) ? true : false;
	}

	if (isEven(input.value) === true) {
		input.value = input.value / 2
		console.log(input.value)
	} else {
		input.value = 3 * input.value
		input.value = +input.value + 1
		console.log(input.value)

	}

}

}
