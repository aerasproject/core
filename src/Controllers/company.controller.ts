import { ICompany } from "../Types/Company";

import { Api } from "../Services";

export interface ICompanyDataParams {
  name: string;
  document: string;
  phone: string;
  services: Array<string>;
}

export class CompanyController {
  public async create(data: ICompanyDataParams): Promise<ICompany> {
    const response = await Api.post("/company", data);

    return response.data;
  }
}
