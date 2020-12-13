import './index.css';
import Navigation from './components/Navigation/Navigation';
import Cover from './components/Cover/Cover';
import About from './components/About/About';
// import MetaTags from 'react-meta-tags';

function App() {
	return (
		<div className='App'>
			{/* <MetaTags>
      <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
      </MetaTags> */}
			<Navigation></Navigation>
			<Cover></Cover>
			<About></About>
		</div>
	);
}

export default App;
