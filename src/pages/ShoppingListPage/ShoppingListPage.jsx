import { Helmet } from "react-helmet";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { fetchShoppingList } from "../../redux/user/operations";
import { selectUserShoppingList } from "../../redux/user/selectors";
import IngredientsShoppingList from "./components/IngredientsShoppingList/IngredientsShoppingList";

const ShoppingListPage = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const shoppingList = useSelector(selectUserShoppingList);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchShoppingList());
      setItems(shoppingList);
    };
    fetchData();
  }, [dispatch, shoppingList]);

  return (
    <>
      <Helmet>
        <title>Shopping list</title>
      </Helmet>
      <MainPageTitle title="Shopping list" />
      <IngredientsShoppingList shoppingList={items} onChange={setItems} />
    </>
  );
};

export default ShoppingListPage;
