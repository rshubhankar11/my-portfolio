import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const MyCard = () => {
  const [show, setShow] = useState(false);

  const animation = useSpring({
    transform: show ? "scale(1)" : "scale(0)",
  });

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleClick}>Show Popup</button>
      <animated.div style={animation}>Hello, world!</animated.div>
    </div>
  );
};

export default MyCard;
