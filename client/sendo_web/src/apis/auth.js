import { request } from "@/lib/request";

export const signIn = async (email, password) => {
  return request.post(`/signin`, {
    email,
    password,
  });
};
