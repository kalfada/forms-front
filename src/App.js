import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Admin from './pages/Admin';
import PopUp from './components/PopUp'
import AdminPoll from './pages/AdminPoll';

export const PopUpContext = createContext()

function App() {
  const [popUpCon, setPopUpCon] = useState()
  return (
    <div className="App">
      <PopUpContext.Provider value={{popUpCon, setPopUpCon}}>
        <PopUp />
        <Routes>
          <Route path='/' element={<Admin />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/poll/:id' element={<AdminPoll />} />
          <Route path='/poll/:id' element={<Admin />} />
        </Routes>
      </PopUpContext.Provider>
    </div>
  );
}

export default App;
