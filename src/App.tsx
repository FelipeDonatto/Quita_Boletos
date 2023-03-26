import { Route, Routes } from 'react-router-dom';
import './App.css';
import BilletProvider from './context/billets/BilletsProvider';
import Boletos from './pages/Boletos';
import Editar from './pages/Editar';
import Login from './pages/Login';

function App() {
  document.title = 'Quita Boletos';
  return (
    <BilletProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/boletos' element={<Boletos />} />
        <Route path='/boletos/:id' element={<Editar />} />
      </Routes>
    </BilletProvider>
  );
}

export default App;
