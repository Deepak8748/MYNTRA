import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/items";
import { fetchStatusActions } from "../store/fetchstatus";

const Fetchitems = () => {

  const fetchstatus = useSelector(store => store.fetchStatus)

  const dispatch = useDispatch();


  useEffect(() => {
    if(fetchstatus.fetchDone) return;

    dispatch(fetchStatusActions.markFetchingStart())
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStart())

    fetch('http://localhost:8080/items',{signal})
      .then(res => res.json())
      .then(({items}) => {
        dispatch(fetchStatusActions.markFetchDone())
        dispatch(fetchStatusActions.markFetchingFinish())
        dispatch(itemActions.addInitialitem(items[0]))
      });

      return () => {
        controller.abort();
      };
  },[fetchstatus])

  return(
    <>
    </>
  );
};

export default Fetchitems;