import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const { createContext, useState, useEffect } = require("react");

export const DayliMenuContext = createContext();

export const DayliMenuContextProvider = ({ children }) => {
  const [daylyMenuArray, setDaylyMenuArray] = useState([]);

  useEffect(() => {
    const getDailyMenuInfo = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "plates"));
        setDaylyMenuArray([]);
        querySnapshot.forEach((doc) => {
          setDaylyMenuArray((daylyMenuArray) => [
            ...daylyMenuArray,
            doc.data(),
          ]);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getDailyMenuInfo();
  }, []);

  return (
    <DayliMenuContext.Provider value={{ daylyMenuArray, setDaylyMenuArray }}>
      {children}
    </DayliMenuContext.Provider>
  );
};
