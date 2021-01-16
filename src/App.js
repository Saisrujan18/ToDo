import react from 'react';
import './App.css';
import Lists from './Components/Lists';
import Footer from './Components/Footer';
function App() {
  return (
	<div>
    	<h1 className='Header'>X - List</h1>
		<div className='View'>
			<div><Lists/></div>
		</div>
		<Footer/>
    </div>
  );
}

export default App;
