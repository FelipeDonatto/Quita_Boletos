import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [user, setUser] = useState({
    email: '',
    name: '',
    password: '',
  });
  const [enableStatus, setEnableStatus] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/boletos');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (
      emailRegex.test(user.email) &&
      user.name.length !== 0 &&
      user.password.length > 6
    ) {
      setEnableStatus(false);
    } else {
      setEnableStatus(true);
    }
  }, [user]);

  return (
    <>
      <h1 className='text-3xl font-bold text-center mb-5'>Quita boletos</h1>
      <form>
        <span className='text-gray-700'>Nome</span>
        <input
          onChange={handleChange}
          type='text'
          name='name'
          className='
                    form-input mt-0 block w-full rounded
                    px-0.5 border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black mb-2
                  '
          placeholder='Seu nome'
        />
        <span className='text-gray-700'>Email</span>
        <input
          onChange={handleChange}
          type='text'
          name='email'
          className='
                    form-input mt-0 block w-full rounded
                    px-0.5 border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black mb-2
                  '
          placeholder='nome@email.com'
        />
        <span className='text-gray-700'>Senha</span>
        <input
          onChange={handleChange}
          type='password'
          name='password'
          className='
                    form-input mt-0 block w-full rounded
                    px-0.5 border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black mb-2
                  '
          placeholder='Sua senha'
        />
        <button
          className='rounded disabled:bg-gray-500/25 h-10 w-full bg-green-500'
          disabled={enableStatus}
          onClick={handleClick}
        >
          Entrar
        </button>
      </form>
    </>
  );
}

export default LoginForm;
