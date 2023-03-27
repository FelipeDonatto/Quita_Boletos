import { Route, Routes } from 'react-router-dom';
import './App.css';
import BilletProvider from './context/billets/BilletsProvider';
import Boletos from './pages/Boletos';
import Editar from './pages/Editar';
import Login from './pages/Login';
import Pagamentos from './pages/Pagamentos';

function App() {
  document.title = 'Quita Boletos';
  return (
    <BilletProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/boletos' element={<Boletos />} />
        <Route path='/boletos/:id' element={<Editar />} />
        <Route path='/pagamentos' element={<Pagamentos />} />
      </Routes>
    </BilletProvider>
  );
}

export default App;
