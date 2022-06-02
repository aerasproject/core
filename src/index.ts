import axios from 'axios';
import { BetaUserController } from './Controllers/beta.user.controller';

// SERVICES
export * from './Services/Configs';
export * from './Services/Api';

// CONTROLLERS
export * from './Controllers/user.controller';
export * from './Controllers/beta.user.controller';
export * from './Controllers/address.controller';
export * from './Controllers/environment.controller';
export * from './Controllers/equipment.controller';
export * from './Controllers/publicAddress.controller';
export * from './Controllers/technician.controller';
export * from './Controllers/company.controller';

// TYPE
export * from './Types/User';
export * from './Types/Address';
export * from './Types/Environment';
export * from './Types/Equipment';
export * from './Types/Technician';
export * from './Types/PublicAddress';
export * from './Types/Company';

// UTILS
export * from './Utils/ApiErrorInterceptor';

// ENUMS
export * from './Enums/UserRoles';
export * from './Enums/TechnicianServices';
export * from './Enums/CompanyServices';

export interface InitCoreParams {
    apiUrl: string;
}

export function initCore({ apiUrl }: InitCoreParams) {
    const Api = axios.create({
        baseURL: apiUrl,
    });

    const UserController = new BetaUserController(Api);

    return {Api, UserController};
}