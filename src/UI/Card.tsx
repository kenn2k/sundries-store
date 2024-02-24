import { ReactNode } from "react";

interface ICart {
  children: ReactNode;
}

const Card = ({ children }: ICart) => {
  return (
    <div className="container w-full h-full p-4 transition-shadow duration-700 ease-in-out rounded rounded-t-3xl hover:hoverCart hover: cart">
      {children}
    </div>
  );
};

export default Card;
