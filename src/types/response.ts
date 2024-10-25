export interface ErrorResponse {
  detail?: string;
  non_field_errors?: string[];
}

export interface Response<R = Record<string, string>> {
  success: boolean;
  detail: string;
  data?: R;
}
