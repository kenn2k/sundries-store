import { useNavigate } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../features/hooks/redux-hooks";
import { IoArrowBackOutline } from "react-icons/io5";
import { cartActions } from "../../features/slices/cart-slice";
import { useEffect, useState } from "react";
const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const [isCartEmpty, setIsCartEmpty] = useState(cartItems.length === 0);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const totalAmount = cartItems.reduce((total, item) => {
    if (item.totalPrice !== undefined) {
      return total + item.totalPrice;
    }
    return total;
  }, 0);

  useEffect(() => {
    setIsCartEmpty(cartItems.length === 0);
  }, [cartItems]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen max-w-[1400px]  mx-auto px-[5%] ">
      <div className="  md:flex-1 p-4 border h-[300px] md:h-[500px] mb-8 md:mb-0  overflow-auto">
        <button
          className="flex absolute top-32 lg:top-36  items-center gap-4 px-1.5  md:px-2 md:py-1 mb-4 text-[14px] md:text-lg font-bold transition ease-in-out border rounded hover:bg-hoverBg "
          onClick={() => navigate(-1)}
        >
          <span>
            <IoArrowBackOutline />
          </span>
          Back to
        </button>
        {isCartEmpty ? (
          <p className="text-xl font-bold text-center">Cart is empty</p>
        ) : (
          <ul className="">
            {cartItems.map((item) => (
              <li key={item.id} className="p-4 mb-4 border rounded-md ">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-[12px]  font-bold">{item.title}</p>

                      <p className=" text-[13px]">Price: ${item.price}</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 float-end ">
                      <button
                        onClick={() => {
                          dispatch(cartActions.removeItemById(item.id));
                        }}
                        className="px-2 border rounded-xl"
                      >
                        -
                      </button>
                      <button
                        onClick={() => {
                          dispatch(
                            cartActions.addItemToCart({
                              id: item.id,
                              title: item.title,
                              totalPrice: item.totalPrice,
                            })
                          );
                        }}
                        className="px-2 border rounded-xl"
                      >
                        +
                      </button>
                    </div>
                    <p className=" text-[12px] text-[grey]">
                      Quantity: {item.quantity}
                    </p>
                    <p className="font-bold">Total: ${item.totalPrice}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="  h-auto md:h-[500px] flex items-center justify-center flex-col p-4  bg-[#613943] text-[#f4fc99]">
        <p className="mb-4 text-2xl font-bold text-center">Order Summary</p>

        <div className="flex justify-between mt-2">
          <p className="text-xl font-bold">
            Total:{" "}
            <span className="text-lg text-hoverBg">
              ${totalAmount.toFixed(1)}
            </span>
          </p>
        </div>
        <button className="px-4 py-2 mt-4 text-right border rounded hover:bg-hoverBg ">
          Confirm your order
        </button>
      </div>
    </div>
  );
};

export default Cart;
