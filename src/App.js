import './App.css';
import BackGround from './components/BackGround';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import SecondBackGround from './components/SecondBackGround';
import ForthPage from './components/ForthPage';

function App() {
  return (
    <div className="App">
      <NavBar />
    <div className='main'>
      <MainPage/>
      <BackGround/>
      <SecondPage/>
      <ThirdPage/>
      <SecondBackGround/>
      <ForthPage/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
