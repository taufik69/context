import { useEffect } from "react";
import { api } from "../Api";
import UseAuth from "./useAuth";
import axios from "axios";

export const UseAxios = () => {
  const { user, setUser } = UseAuth();
  const { token } = user;
  console.log(token, "auth from useAxios");

  useEffect(() => {
    // add a request intercepter
    // api.interceptors.request.use(
    //   (config) => {
    //     if (acessToken) {
    //       config.headers.Authorization = `Bearer ${auth.acessToken}`;
    //     }
    //     return config;
    //   },
    //   (error) => {
    //     return Promise.reject(error);
    //   }
    // );
    // add a response intercepter
    // api.interceptors.response.use(
    //   (response) => {
    //     return response;
    //   },
    //   async (error) => {
    //     const orginalRequest = error.config;
    //     if (error.response.status === 401 && !orginalRequest._retry) {
    //       orginalRequest._retry = true;
    //       try {
    //         const response = await api.post(
    //           `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
    //           {
    //             refreshToken: auth.refreshToken,
    //           }
    //         );
    //         const { token } = response.data;
    //         // now set the token in the header
    //         orginalRequest.headers["Authorization"] = `Bearer ${token}`;
    //         return axios(orginalRequest);
    //       } catch (error) {
    //         throw error;
    //       }
    //     }
    //   }
    // );
  }, []);
};
