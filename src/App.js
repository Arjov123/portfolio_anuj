import './App.css';
import BackGround from './components/BackGround';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import SecondPage from './components/SecondPage';

function App() {
  return (
    <div className="App">
      <NavBar />
    <div className='main'>
      <MainPage/>
      <BackGround/>
      <SecondPage/>
    </div>
    </div>
  );
}

export default App;
