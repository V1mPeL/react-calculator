import './App.css';
import './components/main.css';
import { Main } from './components/main'

function App() {
  return (
    <div className="App flex  justify-center items-center h-screen">
      <div className='h-3/4 bg-white p-2 shadow-lg calculator-wrapper'>
      <Main></Main>
      </div>
    </div>
  );
}

export default App;
