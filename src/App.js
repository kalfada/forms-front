import { Routes, Route } from 'react-router';
import './App.css';
import Admin from './pages/Admin';
import AdminPoll from './pages/AdminPoll';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Admin />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/poll/' element={<AdminPoll />} />
        <Route path='/poll/:id' element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
