export type CartType = {
  id?: number;
  title?: string;
  price?: number;
  totalPrice?: number;
  quantity?: number;
};

export type StoreType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
