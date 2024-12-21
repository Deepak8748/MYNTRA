import { useDispatch, useSelector } from "react-redux";
import { BagActions } from "../store/bagslice";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Homeitem = ({item}) => {

  const dispatch = useDispatch();
  const bagItems = useSelector(store => store.bag);
  const Found = bagItems.indexOf(item.id) >= 0;
  //console.log(item.id, Found)

  const handleAddtobag = () => {
    dispatch(BagActions.addToBag(item.id));

  }

  const handleRemove = () => {
    dispatch(BagActions.removeFromBag(item.id));

  }

  return (
    <>
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {Found ? 
      <button className="btn btn-add-bag btn-danger" onClick={handleRemove} >
      <MdDelete /> Remove
      </button> :
      <button className="btn btn-add-bag btn-success" onClick={handleAddtobag}>
      <MdOutlineAddCircleOutline /> Add to Bag
        </button> }
    </div>
    </>
  );
};

export default Homeitem;