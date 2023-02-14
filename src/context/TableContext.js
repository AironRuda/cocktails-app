import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { db } from "../firebase";

export const TableContext = createContext();

export const TableContextProvider = ({ children }) => {
  const [tablesArray, setTablesArray] = useState([]);
  const [currentTableNumber, setCurrentTableNumber] = useState(null);
  const [currentTable, setCurrentTable] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      const querySnapshot = await getDocs(collection(db, "tables"));
      querySnapshot.forEach((doc) => {
        console.log("id", doc.id, doc.data());
        setTablesArray((tablesArray) => [...tablesArray, doc.data()]);
      });
    };
    getInfo();
  }, []);

  useEffect(() => {
    // async function getTablesInfo() {
    //   const querySnapshot = await getDocs(collection(db, "tables"));
    //   //   const actual = querySnapshot.map((doc) => doc.id === currentTableNumber);
    //   querySnapshot.forEach((doc) => {
    //     console.log("id", doc.id, doc.data());

    //     doc.id === currentTableNumber && setCurrentTable(doc.data);
    //   });
    // }
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
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
