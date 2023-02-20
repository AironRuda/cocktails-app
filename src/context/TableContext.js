import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { cocktail } from "../api";
import { db } from "../firebase";

export const TableContext = createContext();

export const TableContextProvider = ({ children }) => {
  const [tablesArray, setTablesArray] = useState([]);
  const [currentTableNumber, setCurrentTableNumber] = useState(null);
  const [currentTable, setCurrentTable] = useState(null);
  const [cocktailMenu, setCocktailMenu] = useState();

  const increaseQuantity = (id, drinkImg, drinkName, drinkPrice) => {
    const order = currentTable.order;
    if (order.find((drink) => drink.id === id) == null) {
      let copyOfObject = {
        ...currentTable,
        order: [...order, { id, quantity: 1, drinkImg, drinkName, drinkPrice }],
      };
      setCurrentTable(copyOfObject);
    } else {
      let copyOfObject = {
        ...currentTable,
        order: order.map((drink) => {
          if (drink.id === id) {
            return { ...drink, quantity: drink.quantity + 1 };
          } else {
            return drink;
          }
        }),
      };
      setCurrentTable(copyOfObject);
    }
  };

  const decreaseQuantity = (id) => {
    const order = currentTable.order;
    if (order.find((drink) => drink.id === id)?.quantity === 1) {
      let copyOfObject = {
        ...currentTable,
        order: order.filter((drink) => drink.id !== id),
      };
      setCurrentTable(copyOfObject);
      console.log("sacar", copyOfObject);
    } else {
      let copyOfObject = {
        ...currentTable,
        order: order.map((drink) => {
          if (drink.id === id) {
            return { ...drink, quantity: drink.quantity - 1 };
          } else {
            return drink;
          }
        }),
      };
      setCurrentTable(copyOfObject);
    }
  };

  useEffect(() => {
    const getCurrentTableInfo = () => {
      setCurrentTable(
        tablesArray.find((item) => item.id === currentTableNumber)
      );
    };
    // currentTable && getCurrentTableInfo()
    currentTableNumber === null
      ? console.log("table non selected")
      : getCurrentTableInfo();
  }, [currentTableNumber]);

  useEffect(() => {
    const getCocktails = async () => {
      const cocktails = await cocktail.getDrinks();
      setCocktailMenu(cocktails.data.drinks);
    };
    const getInfo = async () => {
      const querySnapshot = await getDocs(collection(db, "tables"));
      querySnapshot.forEach((doc) => {
        setTablesArray((tablesArray) => [...tablesArray, doc.data()]);
      });
    };

    getCocktails();
    getInfo();
  }, []);

  return (
    <TableContext.Provider
      value={{
        tablesArray,
        setTablesArray,
        currentTableNumber,
        setCurrentTableNumber,
        currentTable,
        setCurrentTable,
        cocktailMenu,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
