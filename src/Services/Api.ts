import axios, { AxiosResponse } from 'axios';

import { Configs } from '..';
import { ApiErroInterceptor } from '../Utils/ApiErrorInterceptor';

export const Api = axios.create({
  baseURL: Configs({}).REACT_APP_API_URL,
});

Api.interceptors.response.use(
  (response): AxiosResponse => response,
  err => ApiErroInterceptor(err),
);