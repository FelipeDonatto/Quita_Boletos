export interface Billet {
  name: string;
  method: string;
  datetime: string;
  value: string;
  currency: string;
}

export interface IBillet extends Billet {
  id: number;
}

export interface BilletContextType {
  billets: IBillet[];
  newBillet: (billet: Billet) => void;
  removeBillet: (id: number) => void;
  updateBillet: (id: number, newBillet: Billet) => void;
}
