import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage'
import './App.css';

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin' element={<HomePage />} />
        <Route path='/admin/poll/:id' element={<HomePage />} />
        <Route path='/poll/:id' element={<HomePage />} />
      </Routes> */}
    </div>
  );
}

export default App;
