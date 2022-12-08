import "./ItemCost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownLong,
  faArrowUpLong,
} from "@fortawesome/free-solid-svg-icons";
const ItemCost = ({money}) => {
  const sign = {
    plus: {
      entity: "&#43",
      unicode: "\u002b",
    },
    minus: {
      entity: "&#8722",
      unicode: "\u2212",
    },
  };
  return (
    <div className={`item-cost flex-20 ${(money.income && "income") || "expense"} fa-3x flex-center`}>
      <span>
        {(money.income && sign.plus.unicode)  || sign.minus.unicode}$
        {money.amount}
      </span>
      <FontAwesomeIcon
        icon={(money.income && faArrowUpLong) || faArrowDownLong}
        className="m-left-20"
      />
    </div>
  );
};

export default ItemCost;