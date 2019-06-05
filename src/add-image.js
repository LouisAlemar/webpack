import Snow from './image1.jpg';

function addImage(){
	const img = document.createElement('img');
	img.alt = "Snow";
	img.width = 300;
	img.src = Snow;

	const body = document.querySelector('body');
	body.appendChild(img);
}

export default addImage;