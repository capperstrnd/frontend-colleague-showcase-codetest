import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card/Card';
import Grid from './components/Grid/Grid';
import { fetchFromApi } from './services/ApiHandler';
import { Employee } from './utils/types';

const App: React.FC = () => {

    const [colleagues, setColleagues] = useState<Employee[] | undefined>();

	useEffect(() => {
	}, []);

	async function retrieveEmployees() {
		const fetched = await fetchFromApi();

		setColleagues(fetched);
	}

	return(
		<div className="flow">
			<header>
			<h1>
				The Fellowship of the Ring
			</h1>
			<button onClick={retrieveEmployees}>Load colleagues</button>

			<p>Count: {colleagues?.length ?? "-"}</p>
			</header>
			<Grid>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</Grid>
		</div>
	);
};

export default App;