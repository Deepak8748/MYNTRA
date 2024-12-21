import Bagsummary from "../components/bagsummary";
import Bagitem from "../components/bagitem";
import { useSelector } from "react-redux";

const Bag = () => {

  const bagItems = useSelector(store => store.bag);
  const items = useSelector(store => store.items);
  const finalItems = items.filter(item => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (<Bagitem item={item} />))}
          </div>
          <Bagsummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
