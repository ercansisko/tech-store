import { createContext, useContext } from "react";
import { useLocalStorageState } from "../helpers/useLocalStorageState";

const ShoppingContext = createContext();
function ShoppingProvider({ children }) {
  const [cart, setCart] = useLocalStorageState([], "cart");
  const addToCart = (item) => {
    if (cart.find((x) => x.id === item.id) === undefined)
      setCart((prev) => [...prev, item]);
    else
      setCart((prev) =>
        prev.map((p) => (p.id === item.id ? { ...p, amount: p.amount + 1 } : p))
      );
  };
  const deleteFromCart = (item) => {
    setCart((prev) => prev.filter((p) => p.id !== item.id));
  };
  const inc = (item) => {
    setCart((prev) =>
      prev.map((p) => (p.id === item.id ? { ...p, amount: p.amount + 1 } : p))
    );
  };
  const dec = (item) => {
    item.amount === 1
      ? setCart((prev) => prev.filter((p) => p.id !== item.id))
      : setCart((prev) =>
          prev.map((p) =>
            p.id === item.id ? { ...p, amount: p.amount - 1 } : p
          )
        );
  };
  const deleteAll = () => {
    setCart([]);
  };
  return (
    <ShoppingContext.Provider
      value={{ cart, addToCart, deleteFromCart, inc, dec, deleteAll }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}
function useShopping() {
  const context = useContext(ShoppingContext);
  if (!context) throw new Error("context used outside of provider");
  return context;
}
export default ShoppingProvider;
export { useShopping };
