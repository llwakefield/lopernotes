import './App.css';
import CreateNote from './components/CreateNote';
import Home from './components/Home';
import ViewNotes from './components/ViewNotes';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/listnotes' element={<ViewNotes />} />
          <Route path='/createnote' element={<CreateNote />} />
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
