import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CreateBillet from '../components/CreateBillet';
import DonePayments from '../components/DonePayments';
import Header from '../components/Header';
import BilletsContext from '../context/billets/BilletsContext';
import { IBillet } from '../Interfaces/IBillet';

function Editar() {
  const { id } = useParams();
  const context = useContext(BilletsContext);
  const billetDetails = context?.billets.find(
    (e) => e.id === Number(id),
  ) as IBillet;

  return (
    <div>
      <Header />
      <div className='w-3/4 m-auto'>
        <CreateBillet />
        {billetDetails !== undefined ? (
          <DonePayments {...billetDetails} />
        ) : (
          <p className='text-center font-bold'>Pagamento deletado</p>
        )}
      </div>
    </div>
  );
}

export default Editar;
