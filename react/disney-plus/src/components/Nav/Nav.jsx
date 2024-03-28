import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  NavWrapper,
  Logo,
  Input,
  Login,
  SignOut,
  UserImg,
  DropDown,
} from "./Nav.style";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Nav = () => {
  const initialUserData = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : {};

  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [userData, setUserData] = useState(initialUserData);

  //유저 인증
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //만약 로그인이 되어있으면 메인페이지로 이동
      if (user) {
        console.log("user", user);
        if (pathname === "/") {
          //로그인 페이지 일때만 메인으로 넘어가게
          navigate("/main");
        }
      } else {
        //로그인이 안돼 있으면 로그인 페이지로 이동
        navigate("/");
      }
    });
  }, [auth, navigate, pathname]);

  //스크롤이 내려가면 이벤트 활성화(네브바 배경어두워지기)
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

  //검색창 입력
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  //파이어베이스 로그인 후 로그인 데이터 저장
  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserData(result.user);
        //데이터를 가져온 후 로컬스토리지에 저장해야 새로고침해도 안날아감
        localStorage.setItem("userData", JSON.stringify(result.user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //로그아웃기능구현
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserData({});
        navigate(`/`);
      })
      .catch((error) => {
        console.log("error");
      });
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
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <Input
            value={searchValue}
            onChange={handleChange}
            type="text"
            placeholder={"검색해주세요."}
          />

          <SignOut>
            <UserImg src={userData.photoURL} alt={userData.displayName} />
            <DropDown onClick={handleSignOut}>
              <span>Logout</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </NavWrapper>
  );
};

export default Nav;
