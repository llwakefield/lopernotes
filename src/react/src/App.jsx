import './App.css';
import Home from './components/Home';
import ViewNotes from './components/ViewNotes.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2 className='mb-5'>
        Loper Notes
      </h2>
      <Home />
      <ViewNotes />
      </header>
    </div>
  );
}

export default App;
