import Axios from "axios";

const api = Axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
});

export const getDrinks = async () => {
  let res = await api.get();
  return res;
};
