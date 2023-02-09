import Style from "./A.module.css";

function A() {
  return (
    <div>
      <h3 id={Style.red} className={Style.h3}>
        A Component
      </h3>
    </div>
  );
}

export default A;
