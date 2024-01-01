import instance from "../lib/request";

export const getAll = async () => {
  try {
    let temp = await axios.get("http://localhost:8080/products");
    console.log(temp);
    return temp.data;
  } catch (error) {}
};
export const login = async () => {
  try {
    let temp = await axios.get("http://localhost:8080/accounts");
    console.log(temp);
    return temp.data;
  } catch (error) {}
};
// export const signIn = async (email, password) => {
//   try {
//     const temp = await axios.get("http://localhost:8080/accounts");
//     console.log(temp);
//     return temp.data;
//   } catch (error) {}
// };


