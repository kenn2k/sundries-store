import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../features/hooks/redux-hooks";
import {
  fetchGalleryItems,
  filterActions,
} from "../../features/slices/storeItems-slice";
import { VscLoading } from "react-icons/vsc";
import ProductItem from "./ProductItem";
const Product = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.gallery.loading);
  const error = useAppSelector((state) => state.gallery.error);
  const {
    data: products,
    filter,
    selectedCategory,
  } = useAppSelector((state) => state.gallery);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(filter.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory)
  );
  useEffect(() => {
    dispatch(fetchGalleryItems());
  }, []);

  if (loading) {
    return (
      <p className="flex items-center justify-center h-screen text-xl bg-pageBg text-text">
        <span className="animate-spin ">
          <VscLoading />
        </span>
        Loading...
      </p>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = event.target.value;
    dispatch(filterActions.setFilter(filterValue));
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const categoryValue = event.target.value;
    dispatch(filterActions.setCategory(categoryValue));
  };

  return (
    <>
      <div className="flex px-[3%] flex-col items-center justify-center h-full mx-auto mt-16 max-w-7xl">
        <div className="flex flex-col items-center justify-between w-full mb-8 md:flex-row md:mb-16">
          <input
            type="text"
            placeholder="Search..."
            value={filter}
            onChange={handleFilterChange}
            className="p-3 mb-4 border outline-none md:p-2 rounded-xl md:mb-0"
          />
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-3 border md:p-2 rounded-xl"
          >
            <option className="" value="">
              All Categories
            </option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {filteredProducts.map((card) => (
            <ProductItem
              key={card.id}
              id={card.id}
              rating={card.rating}
              title={card.title}
              price={card.price}
              description={card.description}
              image={card.image}
              category={card.category}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Product;
