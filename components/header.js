import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { ReactComponent as tryitfree } from "/public/tryitfree.svg";

function Header() {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center my-4 text-white">
      <div>
        <img src="/logoicon.png" alt="logoimage" />
        <span className="flex align-items-center justify-content-center mx-2">
          <img src="/logotext.png" alt="logotext" />
        </span>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div className="mx-3">
          <span className="arrowspace">About</span>
          <BsChevronDown />
        </div>
        <div className="mx-3">
          <span className="arrowspace">How it Works</span>
          <BsChevronDown />
        </div>
        <div className="mx-3">
          <span className="arrowspace">Resources</span>
          <BsChevronDown />
        </div>
        <div className="mx-3">
          <span className="arrowspace">Pricing</span>
          <BsChevronDown />
        </div>
        <div className="mx-3">
          <span className="arrowspace">Help</span>
          <BsChevronDown />
        </div>
      </div>
      <div>
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
