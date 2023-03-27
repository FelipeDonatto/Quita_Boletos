import { useContext } from 'react';
import DonePayments from '../components/DonePayments';
import Header from '../components/Header';
import BilletsContext from '../context/billets/BilletsContext';

function Pagamentos() {
  const context = useContext(BilletsContext);
  return (
    <div>
      <Header />
      <div className='flex flex-col w-3/4 m-auto mt-10'>
        {context?.billets.map((e) => (
          <DonePayments {...e} key={e.id} />
        ))}
      </div>
    </div>
  );
}

export default Pagamentos;
