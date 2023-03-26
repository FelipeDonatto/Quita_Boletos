import { createContext } from 'react';
import { BilletContextType } from '../../Interfaces/IBillet';

const BilletsContext = createContext<BilletContextType | null>(null);

export default BilletsContext;
