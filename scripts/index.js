import parseCSV from './utilites/parse-csv'

function squaresForEpisodes(episodes) {
	let squares = ''
	let i = 0;
	while (i <  Number(episodes)) {
	  squares += '<div class="cell dip"></div> '
	  i++
	}
	return squares
}
function squaresForFillers(fillers) {
	let squares = ''
	let i = 0;
	while (i <  Number(fillers)) {
	  squares += '<div class="cell-filler dip"></div> '
	  i++
	}
	return squares
}
function squaresForSpecial(special) {
	let squares = ''
	let i = 0;
	while (i <  Number(special)) {
	  squares += '<div class="cell-special dip"></div> '
	  i++
	}
	return squares
}
fetch('./data/anime-top-100.csv')
	.then(resp => resp.text())
	.then(cartoonsCSV => {
		const cartoons = parseCSV(cartoonsCSV)
		const table = document.getElementById('episodes-table')

		cartoons.forEach(item => {

			const rowHtml = `<tr>
	            <td>${item.rating}</td>
	            <td>${item.title}</td>
	            <td>${item.release}</td>
	            <td>
	            	${squaresForEpisodes(item.episodes)}
	            	${squaresForFillers(item.fillers)}
	            	${squaresForSpecial(item.special)}
	            </td>
        	</tr>`;
			table.insertAdjacentHTML('beforeend', rowHtml);
//			document.write(item.title + '<br>')
		});
	})
