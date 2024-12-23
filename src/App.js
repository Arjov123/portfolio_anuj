import './App.css';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
    <div className='main'>
      <MainPage/>
    </div>
    </div>
  );
}

export default App;
