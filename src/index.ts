import axios from 'axios';

// SERVICES
export * from './Services/Configs';
export * from './Services/Api';

// CONTROLLERS BETA
import { BetaCompanyController } from './Controllers/beta.company.controller';
import { BetaAddressController } from './Controllers/beta.address.controller';
import { BetaEnvironmentController } from './Controllers/beta.environment.controller';
import { BetaEquipmentController } from './Controllers/beta.equipment.controller';
import { BetaPublicAddressController } from './Controllers/beta.publicAddress.controller';
import { BetaTechnicianController } from './Controllers/beta.technician.controller';
import { BetaUserController } from './Controllers/beta.user.controller';

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
  const CompanyController = new BetaCompanyController(Api);
  const AddressController = new BetaAddressController(Api);
  const EnvironmentController = new BetaEnvironmentController(Api);
  const EquipmentController = new BetaEquipmentController(Api);
  const PublicAddressController = new BetaPublicAddressController(Api);
  const TechnicianController = new BetaTechnicianController(Api);

  return {
    Api, 
    UserController,
    CompanyController,
    AddressController,
    EnvironmentController,
    EquipmentController,
    PublicAddressController,
    TechnicianController,
  };
}