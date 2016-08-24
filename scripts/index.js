import parseCSV from './utilites/parse-csv'

fetch('./data/anime-top-100.csv')
	.then(resp => resp.text())
	.then(cartoonsCSV => {
		const cartoons = parseCSV(cartoonsCSV)

		cartoons.forEach(item => {
			console.log(item.title)
			document.write(item.title + '<br>')
		});
	})
