import { UserType } from "./user";

export interface AuthType {
  isAuthenticated: boolean;
  token?: string | null;
  loading?: boolean;
  user?: UserType | null;
}

export const initialAuthState: AuthType = {
  isAuthenticated: false,
};
