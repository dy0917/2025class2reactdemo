import { useEffect, useRef, useState } from "react";
export default function RefCounter() {
  let countRef = useRef(0); // one counter stored in a ref
  let count = 0; // one counter stored in a normal variable
  const [stateCount, setStateCount] = useState(0);
  function handleClick() {
    // update countRef object when clicking, via current property
    countRef.current = countRef.current + 1;
    count = count + 1; // update count variable when clicking
    // both counts should be the same value
    // setStateCount(stateCount + 1);
    alert(`You clicked ${countRef.current} (${count}) times!`);
  }
  return (
    <div className="RefCounter componentBox">
      <button onClick={handleClick}>
        REFCOUNTER: Click me!
        {count} {countRef.current} {stateCount}
        {/* try rendering {count} and {countRef.current} here */}
      </button>
    </div>
  );
}
