import { Link } from "react-router-dom";
import Card from "../../UI/Card";
import { StoreType } from "../../types/types";
import { useAppDispatch } from "../../features/hooks/redux-hooks";
import { cartActions } from "../../features/slices/cart-slice";

const ProductItem = (props: StoreType) => {
  const { title, price, image, category, id } = props;
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  const formatted = `$${price.toFixed(1)}`;
  return (
    <li className="col-span-1">
      <Card>
        <div className="relative flex flex-col justify-between h-full gap-2">
          <img
            src={image}
            className="object-contain w-full h-full "
            alt={title}
          />
          <h1 className="text-xs text-center">{title}</h1>
          <div className="flex items-center justify-between ">
            <span className=" text-hoverBg">{formatted}</span>
            <span className=" absolute top-0 right-0 px-0.5 py-0.5 rounded-md text-[#fff] bg-text text-[0.7rem]">
              {category}
            </span>
          </div>
          <div className="flex items-center justify-between ">
            <button
              onClick={handleAddToCart}
              className=" border  md:text-xs  rounded-md transition ease-in-out bg-hoverBg text-[#fff] px-1 py-2 hover:text-[#fff] hover:bg-text"
            >
              Add to Cart
            </button>
            <Link
              className=" text-[0.7rem] text-end md:text-[10px] px-0.5 py-0.5 transition ease-in-out hover:duration-700 hover:scale-110 rounded-md text-text hover:bg-text hover:text-[#fff]"
              to={`/cart/${id}`}
            >
              Click for more
            </Link>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
