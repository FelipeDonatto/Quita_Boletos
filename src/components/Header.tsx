import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const user = JSON.parse(localStorage.getItem('user') as string);
  const firstName = String(user.name).split(' ');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div
      className='flex-col sm:flex-row py-4 flex justify-around items-center border-b border-slate-900/10
    lg:px-8 dark:border-slate-300/10 lg:mx-0 sticky z-50 top-0 bg-white bg-full px-10'
    >
      <p className='text-xl font-medium mb-5 sm:mb-0 sm:text-xl'>
        Olá,{' '}
        {firstName[0].replace(
          firstName[0].charAt(0),
          firstName[0].charAt(0).toUpperCase(),
        )}
        !
      </p>
      <div className='flex justify-between'>
        {location.pathname !== '/boletos' && (
          <button
            name='pagamentos'
            className='text-sm font-medium sm:text-x mr-2 p-2 rounded h-10 w-full bg-blue-400'
            onClick={() => navigate('/boletos')}
          >
            Voltar
          </button>
        )}
        <button
          name='pagamentos'
          className='text-sm font-medium sm:text-x mr-2 p-2 rounded h-10 w-full bg-green-500'
          onClick={() => navigate('/pagamentos')}
        >
          Pagamentos
        </button>
        <button
          name='logout'
          className='text-sm font-medium sm:text-x rounded p-2 h-10 w-full bg-green-500'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
