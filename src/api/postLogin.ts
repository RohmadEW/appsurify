import { JWT } from "../types/auth";
import { apiClient } from "./api-client";

export interface PostLoginResponse extends Response {
  jwt: JWT;
}

export interface PostLoginArgs {
  username: string;
  email: string;
  password: string;
}

export const postLogin = async (args: PostLoginArgs) => {
  const response = await apiClient.post<PostLoginResponse>(
    "/auth/login/",
    args
  );

  return response.data.jwt;
};
