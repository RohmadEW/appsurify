export interface ErrorResponse {
  detail: string;
}

export interface Response<R = Record<string, string>> {
  success: boolean;
  detail: string;
  data?: R;
}
