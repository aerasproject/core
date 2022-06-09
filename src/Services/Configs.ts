export interface IConfigs {
  REACT_APP_API_URL?: string;
}

export interface IConfigsParams {
  apiUrl?: string;
}

export function Configs({ apiUrl }: IConfigsParams): IConfigs {
  return {
    REACT_APP_API_URL: apiUrl || process.env.REACT_APP_API_URL,
  };
}
