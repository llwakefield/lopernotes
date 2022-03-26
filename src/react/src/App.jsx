import './App.css';
import CreateNote from './components/CreateNote.jsx';
import Home from './components/Home';
import ViewNotes from './components/ViewNotes.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2 className='mb-5'>
        Loper Notes
      </h2>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listnotes' element={<ViewNotes />} />
        <Route path='/createnote' element={<CreateNote />} />
      </Routes>
 
      </header>
    </div>
  );
}

export default App;
