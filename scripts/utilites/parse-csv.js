export default function parseCSVLines(csvString) {
	const newLines = csvString.split("\n")
	let cartoons = []
    newLines.forEach(line => {
        const [ title,rating,votes,episodes,special,fillers,duration,release ] = line.split(',');
		cartoons.push({title,rating,votes,episodes,special,fillers,duration,release});
    });
    cartoons.shift()
    return cartoons
}