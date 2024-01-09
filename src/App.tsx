import { useEffect, useState } from 'react';
import './assets/Global.css'
import './App.css'
import Card from './components/Card/Card';
import Grid from './components/Grid/Grid';
import { fetchFromApi } from './services/ApiHandler';
import { Employee } from './utils/types';

const pageSize = 8;

const App: React.FC = () => {

    const [colleagues, setColleagues] = useState<Employee[] | undefined>();
    const [colleagueSelection, setColleagueSelection] = useState<Employee[] | undefined>();
    const [page, setPage] = useState<number>(0);
	const [totalPages, setTotalPages] = useState<number>(-1);

	useEffect(() => {
		sliceSelection();
	}, [colleagues, page]);

	async function retrieveEmployees() {
		const fetched = await fetchFromApi();

		const pages = ((fetched!.length / pageSize)).toFixed(0);
		setTotalPages(parseInt(pages));
		setPage(0);
		setColleagues(fetched);
	}

	function nextPage() {
		if (page < totalPages)
			setPage(page + 1);
	}

	function prevPage() {
		if (page > 0)
			setPage(page - 1);
	}

	function sliceSelection() {
		if (colleagues === undefined)
			return;

		const startIndex = (page) * pageSize;
		const endIndex = startIndex + pageSize;
		
		const newSelection = colleagues!.slice(startIndex, endIndex);

		setColleagueSelection(newSelection);
	}

	return(
		<div className="flow">
			<header>
			<h1>
				The Fellowship of the Ring
			</h1>
			<button onClick={retrieveEmployees}>Load colleagues</button>
			</header>
			<Grid>
				{colleagueSelection?.map((colleague, index) => (					
					<Card colleague={colleague} key={index} />
				))}
			</Grid>

			<div className="bottom">
				<button onClick={prevPage}>Prev</button>
				<p>Page {page + 1} of {totalPages}</p>
				<button onClick={nextPage}>Next</button>
			</div>
		</div>
	);
};

export default App;