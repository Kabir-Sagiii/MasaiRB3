// import "./A.css";
import style from "./A.module.css";
function A() {
  return (
    <div>
      <h2 id={style.red} className={style.h2}>
        A Component
      </h2>
    </div>
  );
}

export default A;
