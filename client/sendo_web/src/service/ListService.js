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

export const LoginApi = async (email, password) => {
  try {
    const result = await instance.post("/login", {
      email: email,
      password: password,
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getProfile = async (token) => {
  try {
    const result = await axios.get(
      "https://website-ecommerce-kappa.vercel.app/api/profile",
      {
        token: token,
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
