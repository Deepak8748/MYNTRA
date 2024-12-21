import { useSelector } from "react-redux";
import Homeitem from "../components/homeitem";

const Home = () => {

  const items = useSelector(store => store.items)
  //console.log(items)
  return (
    <>
    <main>
        <div className="items-container">
          {items.map((item) => (<Homeitem key={item.id} item={item} ></Homeitem>))}
          {/*<Homeitem item={items[0]} ></Homeitem>*/}
        </div>
      </main>
    </>
  );
};

export default Home;