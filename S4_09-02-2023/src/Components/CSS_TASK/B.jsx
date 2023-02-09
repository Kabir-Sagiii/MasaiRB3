import Style from "./B.module.css";
function B() {
  return (
    <div>
      <h3 id={Style.green} className={Style.h3}>
        B Component
      </h3>
    </div>
  );
}

export default B;
