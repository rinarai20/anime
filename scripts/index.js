import parseCSV from './utilites/parse-csv'

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
	            <td>${item.episodes}</td>
        	</tr>`;
			table.insertAdjacentHTML('beforeend', rowHtml);
//			document.write(item.title + '<br>')
		});
	})
