import { useRef } from "react";

function DOM(props) {
  let h2Ref = useRef(null); // {current:DOM Node }
  let buttonR = useRef(null);

  const changeContent = () => {
    h2Ref.current.innerText = "Hello React";
    h2Ref.current.style.color = "red";
    buttonR.current.style.color = "green";
    buttonR.current.style.padding = "10px";
  };

  return (
    <div>
      <h2 ref={h2Ref}>Welcome to React</h2>
      <button ref={buttonR} onClick={changeContent}>
        Change Style and Content
      </button>
    </div>
  );
}

export default DOM;
