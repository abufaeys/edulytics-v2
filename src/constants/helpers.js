export const getEloRating = (attributes) => {
	let rating = 0;
	const STEEPNESS = 1;
	const CUTOFF = 20;
	const WEIGHTS = [1,5,3,7,2,3];

	for (let i=0;i<attributes.length;i++) {
		let ele = attributes[i];
		if (ele <= CUTOFF) {
			rating -= Math.log(STEEPNESS*(ele + CUTOFF)) * WEIGHTS[i] * 100
		}
		else {
			rating += Math.log(STEEPNESS*(ele - CUTOFF)) * WEIGHTS[i] * 100
		}		
	}
	return Math.round(rating);
}

