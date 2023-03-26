import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BilletsContext from '../context/billets/BilletsContext';
import { IBillet } from '../Interfaces/IBillet';

function DonePayments(billet: IBillet) {
  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(BilletsContext);

  return (
    <div className='flex bg-green-800 flex-row my-2 mx-0'>
      <div className='w-1/3 bg-green-800 text-center flex-grow text-white font-bold self-center p-0 m-0'>
        Id: {billet.id}
        <div className='flex flex-col items-center'>
          {!/\d/.test(location.pathname) && (
            <button
              onClick={() => navigate(`${billet.id}`)}
              className='rounded w-3/4 my-1 bg-green-700'
            >
              Editar
            </button>
          )}
          <button
            onClick={() => context?.removeBillet(billet.id)}
            className='rounded w-3/4 bg-green-700'
          >
            Apagar
          </button>
        </div>
      </div>
      <div className='bg-green-500 w-2/4 sm:grow py-2 px-4'>
        <p className='font-bold'>Nome:</p>
        <p>{billet.name}</p>
        <p className='font-bold'>Método:</p>
        <p>{billet.method}</p>
        <p className='font-bold'>Data e hora:</p>
        <p>{billet.datetime.replace('T', ' ')}</p>
      </div>
      <div className='flex items-center w-1/3 self-stretch bg-green-200 px-4'>
        <div>
          <p className='font-bold'>Valor:</p>
          <p>{billet.value}</p>
          <p className='font-bold'>Moeda:</p>
          <p>{billet.currency}</p>
        </div>
      </div>
    </div>
  );
}

export default DonePayments;
