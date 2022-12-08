import "./ItemIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemIcon = ({icons,size, classes, onClick}) => {
  return (
    <div className={`item-icon ${size || "fa-4x"} flex-20 flex-center`}>
      <span className='fa-layers fa-fw fa-xl' onClick={onClick ||null}>
        <FontAwesomeIcon icon={icons[0]} className={classes.bgColor} />
        <FontAwesomeIcon
          icon={icons[1]}
          inverse
          transform='shrink-8'
          className={classes.color}
        />
      </span>
    </div>
  );
};

export default ItemIcon;
