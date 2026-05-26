function getRandomDivsor(number: number): number {
	//get all divsors of the number
	const divisors: number[] = [];

	for (let i = 1; i <= number; i++) {
		if (number % i === 0) {
			divisors.push(i);
		}
	}

	//return a random divisor
	console.log("divisors: " + divisors);
	const randomIndex = Math.floor(Math.random() * divisors.length);
	return divisors[randomIndex];
}
function getRandomNumber(min: number, max: number, divNum?: number): number {
	//this function allows to use a number that is divisible (ie mod == 0)
	//to do this, feed in optional parameter divNum as the 'other' number
	let num = 0;
	if (divNum == undefined) {
		//if not division
		num = Math.floor(Math.random() * (max - min + 1)) + min;
	} else {
		//if division
		do {
			num = getRandomDivsor(divNum);
		} while (num < min || num > max);
	}
	return num;
}

//todo: getRandomImage still doesn't work
function getRandomImage(): string {
	// Dynamically import all images in the directory
	const imageModules = import.meta.glob("../assets/images/*.{png,jpg,jpeg,svg}", {
		eager: true,
		import: "default",
	});
	const images = Object.values(imageModules) as string[];

	const randomImage = images[Math.floor(Math.random() * images.length)];
	console.log("randomImage: " + randomImage);
	return randomImage;
}

export { getRandomNumber, getRandomImage };
