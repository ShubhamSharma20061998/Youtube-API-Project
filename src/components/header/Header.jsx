import React from "react";
import {} from "react-icons";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";

const Header = () => {
  return (
    <section className="bg-white h-[70px] shadow-sm">
      <article className="flex item-center w-[95%] m-auto h-[70px] justify-between">
        <Logo />
        <Search />
        <Menu />
      </article>
    </section>
  );
};

export default Header;
