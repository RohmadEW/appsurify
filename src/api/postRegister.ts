import { apiClient } from "./api-client";

export interface PostRegisterArgs {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

export const postRegister = async (args: PostRegisterArgs) => {
  const response = await apiClient.post<string>("/auth/register/", args);

  return response.data;
};
