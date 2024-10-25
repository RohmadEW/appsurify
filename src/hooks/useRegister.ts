import { useMutation } from "@tanstack/react-query";
import { postRegister, PostRegisterArgs } from "../api/postRegister";

export const useRegister = () => {
  return useMutation<string, unknown, PostRegisterArgs>({
    mutationFn: async (args) => await postRegister(args),
  });
};
