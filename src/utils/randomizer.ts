function getRandomNumber(min: number, max: number): number {
	let num = Math.floor(Math.random() * (max - min + 1)) + min;

	return num;
}

//todo: getRandomImage still doesn't work
function getRandomImage(): string {
	const images = [
		"C:\\Users\\kevin\\react projects\\mathGame\\src\\assets\\images\\bathing_marshmellow.png",
		"C:\\Users\\kevin\\react projects\\mathGame\\src\\assets\\images\\cooking_pot.png",
		"C:\\Users\\kevin\\react projects\\mathGame\\src\\assets\\images\\crocodile_jungle.png",
		"C:\\Users\\kevin\\react projects\\mathGame\\src\\assets\\images\\happy_clam.png",
		"C:\\Users\\kevin\\react projects\\mathGame\\src\\assets\\images\\raining_octopus.jpg",
		"C:\\Users\\kevin\\react projects\\mathGame\\src\\assets\\images\\robot_crab.png",
		"C:\\Users\\kevin\\react projects\\mathGame\\src\\assets\\images\\space_alien.png",
	];

	const randomImage = images[Math.floor(Math.random() * images.length)];
	console.log("randomImage: " + randomImage);
	return randomImage;
}

export { getRandomNumber, getRandomImage };
