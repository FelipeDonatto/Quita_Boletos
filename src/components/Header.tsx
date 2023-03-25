import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const user = JSON.parse(localStorage.getItem('user') as string) || 'Usuário';
  return (
    <div
      className='flex-col sm:flex-row py-4 flex justify-around items-center border-b border-slate-900/10
    lg:px-8 lg:border-0 dark:border-slate-300/10 lg:mx-0 sticky top-0 bg-white bg-full px-10'
    >
      <p className='text-sm mb-5 sm:mb-0 sm:text-xl'>
        Olá,{' '}
        {user.name.replace(
          user.name.charAt(0),
          user.name.charAt(0).toUpperCase(),
        )}
        !
      </p>
      <div className='flex justify-between'>
        <button className='text-sm sm:text-x rounded px-5 mr-3 h-full bg-green-500'>
          Pagamentos feitos
        </button>
        <button className='text-sm sm:text-x rounded h-10 w-full bg-green-500'>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
