import Slider from "../UI/Slider";

import classes from "./header.module.css";
import HeaderButton from "./HeaderButton";


const Header = ({ onShowCart }) => {
  

  return (
    <>
      <header className={classes.header}>
        <h1>PandaMeals</h1>
        <HeaderButton onShowCart={onShowCart} />
      </header>
      <Slider />
    </>
  );
};

export default Header;
