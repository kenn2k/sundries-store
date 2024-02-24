import BtnBadge from "./BtnBadge";

const Header = () => {
  return (
    <div className="w-full bg-bg text-text">
      <div className="flex items-center h-20 justify-between w-10/12 px-[5%] mx-auto">
        <span className="text-xl lg:text-3xl">Main</span>
        <BtnBadge />
      </div>
    </div>
  );
};

export default Header;
