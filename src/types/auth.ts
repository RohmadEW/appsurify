import { User } from "./user";

export interface AuthType {
  isAuthenticated: boolean;
  token?: string | null;
  refresh?: string | null;
  user?: User;
}

export const initialAuthState: AuthType = {
  isAuthenticated: false,
};

export interface JWT {
  access: string;
  refresh: string;
  user: User;
}
