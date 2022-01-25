export interface IConfigs {
    REACT_APP_API_URL?: string;
  }
  
  export const Configs: IConfigs = {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  };
  