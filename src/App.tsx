import './App.css'
import Card from './components/Card/Card';
import Grid from './components/Grid/Grid';

const App: React.FC = () => (
	<div className="flow">
		<header>
		<h1>
			The Fellowship of the Ring
		</h1>
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

export default App;
