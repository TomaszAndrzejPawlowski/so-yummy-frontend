import { useDispatch } from "react-redux";
import { removeIngredientFromShoppingList } from "../../../../redux/user/operations";

const IngredientsShoppingList = ({ shoppingList, onChange }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (item, index) => {
    const newShoppingList = [...shoppingList];
    newShoppingList.splice(index, 1);
    onChange(newShoppingList);
    dispatch(removeIngredientFromShoppingList(item));
  };
  return (
    <>
      <ul>
        <li key="Products">
          <p>Products</p>
        </li>
        <li key="Amount">
          <p>Amount</p>
        </li>
        <li key="Remove">
          <p>Remove</p>
        </li>
      </ul>
      <ul>
        {shoppingList.length > 0 ? (
          shoppingList.map((item, index) => (
            <li key={item._id}>
              <img src={item.thb} alt={`${item.ttl}`} />
              <p>{item.ttl}</p>
              <div>
                <p>{item.measure}</p>
              </div>
              <button
                type="button"
                onClick={() =>
                  handleRemoveItem(
                    { id: item._id, measure: item.measure },
                    index
                  )
                }
              >
                X
              </button>
            </li>
          ))
        ) : (
          <p>Add some ingredients to your shopping list from recipes</p>
        )}
      </ul>
    </>
  );
};

export default IngredientsShoppingList;
