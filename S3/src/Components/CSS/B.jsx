// import "./B.css";
import style from "./B.module.css";
function B() {
  return (
    <div>
      <h2 id={style.green} className={style.h2}>
        B Component
      </h2>
    </div>
  );
}

export default B;
