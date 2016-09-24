import parseCSV from './utilites/parse-csv'

fetch('./data/anime-top-100.csv')
	.then(resp => resp.text())
	.then(cartoonsCSV => {
		const cartoons = parseCSV(cartoonsCSV)
		const table = document.getElementById('episodes-table')

		cartoons.forEach(item => {
			let squares = ''
			let i = 0;
			while (i <  Number(item.episodes)) {
			  squares += '<div class="cell dip"></div> '
			  i++
			}


			const rowHtml = `<tr>
	            <td>${item.rating}</td>
	            <td>${item.title}</td>
	            <td>${item.release}</td>
	            <td>${squares}</td>
        	</tr>`;
			table.insertAdjacentHTML('beforeend', rowHtml);
//			document.write(item.title + '<br>')
		});
	})
