import { Link, Outlet } from "react-router-dom";
import One from "../Images/categories-grey.svg";
import Two from "../Images/profile-grey.svg";
import Three from "../Images/cart.svg";

const Layout = () => {
  return (
    <div>
      <nav id="nav">
        <Link to="/">
          <img
            className="logoimg"
            src="https://www.licious.in/image/rebranding/svg/licious-logo.svg"
            alt=""
          />
        </Link>
        <input
          className="searchcss"
          type="search"
          placeholder="Search for any delicious product"
        />

        <div className="categories">
          <img src={One} alt="" />
          <p className="Categoriestext">Categories</p>
        </div>

        <div className="Profile">
          <img src={Two} alt="" />
          <p className="Categoriestext">Login</p>
        </div>

        <div className="cart">
          <img src={Three} alt="" />
          <p className="Categoriestext">Cart</p>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
