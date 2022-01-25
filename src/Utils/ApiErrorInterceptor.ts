import { AxiosError } from 'axios';

export const ApiErroInterceptor = (error: AxiosError) => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('@Aeras:accessToken');
    window.location.href = `${process.env.REACT_APP_URL}login`;
  }

  return Promise.reject(error);
};