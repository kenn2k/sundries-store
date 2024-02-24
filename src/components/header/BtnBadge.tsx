import { MdAddShoppingCart } from "react-icons/md";
import { useAppSelector } from "../../features/hooks/redux-hooks";
import { Link } from "react-router-dom";
const BtnBadge = () => {
  const quantity = useAppSelector((state) => state.cart.totalQuantity);
  return (
    <Link
      to="/cart"
      className="flex items-center  gap-4 lg:p-3.5 md:p-3 p-2.5 transition ease-in-out rounded-b-lg text-[#fff] bg-hoverBg hover:bg-text"
    >
      <span className="">
        <MdAddShoppingCart size={30} className="lg:size-10 md:size-7 size-6 " />
      </span>
      <span className="px-1.5 py-0.5 border lg:px-3 md:px-2 md:py-1 lg:py-1 rounded-xl">
        {quantity}
      </span>
    </Link>
  );
};

export default BtnBadge;
