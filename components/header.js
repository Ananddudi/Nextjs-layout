import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Header() {
  const [about, setAbout] = useState(false);
  const [works, setWorks] = useState(false);
  const [resources, setResoureces] = useState(false);
  const [pricing, setPricing] = useState(false);
  const [help, setHelp] = useState(false);
  const dispatch = useDispatch();
  const openit = useSelector((state) => state.openit);

  const showmenu = (e) => {
    const val = e.target.getBoundingClientRect();
    const center = val.left - 260;
    // const bottom = val.bottom;
    dispatch({
      type: "shows",
      payload: { center: center, title: e.target.innerText },
    });
  };
  const hidemenu = () => {
    setTimeout(() => {
      if (openit) {
        dispatch({ type: "hides" });
        dispatch({ type: "close" });
      }
    }, 3000);
  };

  return (
    <div className="d-flex flex-row justify-content-between justify-content-lg-center align-items-center my-lg-4 my-3 text-white">
      <div>
        <img src="/logoicon.png" alt="logoimage" className="w-25 w-lg-50" />
        <span className="flex align-items-center justify-content-center mx-2">
          <img src="/logotext.png" alt="logotext" className="w-50" />
        </span>
      </div>
      <div className="d-lg-flex flex-row justify-content-between d-none ">
        <button
          type="button"
          style={{ color: about ? "#FFD100" : "#FFFEFC" }}
          className="mx-3 bg-transparent border-0"
          onMouseOver={(e) => {
            // showmenu(e);
            setAbout(true);
          }}
          onMouseLeave={() => {
            hidemenu();
            setAbout(false);
          }}
        >
          <span className="arrowspace" onMouseOver={showmenu}>
            About
          </span>
          {about ? <BsChevronUp /> : <BsChevronDown />}
        </button>
        <button
          type="button"
          style={{ color: works ? "#FFD100" : "#FFFEFC" }}
          className="mx-3 bg-transparent border-0"
          onMouseOver={(e) => {
            // showmenu(e);
            setWorks(true);
          }}
          onMouseLeave={() => {
            hidemenu();
            setWorks(false);
          }}
        >
          <span className="arrowspace" onMouseOver={showmenu}>
            How it Works
          </span>
          {works ? <BsChevronUp /> : <BsChevronDown />}
        </button>
        <button
          type="button"
          style={{ color: resources ? "#FFD100" : "#FFFEFC" }}
          className="mx-3 bg-transparent border-0"
          onMouseOver={(e) => {
            // showmenu(e);
            setResoureces(true);
          }}
          onMouseLeave={() => {
            hidemenu();
            setResoureces(false);
          }}
        >
          <span className="arrowspace" onMouseOver={showmenu}>
            Resources
          </span>
          {resources ? <BsChevronUp /> : <BsChevronDown />}
        </button>
        <button
          type="button"
          className="mx-3 bg-transparent border-0"
          style={{ color: pricing ? "#FFD100" : "#FFFEFC" }}
          onMouseOver={(e) => {
            // showmenu(e);
            setPricing(true);
          }}
          onMouseLeave={() => {
            hidemenu();
            setPricing(false);
          }}
        >
          <span className="arrowspace" onMouseOver={showmenu}>
            Pricing
          </span>
          {pricing ? <BsChevronUp /> : <BsChevronDown />}
        </button>
        <button
          type="button"
          className="mx-3 bg-transparent border-0"
          style={{ color: help ? "#FFD100" : "#FFFEFC" }}
          onMouseOver={(e) => {
            // showmenu(e);
            setHelp(true);
          }}
          onMouseLeave={() => {
            hidemenu();
            setHelp(false);
          }}
        >
          <span className="arrowspace" onMouseOver={showmenu}>
            Help
          </span>
          {help ? <BsChevronUp /> : <BsChevronDown />}
        </button>
      </div>
      <div className="d-flex align-items-center d-lg-none">
        <AiOutlineMenu style={{ fontSize: "28px" }} />
      </div>
      <div className="d-none d-lg-block">
        <button className="bg-transparent border-0 tryitfree">
          <img src="/login.png" alt="tryitfree" />
          <span className="login">Login</span>
        </button>
        <button className="bg-transparent border-0 tryitfree">
          <img src="/tryitfree.svg" alt="tryitfree" />
          <span className="tryittext">Try it Free</span>
        </button>
      </div>
    </div>
  );
}
export default Header;
