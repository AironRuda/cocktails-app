import { collection, getDocs, query, where } from "firebase/firestore";
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

  useEffect(() => {
    const getInfo = async () => {
      const querySnapshot = await getDocs(collection(db, "tables"));
      querySnapshot.forEach((doc) => {
        setTablesArray((tablesArray) => [...tablesArray, doc.data()]);
      });
    };
    const getCocktails = async () => {
      const cocktails = await cocktail.getDrinks();
      setCocktailMenu(cocktails.data.drinks);
    };
    getInfo();
    getCocktails();
  }, []);

  useEffect(() => {
    const getCurrentTableInfo = () => {
      setCurrentTable(
        tablesArray.find((item) => item.id === currentTableNumber)
      );
    };

    currentTableNumber === null
      ? console.log("table non selected")
      : getCurrentTableInfo();
  }, [currentTableNumber]);

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
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
