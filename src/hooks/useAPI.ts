// import axios, { AxiosError, AxiosRequestConfig } from "axios";
// import { useToast } from "@/components/system/use-toast";

// type TPayload = {
//   method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
//   url: string;
//   data?: { [key: string]: unknown };
//   headers?: { [key: string]: string };
//   onSuccess?: (response: unknown) => void;
//   onError?: (error: unknown) => void;
// };

// const baseURL = import.meta.env.VITE_API_URL;

// const defaultHeaders = {
//   "Content-Type": "application/json",
// };

// export const useAPI = () => {
//   const { toast } = useToast();

//   const makeAPIRequest = async ({
//     method,
//     url,
//     data,
//     headers,
//     onSuccess,
//     onError,
//   }: TPayload) => {
//     try {
//       const response = await axios.request({
//         method,
//         url,
//         data,
//         headers: { ...defaultHeaders, ...headers },
//       });

//       onSuccess && onSuccess(response.data);

//       return response.data;
//     } catch (error) {
//       const axiosError = error as AxiosError;
//       onError && onError(axiosError);

//       throw axiosError;
//     }
//   };
//   return { makeAPIRequest };
// };
