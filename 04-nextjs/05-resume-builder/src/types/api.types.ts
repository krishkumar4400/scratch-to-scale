export interface ApiResponses<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[] | null
}
