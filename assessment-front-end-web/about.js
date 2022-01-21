console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('You submited the form.')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

//

const duckPhoto = document.querySelector('img');

console.log(catPhoto.getAttribute('src'));  // => 'cat.jpg'

catPhoto.setAttribute('src', 'duckpick.jpg')