import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavWrapper, Logo, Input, Login } from "./Nav.style";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <NavWrapper show={show}>
      <Logo>
        <img
          alt="Disney Plus Logo"
          src="/images/logo.svg"
          onClick={() => (window.location.href = "/")}
        />
      </Logo>
      {pathname === "/" ? (
        <Login>Login</Login>
      ) : (
        <Input
          value={searchValue}
          onChange={handleChange}
          type="text"
          placeholder={"검색해주세요."}
        />
      )}
    </NavWrapper>
  );
};

export default Nav;
