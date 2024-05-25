import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between items-center shadow-md">
      <Link to="/">
        <h1 className=" text-5xl">TODO</h1>
      </Link>
      <Link to="/new" className=" mr-10">
        <button className=" bg-[#e9e9e9] rounded-md flex p-2 gap-2 items-center">
          ADD
          <IoAddOutline size={20} />
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
