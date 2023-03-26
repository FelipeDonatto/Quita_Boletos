/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from 'react';
import { IBillet, Billet } from '../../Interfaces/IBillet';
import BilletsContext from './BilletsContext';

interface BilletProps {
  children: React.ReactNode;
}

const BilletProvider = ({ children }: BilletProps) => {
  const [billets, setBillets] = useState<IBillet[]>([
    {
      id: 1,
      name: '123',
      method: 'Cartão',
      datetime: '2023-03-26T15:13',
      value: '11.00',
      currency: 'BRL',
    },
    {
      id: 2,
      name: '321',
      method: 'Cartão',
      datetime: '2023-03-26T15:13',
      value: '22.00',
      currency: 'BRL',
    },
  ]);
  const [id, setId] = useState(1);

  const newBillet = (billet: Billet) => {
    const billetObj = {
      id: id,
      name: billet.name,
      method: billet.method,
      datetime: billet.datetime,
      value: billet.value,
      currency: billet.currency,
    };
    setId(id + 1);
    setBillets([...billets, billetObj]);
  };

  const removeBillet = (id: number) => {
    setBillets(billets.filter((e) => e.id !== id));
  };

  const updateBillet = (id: number, newBillet: Billet) => {
    const billetToUpdate = billets.find((e) => e.id === id) as IBillet;
    const billetObj = {
      id: id,
      name: newBillet.name,
      method: newBillet.method,
      datetime: newBillet.datetime,
      value: newBillet.value,
      currency: newBillet.currency,
    };
    setBillets(
      billets.map((element) =>
        element === billetToUpdate ? billetObj : element,
      ),
    );
  };

  const value = useMemo(
    () => ({ billets, newBillet, removeBillet, updateBillet }),
    [billets],
  );

  return (
    <BilletsContext.Provider value={value}>{children}</BilletsContext.Provider>
  );
};

export default BilletProvider;
