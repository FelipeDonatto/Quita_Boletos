import { ChangeEvent, ChangeEventHandler, useState } from 'react';

function CreateBillet() {
  const [billet, setBilletValues] = useState({
    name: '',
    method: 'Cartão',
    datetime: '',
    value: '',
    currency: 'BRL',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBilletValues({ ...billet, [name]: value });
  };

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setBilletValues({ ...billet, [name]: value });
  };

  return (
    <div className='w-4/5 sm:w-1/3 mx-auto my-10'>
      <h1 className='text-2xl my-4 text-center my-4\'>Registrar pagamento</h1>
      <form>
        <span className='text-gray-700'>Nome</span>
        <input
          type='text'
          name='name'
          onChange={handleChange}
          className='
                    mt-1 block w-full rounded-md border-gray-300 shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  '
          placeholder='Nome do cliente'
        />
        <span className='text-gray-700'>Método de pagamento</span>
        <select
          name='method'
          className='
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  '
          onChange={handleSelect}
        >
          <option>Cartão</option>
          <option>Pix</option>
          <option>Boleto</option>
          <option>Outro</option>
        </select>
        <span className='text-gray-700'>Data e Hora</span>
        <input
          type='datetime-local'
          className='
                    mt-1 block w-full rounded-md border-gray-300 shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  '
          max='2100-06-14T00:00'
          onChange={handleChange}
          name='datetime'
        />
        <span className='text-gray-700'>Valor</span>
        <div>
          <div className='relative mt-2 rounded-md shadow-sm'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <span className='text-gray-500 sm:text-sm '>
                {billet.currency === 'BRL' ? 'R$' : '$'}
              </span>
            </div>
            <input
              type='text'
              name='value'
              id='price'
              className='block w-full rounded-md border-0 py-1.5 pl-9 pr-20 text-gray-900 ring-1
                        ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                        focus:ring-indigo-600 sm:text-sm sm:leading-6'
              placeholder='0.00'
              onBlur={() => {
                setBilletValues({
                  ...billet,
                  value: Number(billet.value).toFixed(2),
                });
              }}
              value={billet.value}
              onChange={handleChange}
            />
            <div className='absolute inset-y-0 right-0 flex items-center'>
              <select
                id='currency'
                name='currency'
                className='h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500
                          focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
                onChange={handleSelect}
              >
                <option>BRL</option>
                <option>USD</option>
              </select>
            </div>
          </div>
        </div>
        <button className='rounded disabled:bg-gray-500/25 mt-3 h-10 w-full bg-green-500'>
          Registrar
        </button>
      </form>
    </div>
  );
}

export default CreateBillet;
