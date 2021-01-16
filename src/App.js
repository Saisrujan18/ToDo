import react from 'react';
import './ALLCSS.css';
import Lists from './Components/Lists';
import Footer from './Components/Footer';
function App() {
  return (
	<div>
		<div className='Header'>
		<h1>ToDo</h1>
		<p>Be the man</p>
		</div>
		<Lists/>
		<Footer/>
    </div>
  );
}
export default App;