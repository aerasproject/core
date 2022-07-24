export interface ICompany {
  id: string;
  name: string;
  document: string;
  phone: string;
  services: Array<string>;
  userId: string;
  addressId: string | null;
  createdAt: string;
  updatedAt: string;
}
