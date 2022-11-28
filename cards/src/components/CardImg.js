import "./CardImg.css";
import freelancer1 from "../assets/img/freelancer-1.jpg";

function CardImg() {
  return (
    <div>
      <div className="img-container">
        <div className="img-wrapper">
          <img src={freelancer1} alt="freelancer-one" />
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
}

export default CardImg;