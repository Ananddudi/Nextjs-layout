import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

function Submenu() {
  //   const [] = useState(null);
  const center = useSelector((state) => state.center);
  // const bottom = useSelector((state) => state.bottom);

  const show = useSelector((state) => state.show_submenu);
  const link = useSelector((state) => state.linkName);
  const ref = useRef("");
  const refs = useRef("");
  const headings = useState([]);
  const [title, setTitle] = useState("");
  const [dec, setDec] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    switch (link) {
      case "About": {
        setTitle("About");
        return setDec(
          "We believe the right support has the power to change everything."
        );
      }
      case "How it Works": {
        setTitle("How it Works");
        return setDec(
          "Find usefull resources to help you naigate the NDIS as a Participant, Support Worker, or Coordinator. The blog is a great way to keep up with the latest stories from our Kynd Community."
        );
      }
      case "Resources": {
        setTitle("Resources");
        return setDec(
          "Find usefull resources to help you naigate the NDIS as a Participant, Support Worker, or Coordinator. The blog is a great way to keep up with the latest stories from our Kynd Community."
        );
      }
      case "Pricing": {
        return setTitle("no data");
      }
      case "Help": {
        return setTitle("no data");
      }
    }
  }, [show, link]);

  useEffect(() => {
    ref.current.style.left = `${center}px`;
    const heights = refs.current.getBoundingClientRect();
    ref.current.style.height = `${heights.height}px`;
    // ref.current.style.bottom = `${bottom}px`;
  }, [show, link]);

  return (
    <div
      ref={ref}
      className="submenu"
      onMouseOver={() => dispatch({ type: "open" })}
      onMouseLeave={() => dispatch({ type: "close" })}
    >
      <div className="submenu-box"></div>
      <div className="submenu-items">
        <div ref={refs} className="d-flex justify-content-start">
          <div>
            <div className="overflow-hidden fw-bold">{title}</div>
            <div className="overflow-hidden">{dec}</div>
          </div>
          <div>
            <div className="overflow-hidden fw-bold mx-2">some data</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Submenu;
