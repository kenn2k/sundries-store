import { useAppSelector } from "../../features/hooks/redux-hooks";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div className="flex items-center justify-center h-screen max-w-[1400px] mx-auto ">
      <div className="flex-1 p-4 border h-[500px] overflow-auto">
        <ul className="">
          {cartItems.map((item) => (
            <li key={item.id} className="p-4 mb-4 border rounded-md ">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-gray-500">Price: ${item.price}</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                  <p className="font-bold">Total: ${item.totalPrice}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 h-[500px] p-4 text-white bg-[#613943] text-[#f4fc99]">
        <p className="mb-4 text-2xl font-bold">Order Summary</p>
        <div className="flex justify-between">
          <p>Subtotal:</p>
          <p>$</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping:</p>
          <p>$</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="font-bold">Total: {}</p>
        </div>
        <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
