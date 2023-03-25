import { Route, Routes } from 'react-router-dom';
import './App.css';
import Boletos from './pages/Boletos';
import Login from './pages/Login';

function App() {
  document.title = 'Quita Boletos';
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/boletos' element={<Boletos />} />
    </Routes>
  );
}

export default App;
