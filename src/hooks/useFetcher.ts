import { AxiosRequestConfig, Method } from 'axios';
import { axiosClient } from '../api/axiosClient';
import { useLoading } from './useLoading';

export const useFetcher = () => {
  const { handleLoading } = useLoading();

  const fetcher = async (
    method: Method,
    url: string,
    rest: AxiosRequestConfig = {}
  ) => {
    try {
      handleLoading(true);
      const res = await axiosClient.request({ method, url, ...rest });
      handleLoading(false);
      return res.data;
    } catch (error) {
      handleLoading(false);
      console.log('에러', error);
    }
  };

  return fetcher;
};
