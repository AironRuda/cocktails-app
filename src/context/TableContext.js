import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { db } from "../firebase";

export const TableContext = createContext();

export const TableContextProvider = ({ children }) => {
  const [tablesArray, setTablesArray] = useState([]);
  const [currentTableNumber, setCurrentTableNumber] = useState(null);
  const [currentTable, setCurrentTable] = useState(null);

  useEffect(() => {
    console.log("context", currentTableNumber);
    async function getTablesInfo() {
      const querySnapshot = await getDocs(collection(db, "tables"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    }
    currentTableNumber === null
      ? console.log("table non selected")
      : getTablesInfo();
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
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
