import "./Image.css";

function Image(props) {
  return (
    <div className="Img">
      <img src={props.img} width="300" height="300" />
      <h3>{props.title.title}</h3>
    </div>
  );
}

export default Image;
