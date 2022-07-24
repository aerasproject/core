import { Api } from "../Services";

import { ILoginParams, ITokenResponse } from "../Types/Authentication";

export class AuthenticationController {
  public async login(data: ILoginParams): Promise<ITokenResponse> {
    const response = await Api.post("/authenticate", data);

    return response.data;
  }
}
